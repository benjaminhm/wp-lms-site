import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_Cud1oL5f.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DZRJXFB-.mjs';
import { $ as $$Layout } from './Layout_BQ268DzX.mjs';
import { $ as $$Sidebar } from './Sidebar_DtXnl2mh.mjs';

async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const formattedDate = (date) => date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="site-layout" data-astro-cid-4sn4zg3r> <article class="main-content single-post" data-astro-cid-4sn4zg3r> ${entry.data.image && renderTemplate`<img${addAttribute(entry.data.image, "src")}${addAttribute(entry.data.title, "alt")} class="featured-image" data-astro-cid-4sn4zg3r>`} <div class="post-header" data-astro-cid-4sn4zg3r> <div class="post-meta" data-astro-cid-4sn4zg3r> <span class="date" data-astro-cid-4sn4zg3r>${formattedDate(entry.data.pubDate)}</span> • <span class="author" data-astro-cid-4sn4zg3r>By ${entry.data.author}</span> </div> <h1 class="post-title" data-astro-cid-4sn4zg3r>${entry.data.title}</h1> </div> <div class="post-content" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </div> <div class="post-footer" data-astro-cid-4sn4zg3r> ${entry.data.tags && renderTemplate`<div class="tags" data-astro-cid-4sn4zg3r> <strong data-astro-cid-4sn4zg3r>Tags:</strong> ${entry.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-4sn4zg3r>#${tag}</span>`)} </div>`} </div> </article> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-4sn4zg3r": true })} </div> ` })}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
