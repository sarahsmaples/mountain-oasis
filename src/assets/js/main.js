document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  // Header scroll behaviour — logo shrink + top position
  const headerEl        = document.querySelector('header');
  const headerLogo      = document.getElementById('header-logo');
  const mobileHeaderLogo = document.getElementById('mobile-header-logo');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 10;
    if (headerLogo)       headerLogo.classList.toggle('is-shrunk', scrolled);
    if (mobileHeaderLogo) mobileHeaderLogo.classList.toggle('is-shrunk', scrolled);
    if (headerEl)         headerEl.style.top = scrolled ? '0.75rem' : '1.75rem';
  }, { passive: true });

  // Hero image slider
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length) {
    let current = 0;
    slides[0].classList.add('is-active');

    setInterval(() => {
      const next = (current + 1) % slides.length;

      slides[current].classList.remove('is-active');
      slides[current].classList.add('is-exiting');
      slides[next].classList.add('is-active');

      const outgoing = slides[current];
      setTimeout(() => outgoing.classList.remove('is-exiting'), 450);

      current = next;
    }, 3500);
  }

});
