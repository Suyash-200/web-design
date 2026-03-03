Mangalam HDPE Pipes - Product Website
A modern, responsive product showcase website for Mangalam HDPE Pipes and industrial machinery solutions. Built with vanilla HTML, CSS, and JavaScript.

📋 Project Overview
This website serves as a comprehensive product catalog and company profile for Mangalam HDPE Pipes, featuring:

Premium HDPE pipes and coils product showcase

Technical specifications and certifications

Manufacturing process visualization

Customer testimonials

Resource downloads

Contact and inquiry forms

🚀 Features
1. Sticky Header Navigation
Appears when scrolling up beyond the first fold

Disappears when scrolling down

Provides quick access to key pages and contact

2. Interactive Image Carousel
High-quality product images

Zoom preview functionality on hover

Auto-play with manual controls

Thumbnail navigation

3. Alternating Section Design
Clear visual separation using alternating background colors (light gray / white)

Subtle borders between sections

Consistent spacing and typography

4. Fully Responsive Layout
Mobile-first approach

Adapts seamlessly to all screen sizes (mobile, tablet, desktop)

Touch-friendly navigation

5. Interactive Elements
FAQ Accordion – Click to expand/collapse answers

Process Tabs – Interactive manufacturing steps

Application Carousel – Scrollable industry applications

Scroll Reveal Animations – Elements fade in as you scroll

6. Technical Specifications Table
Comprehensive product parameters

Dark theme for emphasis

Hover effects for better readability

7. Resource Library
Downloadable PDF documents

Installation manuals, handbooks, engineering specs

8. Contact & Inquiry Forms
Quote request form

Catalogue request

Phone and email contact information

🛠️ Technologies Used
HTML5 – Semantic markup

CSS3 – Flexbox, Grid, custom properties (variables), animations

JavaScript – Vanilla JS (no frameworks/libraries)

Google Fonts – Urbanist (primary font)

Unsplash – Placeholder/stock images

📁 File Structure
text
project/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
│
└── assets/ (optional)  # For custom images (logo, brand logos, etc.)
🎨 Design Highlights
Element	Description
Color Scheme	Navy blue (#1e2a6e) as primary, light gray (#f4f4f6) and white as alternating backgrounds
Typography	Urbanist (sans-serif) – clean, modern, highly readable
Buttons	Rounded corners, hover effects, consistent styling
Cards	Subtle shadows, hover animations, border radius
Tables	Clean, bordered, with hover states
📱 Responsive Breakpoints
Device	Max Width	Adjustments
Desktop	>1024px	Full grid layouts
Tablet	901px - 1024px	Reduced columns
Small Tablet	601px - 900px	Stacked sections
Mobile	≤600px	Single column, full-width elements
🔧 Key Functionality Explained
Sticky Header
javascript
// Appears when scrolling up past hero section
hdr.classList.toggle("visible", y > fold && y < lastY);
Image Zoom
Lens follows mouse movement

Background image scales to 300% for zoom effect

Smooth opacity transitions

FAQ Accordion
Click questions to reveal answers

Only one answer open at a time

Icon changes to indicate state

Process Tabs
Click different manufacturing stages

Content updates dynamically

Visual active state indication

🧩 Section Breakdown
Hero Section – Product title, features, price, carousel

Technical Specifications – Detailed parameters table

Key Features – 6 benefit cards with icons

FAQ – Accordion with common questions + catalogue request

Applications – Scrollable industry cards

Manufacturing Process – Interactive tabs

Testimonials – Customer quotes with avatars

Portfolio – Solution cards with "Learn More"

Resources – Downloadable PDFs

Contact – Form + information

Footer – Company info, links, social

🚦 Getting Started
Option 1: Direct Download
Download the three files: index.html, styles.css, script.js

Place them in the same folder

Open index.html in any modern browser

Option 2: Local Development
bash
# Clone or download the files
cd your-project-folder
# Open index.html in browser
Option 3: Deploy Online
Upload the files to any static hosting service:

GitHub Pages

Netlify

Vercel

Any web server

🌐 Browser Support
Browser	Version
Chrome	Latest
Firefox	Latest
Safari	Latest
Edge	Latest
Opera	Latest
📝 Customization Guide
Change Colors
Edit CSS :root variables:

css
:root {
    --navy: #1e2a6e;        /* Primary color */
    --blue-lt: #3d5bd4;      /* Accent color */
    --bg: #f4f4f6;           /* Primary background */
    --bg-alt: #ffffff;        /* Alternate background */
}
Update Images
Replace Unsplash URLs in HTML with your own images.

Modify Content
Update text in HTML sections

Change product details, prices, features

Add/remove FAQ items

Adjust Carousel Images
Edit the IMGS array in script.js:

javascript
const IMGS = ["url1", "url2", ...];
📄 License
This project is free to use for commercial and personal purposes. Attribution appreciated but not required.

📞 Contact
For questions or support:

Email: info@meeraind.com (placeholder)

Phone: +91-XXX-XXX-XXXX (placeholder)

🙏 Acknowledgments
Fonts: Google Fonts (Urbanist)

Images: Unsplash (placeholders)

Icons: Unicode characters and SVGs

Built with ❤️ using vanilla HTML, CSS, and JavaScript
