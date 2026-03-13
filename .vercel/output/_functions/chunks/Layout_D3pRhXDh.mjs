import { c as createComponent } from './astro-component_z7cAEwVD.mjs';
import 'piccolore';
import { P as createRenderInstruction, x as maybeRenderHead, a2 as addAttribute, L as renderTemplate, aX as renderHead, aR as renderSlot } from './sequence_DqVODMpl.mjs';
import { r as renderComponent } from './entrypoint_CIKYOezl.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Course", href: "/course/dashboard" },
    { name: "About", href: "/about" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>Premium<span class="accent" data-astro-cid-3ef6ksr2>Press</span></span> </a> <nav class="main-nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.name}</a></li>`)} <li data-astro-cid-3ef6ksr2><button id="auth-btn" class="auth-btn" data-astro-cid-3ef6ksr2>Not Logged In</button></li> </ul> </nav> </div> </header> ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container footer-inner" data-astro-cid-sz7xmlte> <div class="footer-info" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} PremiumPress. Built with Astro & Powered by Netlify.</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="/privacy" data-astro-cid-sz7xmlte>Privacy Policy</a> <a href="/terms" data-astro-cid-sz7xmlte>Terms of Service</a> </div> </div> </footer>`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/Footer.astro", void 0);

const $$SupabaseAuth = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="auth-modal" class="auth-modal hidden" data-astro-cid-knkaduq2> <div class="auth-card card" data-astro-cid-knkaduq2> <button id="close-auth" class="close-btn" data-astro-cid-knkaduq2>&times;</button> <div class="auth-tabs" data-astro-cid-knkaduq2> <button class="tab-btn active" data-tab="login" data-astro-cid-knkaduq2>Login</button> <button class="tab-btn" data-tab="register" data-astro-cid-knkaduq2>Register</button> </div> <!-- Login Form --> <form id="login-form" class="auth-form" data-astro-cid-knkaduq2> <h2 data-astro-cid-knkaduq2>Welcome Back</h2> <div class="input-group" data-astro-cid-knkaduq2> <label for="login-email" data-astro-cid-knkaduq2>Email</label> <input type="email" id="login-email" required data-astro-cid-knkaduq2> </div> <div class="input-group" data-astro-cid-knkaduq2> <label for="login-password" data-astro-cid-knkaduq2>Password</label> <input type="password" id="login-password" required data-astro-cid-knkaduq2> </div> <div id="login-error" class="error-msg hidden" data-astro-cid-knkaduq2></div> <button type="submit" class="btn btn-primary" id="login-submit" data-astro-cid-knkaduq2>Login</button> </form> <!-- Register Form --> <form id="register-form" class="auth-form hidden" data-astro-cid-knkaduq2> <h2 data-astro-cid-knkaduq2>Create Account</h2> <div class="input-group" data-astro-cid-knkaduq2> <label for="register-email" data-astro-cid-knkaduq2>Email</label> <input type="email" id="register-email" required data-astro-cid-knkaduq2> </div> <div class="input-group" data-astro-cid-knkaduq2> <label for="register-password" data-astro-cid-knkaduq2>Password (min 6 chars)</label> <input type="password" id="register-password" required minlength="6" data-astro-cid-knkaduq2> </div> <div id="register-error" class="error-msg hidden" data-astro-cid-knkaduq2></div> <div id="register-success" class="success-msg hidden" data-astro-cid-knkaduq2>Check your email for a confirmation link!</div> <button type="submit" class="btn btn-primary" id="register-submit" data-astro-cid-knkaduq2>Register</button> </form> </div> </div> ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/SupabaseAuth.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/SupabaseAuth.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "A WordPress-style site built with Astro" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Premium Site</title><!-- Netlify Identity Removed for Supabase Migration -->${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "SupabaseAuth", $$SupabaseAuth, {})} </body></html>`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
