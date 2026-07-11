// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  // Close on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// Animate on scroll (Intersection Observer)
const animateElements = document.querySelectorAll('.animate-on-scroll');
if (animateElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach((el, i) => {
    el.dataset.delay = i % 4 * 100;
    observer.observe(el);
  });
}

// Floating particles for hero
const heroParticles = document.querySelector('.hero-particles');
if (heroParticles) {
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    span.style.animationDuration = `${6 + Math.random() * 6}s`;
    span.style.width = span.style.height = `${2 + Math.random() * 4}px`;
    heroParticles.appendChild(span);
  }
}

// Number counter animation
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

const counterEls = document.querySelectorAll('[data-target]');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));
}

// Photo gallery lightbox (simple)
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems.length) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    display:none; position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,0.92); align-items:center;
    justify-content:center; cursor:zoom-out;
    backdrop-filter:blur(10px);
  `;
  lightbox.innerHTML = `
    <div style="position:relative; max-width:90vw; max-height:90vh;">
      <img id="lightbox-img" style="max-width:90vw; max-height:85vh; border-radius:12px; object-fit:contain;" />
      <p id="lightbox-cap" style="color:#fff; text-align:center; margin-top:1rem; font-size:0.95rem; opacity:0.8;"></p>
      <button onclick="document.getElementById('lightbox').style.display='none'" style="
        position:absolute; top:-20px; right:-20px; width:40px; height:40px;
        border-radius:50%; background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);
        color:white; font-size:1.2rem; cursor:pointer; display:flex; align-items:center; justify-content:center;
      ">✕</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const cap = item.querySelector('.gallery-caption');
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox-cap').textContent = cap ? cap.textContent : '';
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
  });
}

// Smooth back-to-top
const backBtn = document.getElementById('back-to-top');
if (backBtn) {
  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('visible', window.scrollY > 400);
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Set active nav link based on page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Global card active toggle for animations with mutual exclusivity
function toggleCard(card) {
  const interactiveClasses = '.card-interactive, .about-card-interactive, .official-item, .gallery-emoji-item, .hotline-card, .service-card, .attraction-card';
  document.querySelectorAll(interactiveClasses).forEach(c => {
    if (c !== card) {
      c.classList.remove('active-card');
    }
  });
  card.classList.toggle('active-card');
}

// Global mouseenter listener to reset click highlights/flips when hovering over any interactive card
document.addEventListener('DOMContentLoaded', () => {
  const interactiveClasses = '.card-interactive, .about-card-interactive, .official-item, .gallery-emoji-item, .hotline-card, .service-card, .card-flip, .attraction-card';
  
  document.querySelectorAll(interactiveClasses).forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Reset active card highlights
      document.querySelectorAll('.card-interactive, .about-card-interactive, .official-item, .gallery-emoji-item, .hotline-card, .service-card, .attraction-card').forEach(c => {
        c.classList.remove('active-card');
      });
      // Reset core value flips on About page
      document.querySelectorAll('.card-flip').forEach(c => {
        c.classList.remove('flipped');
      });
    });
  });
});

