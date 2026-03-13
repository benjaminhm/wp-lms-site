import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_Cud1oL5f.mjs';
import { $ as $$Layout } from './Layout_BQ268DzX.mjs';
import { $ as $$Sidebar } from './Sidebar_DtXnl2mh.mjs';
import { g as getCollection } from './_astro_content_DZRJXFB-.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const formattedDate = (date) => date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="site-layout" data-astro-cid-5tznm7mj> <section class="main-content" data-astro-cid-5tznm7mj> <h1 class="page-title" data-astro-cid-5tznm7mj>Blog Archive</h1> ${posts.map((post) => renderTemplate`<article class="post-preview card" data-astro-cid-5tznm7mj> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="post-image" data-astro-cid-5tznm7mj>`} <div class="post-meta" data-astro-cid-5tznm7mj> <span class="date" data-astro-cid-5tznm7mj>${formattedDate(post.data.pubDate)}</span> • <span class="author" data-astro-cid-5tznm7mj>By ${post.data.author}</span> </div> <h2 class="post-title" data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a></h2> <p class="post-excerpt" data-astro-cid-5tznm7mj>${post.data.description}</p> <a${addAttribute(`/blog/${post.id}`, "href")} class="read-more" data-astro-cid-5tznm7mj>Read More &rarr;</a> </article>`)} </section> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-5tznm7mj": true })} </div> ` })}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/blog/index.astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
