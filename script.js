document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect().top;
    if (rect < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
const words = [
  "Building Reliable Infrastructure...",
  "Automating Everything...",
  "Deploying to Cloud...",
  "Scaling Systems Efficiently..."
];

let wordIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typedText");

function typeEffect() {
  if (typedText && charIndex < words[wordIndex].length) {
    typedText.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 60);
  } else if (typedText) {
    setTimeout(() => {
      typedText.innerHTML = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeEffect();
    }, 1500);
  }
}

if (typedText) {
  typeEffect();
}
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2;
      this.speedX = Math.random() * 0.3 - 0.15;
      this.speedY = Math.random() * 0.3 - 0.15;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw() {
      ctx.fillStyle = "rgba(100,149,237,0.3)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    for (let i = 0; i < 80; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
}