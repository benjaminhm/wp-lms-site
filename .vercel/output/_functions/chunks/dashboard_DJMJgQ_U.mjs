import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_CF5rQAbt.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_B3NgrknH.mjs';
import { g as getCollection } from './_astro_content_B6pY2y9Q.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const lessons = (await getCollection("course")).sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Course Dashboard", "data-astro-cid-actdcpc5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-header card" data-astro-cid-actdcpc5> <h1 data-astro-cid-actdcpc5>Welcome to Your Course</h1> <p data-astro-cid-actdcpc5>Track your progress and access all your lessons below.</p> </div> <div class="lesson-grid" data-astro-cid-actdcpc5> ${lessons.map((lesson) => renderTemplate`<div class="lesson-card card" data-lesson-item${addAttribute(lesson.data.freePreview ? "true" : "false", "data-free")} data-astro-cid-actdcpc5> <div class="lesson-num" data-astro-cid-actdcpc5>${lesson.data.order}</div> <div class="lesson-info" data-astro-cid-actdcpc5> <h3 data-astro-cid-actdcpc5>${lesson.data.title}</h3> <p data-astro-cid-actdcpc5>${lesson.data.description}</p> <a${addAttribute(`/course/${lesson.id}`, "href")} class="btn lesson-link" data-astro-cid-actdcpc5> ${lesson.data.freePreview ? "Start Preview" : "Access Lesson"} </a> </div> </div>`)} </div> ${renderScript($$result2, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/course/dashboard.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/course/dashboard.astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/course/dashboard.astro";
const $$url = "/course/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
