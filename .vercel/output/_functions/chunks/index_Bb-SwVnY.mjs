function render({ slots: ___SLOTS___ }) {
		return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Course Content Manager</title>
  <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
</head>
<body>
  <!-- Include the script that builds the page and powers Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
`
	}
render["astro:html"] = true;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: render
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
