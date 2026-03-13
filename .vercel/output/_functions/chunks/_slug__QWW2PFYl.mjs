import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute, aR as renderSlot } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_Cud1oL5f.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DZRJXFB-.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BQ268DzX.mjs';
import 'clsx';

const $$CourseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CourseLayout;
  const lessons = (await getCollection("course")).sort((a, b) => a.data.order - b.data.order);
  const modules = lessons.reduce((acc, lesson) => {
    const moduleName = lesson.data.module || "General";
    if (!acc[moduleName]) acc[moduleName] = [];
    acc[moduleName].push(lesson);
    return acc;
  }, {});
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-bks3gknv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="course-container protected-content" data-astro-cid-bks3gknv> <aside class="course-sidebar card" data-astro-cid-bks3gknv> <h3 data-astro-cid-bks3gknv>Curriculum</h3> <nav class="lesson-nav" data-astro-cid-bks3gknv> ${Object.entries(modules).map(([moduleName, moduleLessons]) => renderTemplate`<div class="module-group" data-astro-cid-bks3gknv> <h4 class="module-title" data-astro-cid-bks3gknv>${moduleName}</h4> <ul data-astro-cid-bks3gknv> ${moduleLessons.map((lesson) => renderTemplate`<li${addAttribute(lesson.data.freePreview ? "free" : "locked", "class")} data-astro-cid-bks3gknv> <a${addAttribute(`/course/${lesson.id}`, "href")} class="lesson-link" data-astro-cid-bks3gknv> <span class="status-icon" data-astro-cid-bks3gknv>${lesson.data.freePreview ? "🔓" : "🔒"}</span> <span class="lesson-title" data-astro-cid-bks3gknv>${lesson.data.title}</span> </a> </li>`)} </ul> </div>`)} </nav> </aside> <main class="course-main card" data-astro-cid-bks3gknv> <div id="gatekeeper" class="gatekeeper hidden" data-astro-cid-bks3gknv> <div class="locked-message" data-astro-cid-bks3gknv> <h2 data-astro-cid-bks3gknv>🔒 This Lesson is Locked</h2> <p data-astro-cid-bks3gknv>You need to purchase the course to access this content.</p> <a href="/#pricing" class="pricing-btn" data-astro-cid-bks3gknv>View Pricing</a> </div> </div> <div id="lesson-body" data-astro-cid-bks3gknv> ${renderSlot($$result2, $$slots["default"])} </div> </main> </div> ` })} ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/layouts/CourseLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/layouts/CourseLayout.astro", void 0);

const $$ProgressBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProgressBtn;
  const { lessonId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="complete-btn" class="progress-btn"${addAttribute(lessonId, "data-lesson")} data-astro-cid-i4uc3jnx> <span class="btn-text" data-astro-cid-i4uc3jnx>Mark as Complete</span> <span class="check hidden" data-astro-cid-i4uc3jnx>✓</span> </button> ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/ProgressBtn.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/components/ProgressBtn.astro", void 0);

async function getStaticPaths() {
  const lessons = await getCollection("course");
  return lessons.map((lesson) => ({
    params: { slug: lesson.id },
    props: { lesson }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { lesson } = Astro2.props;
  const { Content } = await renderEntry(lesson);
  return renderTemplate`${renderComponent($$result, "CourseLayout", $$CourseLayout, { "title": lesson.data.title, "description": lesson.data.description, "data-astro-cid-afvkppsn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lesson-content" data-astro-cid-afvkppsn> <div class="lesson-header" data-astro-cid-afvkppsn> <span class="lesson-tag" data-astro-cid-afvkppsn>Module: ${lesson.data.module}</span> <h1 data-astro-cid-afvkppsn>${lesson.data.title}</h1> </div> ${lesson.data.videoUrl && renderTemplate`<div class="video-container" data-astro-cid-afvkppsn> <iframe${addAttribute(lesson.data.videoUrl, "src")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-afvkppsn></iframe> </div>`} <div class="prose" data-astro-cid-afvkppsn> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-afvkppsn": true })} </div> ${renderComponent($$result2, "ProgressBtn", $$ProgressBtn, { "lessonId": lesson.id, "data-astro-cid-afvkppsn": true })} <div class="lesson-footer" data-astro-cid-afvkppsn> <hr data-astro-cid-afvkppsn> <p data-astro-cid-afvkppsn>Having trouble? <a href="/contact" data-astro-cid-afvkppsn>Contact Support</a></p> </div> </div> ` })}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/course/[slug].astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/course/[slug].astro";
const $$url = "/course/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
