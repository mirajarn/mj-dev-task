# User Data Display Application

This project is part of a job interview process where I was tasked with creating an application using TypeScript, React, CSS, and HTML. The application fetches and displays user data from JSONPlaceholder's `/users` endpoint. The project was built using Vite for fast development and is deployed on GitHub Pages.

## Project Description

The goal of this project is to introduce an informative and visually appealing React application that displays user data. The solution includes the following features:

- **Fetch User Data**: The application fetches user data from JSONPlaceholder's `/users` endpoint.
- **Sort User Data**: The user data is rendered in ascending alphabetical order by first name.
- **Filter by Company**: An optional feature that allows users to filter the displayed data by their company name.

## Technologies Used

- **Vite**: A build tool that provides a fast development environment.
- **GitHub Pages**: Used for deploying the application.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Bootstrap**: A CSS framework for responsive design and pre-styled - components.


## Features

- **User Data Fetching**: The application fetches user data from the JSONPlaceholder API.
- **Alphabetical Sorting**: Users are displayed in ascending alphabetical order by their first name.
- **Company Filter**: A filter input allows users to filter the displayed data by their company name.
- **Accessibility**: The design avoids using red or green colors and places important elements in the upper left corner to enhance accessibility.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
