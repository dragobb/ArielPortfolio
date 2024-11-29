document.querySelectorAll('.navbar a').forEach(navLink => {
  navLink.addEventListener('click', function() {
    const targetTab = document.getElementById(navLink.getAttribute('data-target'));
    document.querySelectorAll('.content-tab').forEach(tab => tab.classList.remove('active-link'));
    targetTab.classList.add('active-link');
    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
    navLink.classList.add('active');
  });
});
// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Get the route from the card's data-route attribute
        const route = card.getAttribute('data-route');
        
        // Redirect to the route
        window.location.href = route; // This navigates to the specified route
    });
});