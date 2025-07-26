function home() {
  setTimeout(() => {
    location = 'file:///C:/Users/BATOOL%20COMPUTERS/Documents/USMAN%20websites%20for%20portfolio/LUGX%20Website/index.html';
  }, 1000);
}
function contact() {
  setTimeout(() => {
    location = 'file:///C:/Users/BATOOL%20COMPUTERS/Documents/USMAN%20websites%20for%20portfolio/LUGX%20Website/pages/contact.html';
  }, 1000);
}
function signIn() {
  setTimeout(() => {
    location = 'file:///C:/Users/BATOOL%20COMPUTERS/Documents/USMAN%20websites%20for%20portfolio/LUGX%20Website/pages/login.html';
  }, 1000);
}
function checkNetworkAndRedirect() {
  if (!navigator.onLine) {
    window.location.href = 'file:///C:/Users/BATOOL%20COMPUTERS/Documents/USMAN%20websites%20for%20portfolio/LUGX%20Website/pages/error404.html'; // Change to your 404 error page path
  }
}


// Initial check when the page loads
checkNetworkAndRedirect();

// Optional: Add event listener for real-time changes
window.addEventListener('offline', () => {
  checkNetworkAndRedirect();
});
