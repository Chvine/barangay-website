# Barangay Canitoan Official Website

Welcome to the official website project for **Barangay Canitoan**, located in Cagayan de Oro City, Misamis Oriental, Philippines. This website was developed to provide residents with an accessible, digital platform for barangay services, emergency hotlines, community announcements, and local governance information.

## 🎯 Project Overview
This project was built to modernize the digital presence of Barangay Canitoan. It serves as a central hub for the community to easily find critical information without needing to physically visit the Barangay Hall. 

The website is **fully responsive**, meaning it works flawlessly on desktop computers, tablets, and mobile smartphones.

## 🛠️ Technology Stack
This website was built using fundamental web technologies to ensure simplicity, speed, and easy maintenance:
- **HTML5**: For semantic structuring of the web pages.
- **Vanilla CSS3**: For all styling, layout (using Modern CSS Grid and Flexbox), and responsive design. *Note: All CSS is written internally within each HTML file (`<style>`) for simpler code organization.*
- **Vanilla JavaScript**: For lightweight interactivity such as the mobile hamburger menu, scroll animations, dynamic counters, and the gallery lightbox. *Note: All JS is written internally within each HTML file (`<script>`).*

## 📁 Project Structure
The website consists of 8 main HTML files and an image directory. There are no external CSS or JS files, making it incredibly easy to read and understand the code for each specific page.

```text
barangay-website/
├── index.html           # Homepage with overview and quick links
├── about.html           # History, Vision/Mission, and the 10 Political Zones
├── officials.html       # Directory of the Barangay Captain and Councilors
├── attractions.html     # Notable facilities and institutions in the barangay
├── gallery.html         # Photo gallery with interactive lightbox
├── festivals.html       # Highlight of local events like Kasadya Festival
├── hotlines.html        # Critical 24/7 emergency contact numbers
├── services.html        # Frontline services, office hours, and interactive map
├── images/              # Directory containing all logos, photos, and assets
└── README.md            # Project documentation (this file)
```

## ✨ Key Features
- **Mobile-First Responsive Design**: The layout adapts automatically to any screen size. Features a custom Hamburger Menu for mobile users.
- **Glassmorphism UI**: Uses modern frosted-glass effects (`backdrop-filter`) on the navigation bar for a premium look.
- **Scroll Animations**: Elements fade and slide in smoothly as the user scrolls down the page.
- **Interactive Gallery**: Clicking on any photo in the gallery opens a full-screen, dimmable lightbox.
- **Actionable Hotlines**: On mobile devices, emergency phone numbers can be tapped to call directly.
- **Embedded Location Map**: Uses a live Google Map embed to accurately point to the Barangay Hall in Zone 2.

## 🚀 Deployment
This website is completely static, meaning it requires no backend server or database. It is currently deployed and hosted securely for free via **Cloudflare Pages**.

To update the live website:
1. Make the necessary changes to the HTML/Images locally.
2. Commit and push the changes to the connected GitHub repository:
   ```bash
   git add .
   git commit -m "Describe your changes here"
   git push origin main
   ```
3. Cloudflare will automatically detect the changes on GitHub and deploy the updated website within seconds.

## 📝 Sources
- Barangay data, history, and official names were sourced from the official public records and Facebook page of Barangay Canitoan.
- Images were provided by the community and public sources.

---
*Developed as a class project by Sharmaine.*
