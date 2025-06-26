// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body; // Get the body element
    const currentTheme = body.getAttribute('data-theme'); // Get current theme
    // Determine new theme based on current theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme); // Apply new theme
    localStorage.setItem('theme', newTheme); // Save theme preference to localStorage
}

// Event listener to apply persisted theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Get saved theme or default to 'light'
    document.body.setAttribute('data-theme', savedTheme); // Apply saved theme
});
