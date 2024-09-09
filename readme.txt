
React Cards Project - ReadMe

Project Overview
This project is a simple React.js web application that displays cards based on search results. The main components include a search field, a list of cards, and responsive design elements for both desktop and mobile views. The project integrates functionality for liking items, handling user authentication, and dynamically adjusting the layout depending on the device.

This project is built using **Vite** as the build tool, which offers faster development and optimized builds. Additionally, **MUI (Material-UI)** is used for styling components, providing a clean and modern look. The project is hosted on a server provided by the college.

Table of Contents
1. Installation
2. Project Structure
3. Components Breakdown
4. Responsive Design
5. Authentication
6. Search and Filter Functionality
7. How to Run the Project
8. Future Improvements

1. Installation
To run this project locally:
- Clone the repository: `git clone https://github.com/ori0547/ReactCardsProject.git`
- Navigate to the project directory: `cd ReactCardsProject`
- Install dependencies: `npm install`
- Run the project: `npm run dev` (Vite will start the development server)

2. Project Structure
The project is structured as follows:
- `public/`: Contains the static files and the main `index.html`.
- `src/`: Contains all the source code.
    - `components/`: Contains reusable components like Searchfield, CardList, etc.
    - `pages/`: Contains different pages of the app.
    - `App.js`: The main application logic.
    - `index.js`: Entry point for the React app.
- `assets/`: Stores images, fonts, and other assets.

3. Components Breakdown
- `Searchfield`: A component that handles user input for searching. It contains input validation and sends the search term to filter cards.
- `CardList`: Displays a list of cards based on the search result. It takes the search term and shows relevant cards.
- `MainPage`: Acts as the container for all main components like Searchfield and CardList, managing state and layout.

4. Responsive Design
- The project uses responsive styling to ensure it works well on both mobile and desktop devices.
- The `RightNavbar` component has a list button with expandable content for mobile views.
- The header layout is consistent across both desktop and mobile views.

5. Authentication
- A logout button replaces the avatar when the user is logged in (mobile view). 
- The `handleLogoutClick` function is used to remove the token and set the user state to null.

6. Search and Filter Functionality
- The search functionality filters through cards based on the user's input. 
- It performs case-insensitive matching to display relevant results.

7. How to Run the Project
- Run `npm run dev` after cloning and installing dependencies.
- The app will open in `http://localhost:3000`.

8. Future Improvements
- Add pagination for large data sets.
- Improve the "like" feature to persist across page reloads.
- Implement user-specific views and authentication.
