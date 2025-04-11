function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const words = ["cloud", "Back-end"];
let wordIndex = 0;
let charIndex = words[0].length;
let isDeleting = true;
const changingText = document.getElementById("changing-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  const nextWord = words[(wordIndex + 1) % words.length];

  if (isDeleting) {
    charIndex--;
    changingText.textContent = currentWord.substring(0, charIndex);
    
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    charIndex++;
    changingText.textContent = nextWord.substring(0, charIndex);
    
    if (charIndex === nextWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause before deleting again
      return;
    }
  }

  setTimeout(typeEffect, 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);


document.addEventListener("DOMContentLoaded", typeEffect);
