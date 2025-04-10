function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add scroll event listener
window.addEventListener("scroll", () => {
  const leftCards = document.querySelectorAll(".left-card");
  const rightCards = document.querySelectorAll(".right-card");

  leftCards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("visible");
    }
  });

  rightCards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("visible");
    }
  });
});