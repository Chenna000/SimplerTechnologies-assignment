
# User Portal

A modern, responsive React user portal built with Vite. Features a beautiful animated user card, stylish navbar, and a sign-up form. Designed for both desktop and mobile devices.

## Features
- Responsive design with mobile support
- Animated user card with profile details
- Stylish, full-width navbar
- Modern color palette and gradients
- Built with React, Vite, and CSS modules

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

### Installation
1. Clone the repository:
	```sh
	git clone <your-repo-url>
	cd userportal
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App
Start the development server (configured for port 5174):
```sh
npm run dev
```
Visit [http://localhost:5174](http://localhost:5174) in your browser.

### Building for Production
```sh
npm run build
```

### Project Structure
```
userportal/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SignUp.jsx
│   │   └── UserCard.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── Navbar.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization
- Update color schemes and animations in `src/styles/index.css` and `src/styles/Navbar.css`.
- Edit components in `src/components/` for new features or UI changes.

## License
This project is open source and available under the [MIT License](LICENSE).
