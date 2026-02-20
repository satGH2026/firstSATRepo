# Marketing Funnel Landing Page Builder

A simple static web app that generates marketing funnel landing page content based on:

- **Business sector**
- **Type of business**

The generated landing page includes a CTA button that routes users to a **Contact Us** page.

## Pages

- `index.html`: Funnel landing page builder + generated funnel copy.
- `contact.html`: Contact form with required fields:
  - Name
  - Email Address
  - Message

## Run locally

Because this is a static app, you can use any static server. Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
