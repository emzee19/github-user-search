# GitHub User Search

A responsive React application built with TypeScript that lets users search for GitHub profiles and view detailed user information. Features include real-time search with debouncing, error handling, and a clean, responsive UI.

## Features

- **Instant Search**: Find any GitHub user by username with debounced API calls
- **User Profile Display**: View avatar, name, bio, repos count, followers, and more
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **TypeScript Integration**: Built with full type safety throughout the application
- **Modern React Patterns**: Uses functional components and React Hooks

## 🚀 Live Demo

[View Live Demo](https://github.com/emzee19/github-user-search) <!-- Replace with your deployed URL if available -->

![GitHub User Search Screenshot](./src/assets/desktop-view.jpeg)

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- GitHub REST API
- CSS (with responsive design)

## 🔍 How It Works

1. Enter a GitHub username in the search bar
2. The application fetches the user data from GitHub's API
3. View detailed profile information including repos, followers, and more
4. Results are displayed in a clean, responsive interface

## 🏗️ Installation and Setup

1. Clone the repository
   ```bash
   git clone https://github.com/emzee19/github-user-search.git
   cd github-user-search
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 🔧 Code Structure

```
src/
├── components/
│   ├── ErrorMessage.tsx  # Error handling component
│   ├── LoadingSpinner.tsx  # Loading state component
│   ├── SearchBar.tsx  # Search input component
│   └── UserProfile.tsx  # User data display component
├── App.tsx  # Main application component
├── main.tsx  # Application entry point
├── index.css  # Global styles
└── App.css  # App-specific styles
```

## 📋 Implementation Details

- **Debouncing**: Implemented a 500ms debounce on search input to optimize API requests
- **Error Handling**: Gracefully handles common errors like "user not found"
- **Responsive Design**: Mobile-first approach with adaptive layout
- **TypeScript**: Type-safe implementation with proper interfaces and types

## 🔮 Future Enhancements

- Repository listing with filtering options
- Search history using local storage
- Dark/light theme toggle
- Advanced search filters

## 📱 Mobile View

<!-- <div style="display: flex; justify-content: space-around;">
  <img src="https://via.placeholder.com/250x500" alt="Mobile screenshot 1" width="250">
  <img src="https://via.placeholder.com/250x500" alt="Mobile screenshot 2" width="250">
</div> -->

## 💻 About the Developer

This application was developed as part of a technical assessment, demonstrating proficiency in React, TypeScript, API integration, and responsive design principles.

## 📄 License

MIT