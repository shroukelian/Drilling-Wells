// ==== Mobile Menu Toggle ====
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// ==== Appear on Scroll Animation ====
const appearElems = document.querySelectorAll('.service, .proj, .hero-card, .about, .projects, .about-details');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    }
  });
}, { threshold: 0.15 });

appearElems.forEach(el => observer.observe(el));

// ==== Fade-in Animation for Achievements ====
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));


// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // إغلاق المنيو بعد الضغط على الرابط
      menu.classList.remove('active');
      menuBtn.classList.remove('open');
    }
  });
});


// Gallery animation on scroll
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    }
  });
}, { threshold: 0.2 });

galleryItems.forEach(item => galleryObserver.observe(item));