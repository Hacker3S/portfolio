// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Typing effect for the intro text
  const words = [
    "Building Reliable Infrastructure...",
    "Automating Everything...",
    "Deploying to Cloud...",
    "Scaling Systems Efficiently..."
  ];

  let wordIndex = 0;
  let charIndex = 0;
  const typedText = document.getElementById("typedText");

  if (typedText) {
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
  }

  // Smooth scroll for navigation links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Theme toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      // Update button emoji
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // Progress bars animation on scroll
  function animateProgressBars() {
    document.querySelectorAll(".progress-bar").forEach(bar => {
      const rect = bar.getBoundingClientRect().top;
      if (rect < window.innerHeight - 50) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  }

  window.addEventListener("scroll", animateProgressBars);
  // Run once on load to check if already in view
  animateProgressBars();

  // Particles effect - full screen background
  const canvas = document.getElementById("particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

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
  }
});