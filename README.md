# Theme Toggle Project

This project implements a light/dark theme toggling system using CSS custom properties and JavaScript. It allows users to switch between light and dark modes with smooth transitions and persists the user's theme preference across sessions.

## Features
- Toggle between light and dark themes using a button.
- Smooth theme transitions using CSS custom properties.
- Persistence of user theme preference using `localStorage`.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional dependencies or installations required.

## Setup Instructions
1. **Clone or Download the Repository**:
   - Download the project files as a ZIP or clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     ```
   - Alternatively, create a new folder and copy the provided `index.html`, `styles.css`, and `script.js` files into it.

2. **File Structure**:
   - Ensure the following files are in the same directory:
     - `index.html`
     - `styles.css`
     - `script.js`

3. **Open the Project**:
   - Open `index.html` in a web browser by double-clicking the file or using a command like:
     ```bash
     open index.html  # On Mac
     start index.html # On Windows
     ```
   - Alternatively, use a local web server (e.g., Live Server extension in VS Code) for a more robust experience.

## Running the Project
- Once `index.html` is open in a browser, you will see a button labeled "Toggle Theme" and a sample text.
- Click the "Toggle Theme" button to switch between light and dark modes.
- Refresh the page to verify that the theme preference persists.

## Customization
- **Colors**: Modify the `--background` and `--text-color` values in `styles.css` under `:root` and `[data-theme="dark"]` to change the theme colors.
- **Transition**: Adjust the `--transition` value (e.g., change `0.3s` to `0.5s`) for faster or slower transitions.
- **Content**: Edit the `.content` div in `index.html` to include more elements to test the theme.

## Notes
- The project uses `localStorage` for persistence, which works only in a browser environment.
- For production, consider adding error handling for `localStorage` or supporting system theme preferences (e.g., `prefers-color-scheme`).

