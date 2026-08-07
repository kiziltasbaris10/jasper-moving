// Jasper Moving — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Quote / contact forms — submitted via AJAX to Formspree
  document.querySelectorAll('form[data-ajax]').forEach((form) => {
    const status = form.querySelector('.form-success');
    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultSuccessText = status ? status.textContent : '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (status) status.classList.remove('visible', 'form-error');

      const originalLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) throw new Error('Request failed');

        form.reset();
        if (status) {
          status.textContent = defaultSuccessText;
          status.classList.remove('form-error');
          status.classList.add('visible');
          status.setAttribute('tabindex', '-1');
          status.focus();
        }
      } catch (err) {
        if (status) {
          status.textContent =
            "Something went wrong sending your request — please call us at (647) 555-0123 or email info@jaspermoving.com directly.";
          status.classList.add('visible', 'form-error');
          status.setAttribute('tabindex', '-1');
          status.focus();
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      }
    });
  });
});
