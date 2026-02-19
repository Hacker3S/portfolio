
// Typing effect
const text = "DevOps Engineer | Cloud | Automation";
let index = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typingEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Cursor glow
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
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
  if (charIndex < words[wordIndex].length) {
    typedText.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(() => {
      typedText.innerHTML = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeEffect();
    }, 1500);
  }
}

typeEffect();
// Particles effect - full screen background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Loop particles around screen edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
  for (let i = 0; i < particleCount; i++) {
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

// Reinitialize particles on resize
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});