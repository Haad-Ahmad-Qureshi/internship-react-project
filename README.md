# Movie Application — AI-Assisted Development

## Project Overview

This project is a React-based movie application developed as part of the internship assignment. The application allows users to browse movies, search for movies, view movie information, authenticate using Firebase, and save movies to their favourites.

AI tools were used throughout the development process as a development assistant. AI was used for generating initial implementations, explaining concepts, debugging errors, suggesting improvements, and helping with code structure. The generated code was reviewed, tested, modified, and corrected manually where required.

---

## Technologies Used

* React
* TypeScript
* Vite
* React Router
* Firebase Authentication
* Firebase Realtime Database / Firestore
* OMDb API
* HTML
* CSS
* JavaScript
* Git & GitHub
* Vercel

---

# AI Prompts Used During Development

The following are examples of the prompts used during the development of the project.

## 1. Project Setup

### Prompt

> I want to build a movie application using React and TypeScript. Help me set up the project structure using Vite and suggest a clean folder structure for components, views, services, models, context, and types.

### Purpose

Used AI to establish the initial React project structure and organize the application into maintainable sections.

---

## 2. Movie API Integration

### Prompt

> Help me create a movie service in React TypeScript that uses the OMDb API. I want a reusable service function that accepts a movie search query and returns the movie results.

### Purpose

Used AI to create the initial API service and understand how to work with external APIs in a React application.

---

## 3. TypeScript Interfaces

### Prompt

> Create TypeScript interfaces for the OMDb movie search response and movie object. Make sure the types match the data returned by the OMDb API.

### Purpose

Used AI to generate the initial TypeScript types and reduce type-related errors.

---

## 4. Movie Search

### Prompt

> Create a React movie search feature where the user enters a movie name into a search input and the application fetches matching movies from the OMDb API.

### Purpose

Used AI to implement the initial search functionality.

---

## 5. Movie Cards

### Prompt

> Create a reusable MovieCard component in React TypeScript. It should display the movie poster, title, year, type, and a favourite button.

### Purpose

Used AI to generate a reusable UI component for displaying movies.

---

## 6. Movie Grid

### Prompt

> Update the HomeView so that the movies returned from the API are displayed using the MovieCard component in a responsive grid layout.

### Purpose

Used AI to connect the movie data with the reusable MovieCard component.

---

## 7. Header

### Prompt

> Create a responsive header for my React movie application. It should contain the application name, Home button, Favourites button, search input, and Search button.

### Purpose

Used AI to create the main navigation and search interface.

---

## 8. React Router

### Prompt

> Add React Router to my application. I need routes for Home, Authentication, and Favourites. The Home page should be available at `/`, authentication at `/auth`, and favourites at `/favourites`.

### Purpose

Used AI to implement client-side routing.

---

## 9. Authentication Context

### Prompt

> Create a global authentication context for my React TypeScript application. Use Firebase onAuthStateChanged through an auth service. Store the current Firebase user, an authLoading state, and expose user, authLoading, and logout. Make sure the authentication listener is unsubscribed when the provider unmounts.

### Purpose

Used AI to create centralized authentication state management.

---

## 10. Firebase Authentication

### Prompt

> Help me integrate Firebase Authentication into my React application. I want users to be able to log in and have their authentication state restored when they reload the page.

### Purpose

Used AI to understand and implement Firebase authentication.

---

## 11. Protected Routes

### Prompt

> I want the favourites page to be accessible only to authenticated users. If the user is not logged in, redirect them to the authentication page.

### Purpose

Used AI to implement route protection.

---

## 12. Favourite Movies

### Prompt

> Add a favourites feature to my movie application. When the user clicks the Favourite button on a MovieCard, save that movie for the currently authenticated user.

### Purpose

Used AI to implement the application's favourites functionality.

---

## 13. Firebase Database

### Prompt

> Help me save favourite movies in Firebase for each authenticated user. The favourites should remain available after the user logs out and logs back in.

### Purpose

Used AI to implement persistent favourite movie storage.

---

## 14. Favourites View

### Prompt

> Create a FavouritesView component that retrieves the authenticated user's favourite movies from Firebase and displays them using the existing MovieCard component.

### Purpose

Used AI to connect Firebase data with the existing movie card UI.

---

## 15. Search URL Parameters

### Prompt

> Update the movie search so that when the user searches for a movie, the search query is added to the URL using a query parameter. The HomeView should read the query parameter and perform the search.

### Purpose

Used AI to make the search state easier to share and navigate.

---

## 16. Debugging React Errors

### Prompt

> I am getting an error in my React application. Here is the error message and the relevant code. Explain what is causing the error and provide a corrected version without changing unrelated parts of the application.

### Purpose

Used AI as a debugging assistant when errors appeared during development.

---

## 17. Firebase Error Debugging

### Prompt

> Firebase is giving me the error "Database '(default)' not found. Please check your project configuration." Explain why this is happening and tell me what I need to configure in Firebase.

### Purpose

Used AI to understand Firebase configuration and database-related errors.

---

## 18. Firebase API Key Error

### Prompt

> Firebase Authentication is showing the error "auth/api-key-not-valid.-please-pass-a-valid-api-key." What could cause this error in a Vite React application and how can I fix the environment variable configuration?

### Purpose

Used AI to diagnose environment-variable and Firebase configuration problems.

---

## 19. Environment Variables

### Prompt

> Show me how to safely store my OMDb API key and Firebase configuration in a Vite React project using environment variables. Also tell me what should be added to .gitignore.

### Purpose

Used AI to understand better practices for handling configuration values and preventing accidental commits of environment files.

---

## 20. CSS Styling

### Prompt

> Improve the styling of my movie application's header. The Home and Logout buttons have white text and are difficult to see. Suggest a better color combination and update the CSS while keeping the current layout.

### Purpose

Used AI to improve the application's visual design.

---

## 21. CSS Debugging

### Prompt

> Check this CSS and tell me if there are any syntax or property mistakes. Explain what needs to be corrected and give me the corrected CSS.

### Purpose

Used AI to identify CSS mistakes and improve styling.

---

## 22. Component Props

### Prompt

> I need to pass a favourite movie handler from HomeView to MovieCard. Update the MovieCard props and show me how to pass the function correctly.

### Purpose

Used AI to understand React props and component communication.

---

## 23. Code Refactoring

### Prompt

> Review this React component and suggest improvements to make it cleaner and easier to maintain. Do not change the application's functionality.

### Purpose

Used AI to review and refactor code after the initial implementation.

---

## 24. Git and GitHub

### Prompt

> I have made changes to my React project. Give me the Git commands to add all changes, commit them, and push the current branch to the main branch on GitHub.

### Purpose

Used AI for Git workflow assistance.

---

## 25. Deployment

### Prompt

> Explain how to deploy my Vite React application to Vercel and make sure the environment variables are configured correctly.

### Purpose

Used AI to assist with deployment.

---

# How AI Assisted During Development

AI was used as a development assistant rather than as a replacement for development work.

The main areas where AI assisted were:

### Code Generation

AI helped generate initial versions of React components, TypeScript interfaces, Firebase services, authentication context, API services, and CSS.

### Debugging

When errors occurred, error messages and relevant code were provided to AI. AI helped identify possible causes and suggested corrections.

### Learning

AI was also used to explain React concepts such as:

* Components
* Props
* Context API
* React Router
* Authentication state
* Async API requests
* TypeScript interfaces
* Firebase integration

### Code Organization

AI suggested a modular project structure so that API logic, authentication, UI components, views, and types were separated.

### Refactoring

After features were implemented, AI was used to review code and suggest cleaner implementations.

---

# Manual Improvements and Corrections

AI-generated code was not used blindly. The generated code was tested in the actual application and manually modified when problems occurred.

Some examples of manual work include:

## 1. Fixing Firebase Configuration

The Firebase configuration initially produced authentication and database errors. The configuration and environment variables were manually checked and corrected according to the Firebase project settings.

## 2. Fixing Environment Variables

Environment variables were manually checked to ensure they followed the Vite naming convention and that sensitive configuration was not accidentally committed to GitHub.

## 3. Correcting CSS

Some generated CSS required manual adjustment after viewing the application in the browser. Colors, spacing, button visibility, and layout were changed to improve the UI.

## 4. Testing React Routing

The routes were manually tested in the browser to ensure Home, Authentication, and Favourites behaved correctly.

## 5. Testing Authentication

Login/logout behavior and authentication persistence were manually tested to ensure that protected content was only available to authenticated users.

## 6. Testing Favourites

The favourite functionality was manually tested by adding and removing movies and checking whether the saved data remained available after refreshing the application.

## 7. API Testing

Movie searches were manually tested with different search terms to verify that the OMDb API responses were handled correctly.

## 8. Refactoring

After reviewing the generated code, unnecessary code was removed and some logic was reorganized into services, contexts, components, and views to make the project easier to maintain.

---

# Development Workflow

The general development process followed this workflow:

```text
Requirement
     ↓
AI Prompt
     ↓
Initial Code
     ↓
Run Application
     ↓
Test Feature
     ↓
Identify Problems
     ↓
Ask AI for Explanation/Debugging
     ↓
Manually Correct Code
     ↓
Retest
     ↓
Refactor
     ↓
Commit to GitHub
```

AI was therefore used throughout the development process for assistance, while the final implementation was tested and reviewed manually.

---

# Final Project

The completed application is deployed online and can be accessed through the project deployment link.

**Live Application:**
Add your Vercel URL here.

**GitHub Repository:**
Add your GitHub repository URL here.

---

# Conclusion

AI significantly assisted in the development of the project by helping with code generation, debugging, documentation, learning new concepts, and refactoring.

However, the generated code was reviewed and tested during implementation. Manual corrections were made whenever the generated solution did not work correctly or did not match the requirements of the application.

This approach allowed AI to be used as a development assistant while maintaining manual control over the final implementation.
