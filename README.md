# Mostofa Aadeeb Chowdhury Portfolio

Personal academic portfolio website for Mostofa Aadeeb Chowdhury, showcasing resume highlights, engineering projects, achievements, leadership activities, and contact information in a single-page experience.

## Overview

This is a static, single-page portfolio built with HTML, Tailwind CSS (CDN), and vanilla JavaScript.

Navigation is section-based and switches between:

- Resume
- Projects
- Achievements
- Leadership & Service
- Contact

## Features

- Responsive desktop and mobile layout
- Fixed top navigation with mobile menu toggle
- Section switching with active nav state handling
- Academic profile content with social links (GitHub, LinkedIn, Google Scholar)
- Embedded Google Maps location in Contact section
- Google Analytics integration (`gtag`)
- Custom favicon set and manifest assets

## Tech Stack

- HTML5
- Tailwind CSS (via CDN script)
- JavaScript (vanilla)
- Font Awesome and Ionicons (CDN)
- Google Fonts (Roboto)

## Project Structure

```text
portfolio/
├── index.html
├── README.md
└── assets/
	├── googlead28b0ebedd58bcb.html
	├── css/
	├── images/
	│   ├── favicon/
	│   ├── CV_Mostofa_Aadeeb_Chowdhury.pdf
	│   └── ...other profile/research/project images
	└── js/
		└── script.js
```

## Run Locally

No build step is required.

1. Open `index.html` directly in a browser, or
2. Serve with a local static server (recommended):

```bash
# from the portfolio folder
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Customization Guide

- Update content sections in `index.html`.
- Adjust navigation behavior in `assets/js/script.js`.
- Replace images and CV file in `assets/images/`.
- If you want custom CSS files, place them in `assets/css/` and link from `index.html`.

## Notes

- The site currently relies on CDN-delivered dependencies (Tailwind, icons, fonts).
- Ensure internet access for full styling/icon rendering when using the current setup.
