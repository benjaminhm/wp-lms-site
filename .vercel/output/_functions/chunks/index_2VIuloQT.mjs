import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_Cud1oL5f.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BQ268DzX.mjs';
import { $ as $$Sidebar } from './Sidebar_DtXnl2mh.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const posts = [
    {
      title: "Hello World: Welcome to My New Site",
      date: "March 13, 2026",
      excerpt: "Welcome to your brand new website. This is your first post. Edit or delete it, then start writing!",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
    }
  ];
  const features = [
    { title: "Step-by-Step Lessons", desc: "Over 20+ modules taking you from beginner to expert." },
    { title: "Lifetime Access", desc: "One-time payment. No subscriptions. Access forever." },
    { title: "Community Support", desc: "Access to our private Discord for help." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero card" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <h1 id="hero-title" data-astro-cid-j7pv25f6>Master Modern Web Design with PremiumPress</h1> <p id="hero-sub" class="hero-sub" data-astro-cid-j7pv25f6>The ultimate course for building high-performance, WordPress-style sites with Astro and Netlify.</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <a id="hero-primary" href="#pricing" class="btn btn-primary" data-astro-cid-j7pv25f6>Join the Course</a> <a href="/course/dashboard" class="btn btn-secondary" data-astro-cid-j7pv25f6>Go to Dashboard</a> </div> </div> </section>  <section class="features" data-astro-cid-j7pv25f6> ${features.map((f) => renderTemplate`<div class="feature card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${f.title}</h3> <p data-astro-cid-j7pv25f6>${f.desc}</p> </div>`)} </section> <div class="site-layout" data-astro-cid-j7pv25f6> <section class="main-content" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Latest from the Blog</h2> ${posts.map((post) => renderTemplate`<article class="post-preview card" data-astro-cid-j7pv25f6> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="post-image" data-astro-cid-j7pv25f6> <div class="post-meta" data-astro-cid-j7pv25f6> <span class="date" data-astro-cid-j7pv25f6>${post.date}</span> • <span class="author" data-astro-cid-j7pv25f6>By ${post.author}</span> </div> <h2 class="post-title" data-astro-cid-j7pv25f6><a href="#" data-astro-cid-j7pv25f6>${post.title}</a></h2> <p class="post-excerpt" data-astro-cid-j7pv25f6>${post.excerpt}</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>Read More &rarr;</a> </article>`)} </section> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-j7pv25f6": true })} </div>  <section id="pricing" class="pricing-section" data-astro-cid-j7pv25f6> <div class="pricing-card card featured" data-astro-cid-j7pv25f6> <div class="badge" data-astro-cid-j7pv25f6>Most Popular</div> <h2 data-astro-cid-j7pv25f6>Full Course Access</h2> <div class="price" data-astro-cid-j7pv25f6>$199<span class="currency" data-astro-cid-j7pv25f6>USD</span></div> <ul class="pricing-features" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>All 50+ Modern Web Lessons</li> <li data-astro-cid-j7pv25f6>Netlify & Astro Templates</li> <li data-astro-cid-j7pv25f6>Stripe Integration Guide</li> <li data-astro-cid-j7pv25f6>Private Community Discord</li> </ul> <button id="checkout-btn" class="btn btn-checkout" data-astro-cid-j7pv25f6>Purchase Now</button> </div> </section> ` })} ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/index.astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
