---
title: "Stripe Integration Deep Dive"
description: "Turning your knowledge into revenue with real payments."
module: "Advanced LMS"
order: 6
freePreview: false
---

The final step in your LMS evolution is getting paid.

## The Stripe Flow
1. **User clicks Purchase**: They are sent to a secure Stripe Page.
2. **Success**: Stripe sends a "Webhook" back to Netlify.
3. **Unlock**: Netlify automatically gives that user the `paid` role.

This means you can make money while you sleep, without manually checking every payment!
