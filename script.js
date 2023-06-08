// Landing page
const getStartedButton = document.getElementById('get-started-button');

getStartedButton.addEventListener('click', () => {
  // Set a cookie or store a value in local storage
  document.cookie = 'visited=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';

  // Redirect to the main page
  window.location.href = 'main.html';
});

// Main page
window.addEventListener('DOMContentLoaded', () => {
  // Check if the cookie or local storage value exists
  const visited = document.cookie.includes('visited=true') || localStorage.getItem('visited') === 'true';

  // If the user has visited before, redirect to the main page
  if (visited) {
    window.location.href = 'main.html';
  }
});
