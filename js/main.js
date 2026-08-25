// New Braunfels Concrete Contractor - Main JS
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      this.classList.toggle('active');
    });
  }

  // Mobile dropdown toggles
  document.querySelectorAll('.nav-item > .nav-link').forEach(function (link) {
    if (link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown')) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.parentElement.classList.toggle('open');
        }
      });
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('active');
      });
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Simple form handler (demo - no backend)
  document.querySelectorAll('form.estimate-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Request Received!';
        form.reset();
        setTimeout(function () {
          btn.textContent = original;
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  });
});
