/**
 * WILLIAM DANIAL ARTHUR - EXECUTIVE PORTFOLIO
 * Client-Side Filtering, Scroll Progress, Parallax & Interactive Utilities
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // 2. Scroll Progress Bar & Skyline Parallax
  const progressEl = document.getElementById('scroll-progress');
  const skylineEl = document.getElementById('heroSkyline');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight > 0 && progressEl) {
      const pct = (scrollY / docHeight) * 100;
      progressEl.style.width = pct + '%';
    }

    if (skylineEl && scrollY < window.innerHeight) {
      skylineEl.style.transform = `translateY(${scrollY * 0.25}px) scale(1.02)`;
    }
  }, { passive: true });

  // 3. Project Category Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.classList.add('is-visible');
          }, 20);
        } else {
          card.classList.remove('is-visible');
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Scroll Reveal via IntersectionObserver
  const revealTargets = document.querySelectorAll('.project-card, .app-card, .stack-panel');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealTargets.forEach(target => observer.observe(target));
  } else {
    revealTargets.forEach(target => target.classList.add('is-visible'));
  }

  // 5. Smooth scrolling for internal anchor links & ScrollSpy
  const sections = document.querySelectorAll('section[id]');
  const internalNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    internalNavLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
          if (navLinks && navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
          }
        }
      }
    });
  });

});
