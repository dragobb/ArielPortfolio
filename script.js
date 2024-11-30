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
        window.location.href = "project.html"; // This navigates to the specified route
    });
});
// Use history API to update the URL without reloading the page
history.pushState({ tab: tabName }, tabName, `#${tabName}`);

 // Add event listener to each project card
 document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    const route = this.getAttribute('data-route'); // Get the route from the data-route attribute
    window.location.href = route; // Redirect to the corresponding project page
  });
});

// Function to show the content based on the clicked tab
function showTab(tabId) {
  const tabs = document.querySelectorAll('.content-tab');
  tabs.forEach(tab => tab.classList.remove('active-link'));

  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active-link');

  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));
  document.querySelector(`[data-target="${tabId}"]`).classList.add('active');
}

