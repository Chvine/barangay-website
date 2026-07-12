// Navbar & Back to Top
const nav = document.querySelector('.navbar'), topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 50);
  topBtn?.classList.toggle('visible', window.scrollY > 400);
});
topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile Menu
const ham = document.querySelector('.hamburger'), menu = document.querySelector('.nav-menu');
ham?.addEventListener('click', () => { ham.classList.toggle('open'); menu?.classList.toggle('open'); });
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  ham?.classList.remove('open'); menu?.classList.remove('open');
}));

// Active Nav Link
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(l => {
  if (l.getAttribute('href') === page || (page === '' && l.getAttribute('href') === 'index.html')) l.classList.add('active');
});

// Scroll Animations & Counters
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const t = e.target;
  if (t.classList.contains('animate-on-scroll')) {
    setTimeout(() => t.classList.add('visible'), t.dataset.delay || 0);
  } else if (t.hasAttribute('data-target')) {
    let tgt = +t.dataset.target, cur = 0, step = tgt / 100;
    let tmr = setInterval(() => {
      cur += step;
      if (cur >= tgt) { cur = tgt; clearInterval(tmr); }
      t.textContent = Math.floor(cur).toLocaleString() + (t.dataset.suffix || '');
    }, 16);
  }
  obs.unobserve(t);
}), { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll, [data-target]').forEach((el, i) => {
  if (el.classList.contains('animate-on-scroll')) el.dataset.delay = (i % 4) * 100;
  obs.observe(el);
});

// Hero Particles
const parts = document.querySelector('.hero-particles');
if (parts) for (let i = 0; i < 20; i++) {
  let s = document.createElement('span');
  s.style.cssText = `left:${Math.random()*100}%;animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*6}s;width:${2+Math.random()*4}px;height:${s.style.width};aspect-ratio:1;`;
  parts.appendChild(s);
}

// Lightbox
const gals = document.querySelectorAll('.gallery-item');
if (gals.length) {
  document.body.insertAdjacentHTML('beforeend', `<div id="lb" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.9);align-items:center;justify-content:center;backdrop-filter:blur(5px);cursor:zoom-out"><div style="position:relative;max-width:90vw"><img id="lb-img" style="max-height:85vh;border-radius:8px;max-width:100%"/><p id="lb-cap" style="color:#fff;text-align:center;margin-top:1rem"></p></div></div>`);
  const lb = document.getElementById('lb'), lbImg = document.getElementById('lb-img'), lbCap = document.getElementById('lb-cap');
  gals.forEach(g => g.addEventListener('click', () => { 
    lbImg.src = g.querySelector('img').src; 
    lbCap.textContent = g.querySelector('.gallery-caption')?.textContent || ''; 
    lb.style.display = 'flex'; 
  }));
  lb.addEventListener('click', e => { if (e.target === lb) lb.style.display = 'none'; });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') lb.style.display = 'none'; });
}

// Interactive Cards
window.toggleCard = c => {
  document.querySelectorAll('.active-card').forEach(el => el !== c && el.classList.remove('active-card'));
  c.classList.toggle('active-card');
};

document.addEventListener('mouseover', e => {
  const cls = '.card-interactive, .about-card-interactive, .official-item, .gallery-emoji-item, .hotline-card, .service-card, .card-flip, .attraction-card';
  if (e.target.closest(cls)) {
    document.querySelectorAll('.active-card, .flipped').forEach(c => c.classList.remove('active-card', 'flipped'));
  }
});
