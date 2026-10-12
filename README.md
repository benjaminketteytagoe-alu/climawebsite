# climawebsite
Clima Aqua Africa

## Contact Form — Where Responses Are Stored

**Current status:** The contact form (`#partner-form` in `index.html`) is connected to **Formsubmit.co** and sends submissions directly to **climaaquaafrica@gmail.com**.

### How It Works

- Form data is collected via JavaScript in `js/ui-controller.js` and sent to Formsubmit.co's AJAX endpoint.
- Formsubmit.co forwards each submission as an email to `climaaquaafrica@gmail.com`.
- No backend server or database is needed — Formsubmit.co handles everything.

### ⚠️ One-Time Activation Required

Before the form starts receiving submissions, you must **activate the email address**:

1. Submit the form once from the live website (fill in any test data and click "Submit Inquiry").
2. Check the inbox of `climaaquaafrica@gmail.com` for an activation email from Formsubmit.co.
3. Click the **Activate** button in that email.
4. After activation, all future form submissions will be delivered directly to your inbox.

### Form Fields Collected

| Field | ID | Required |
|---|---|---|
| Full Name | `fullName` | Yes |
| Email Address | `email` | Yes |
| Organization / Company | `organization` | No |
| Partnership Interest | `interestType` | Yes |
| Message / Inquiry | `message` | Yes |

Each email received will contain all 5 fields with the subject line: **"New Partnership Inquiry - ClimaAqua Africa Website"**.

## Image Assets

All images are hosted locally in the `assets/` directory:

| Image | Location | Used In |
|---|---|---|
| Logo | `assets/icons/logo.jpeg` | Navigation bar |
| Hero Background | `assets/images/hero-bg.jpg` | Hero section visual card |
| Product Catfish | `assets/images/product-catfish.jpg` | All 4 product cards |
| IoT Pond | `assets/images/iot-pond.jpg` | IoT Tech section background |
| BSF Feed | `assets/images/bsf-feed.webp` | Circular Economy pillar card |
| Avatar Placeholder | `assets/images/avatar-placeholder.jpg` | Not yet used (reserved for footer team section) |
