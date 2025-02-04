
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(function() { // Simulate a delay (optional)
        preloader.style.display = 'none'; // Hide preloader
        content.style.display = 'block'; // Show main content
    }, 2000); // Delay in milliseconds (e.g., 2000 = 2 seconds)
});
 