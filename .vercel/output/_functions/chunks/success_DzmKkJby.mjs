import { c as createComponent } from './astro-component_BicCUq0d.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead } from './sequence_CwIBq7rn.mjs';
import { r as renderComponent } from './entrypoint_Cud1oL5f.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BQ268DzX.mjs';

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank You", "data-astro-cid-5y44lzmc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="success-container card" data-astro-cid-5y44lzmc> <div class="icon" data-astro-cid-5y44lzmc>🎉</div> <h1 data-astro-cid-5y44lzmc>Thank You for Joining!</h1> <p data-astro-cid-5y44lzmc>Your payment was successful and you now have full access to the course.</p> <div class="next-steps" data-astro-cid-5y44lzmc> <p data-astro-cid-5y44lzmc><strong data-astro-cid-5y44lzmc>Note:</strong> We are simulating the "paid" role for this demonstration. In a live Netlify environment, you would use a Netlify Function to automatically add the "paid" role to your user metadata after a Stripe hook.</p> <a href="/course/dashboard" class="btn" data-astro-cid-5y44lzmc>Go to Dashboard</a> </div> </div> ` })} ${renderScript($$result, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/success.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/success.astro", void 0);

const $$file = "/Users/benjaminmustonen/.gemini/antigravity/scratch/wp-netlify-site/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
