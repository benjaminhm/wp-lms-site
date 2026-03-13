---
title: "Vanilla CSS Magic"
description: "How to build premium interfaces without bloated frameworks."
module: "Design & UI"
order: 3
freePreview: false
---

Professional design doesn't require Tailwind or Bootstrap. In this lesson, we explore the power of standard CSS Variables and Modern Flexbox.

## CSS Variables
We use variables in `global.css` to keep our theme consistent:
```css
:root {
  --color-primary: #1a73e8;
  --color-accent: #fbbc04;
}
```

## Glassmorphism
To get that "Premium" look, we use subtle blurs and transparency:
```css
.card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
```
