import { createServerClient } from '@supabase/ssr';
import { a6 as defineMiddleware, af as sequence } from './chunks/sequence_DqVODMpl.mjs';
import 'piccolore';
import 'clsx';

const protectedRoutes = ["/course"];
const publicRoutes = ["/course/dashboard", "/course/01-introduction"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { cookies, request, url, currentRoute } = context;
  const supabase = createServerClient(
    "https://mhegotcnbnatbflttjcw.supabase.co",
    "sb_publishable_IicmDqEJ2KLKUTZVlRYyPQ_dFtcoMy1",
    {
      cookies: {
        getAll() {
          return Object.keys(cookies).map((name) => ({
            name,
            value: cookies.get(name)?.value || ""
          }));
        },
        setAll(cookieObjects) {
          cookieObjects.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        }
      }
    }
  );
  const isProtected = protectedRoutes.some((route) => url.pathname.startsWith(route));
  const isPublic = publicRoutes.some((route) => url.pathname.startsWith(route) || url.pathname === route + "/");
  if (isProtected && !isPublic) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      return context.redirect("/course/dashboard");
    }
  }
  context.locals.supabase = supabase;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
