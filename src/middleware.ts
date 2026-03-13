import { createServerClient } from '@supabase/ssr';
import { defineMiddleware } from 'astro:middleware';

const protectedRoutes = ['/course'];
const publicRoutes = ['/course/dashboard', '/course/01-introduction'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { cookies, request, url, currentRoute } = context;

  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return Object.keys(cookies).map(name => ({
            name,
            value: cookies.get(name)?.value || '',
          }));
        },
        setAll(cookieObjects) {
          cookieObjects.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Check if we need to protect this route
  const isProtected = protectedRoutes.some(route => url.pathname.startsWith(route));
  const isPublic = publicRoutes.some(route => url.pathname.startsWith(route) || url.pathname === route + '/');

  if (isProtected && !isPublic) {
    const { data: { session } } = await supabase.auth.getSession();

    // If no session, redirect to dashboard so they can logic
    if (!session) {
      return context.redirect('/course/dashboard');
    }
  }

  // Set Supabase instance on locals so Astro pages can access it
  context.locals.supabase = supabase;

  return next();
});
