---
title: "Securing with Netlify Identity"
description: "Setting up the gatekeeper for your course content."
module: "Advanced LMS"
order: 5
freePreview: false
---

In this advanced lesson, we look at how the login system actually protects your files.

## The Identity Widget
We use a small script that talks to Netlify's servers. When a user logs in, they get a "JWT Token" (like a digital VIP pass).

## The Access Guard
I've implemented a `checkAccess()` function in our layouts that looks for this token. If it doesn't see one, it hides the lesson content and shows the "Locked" message.

This is a **Client-Side Guard**, which is perfect for most courses!
