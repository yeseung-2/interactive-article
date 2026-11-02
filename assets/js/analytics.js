(() => {
  const send = (name, properties = {}) => {
    if (window.zaraz && typeof window.zaraz.track === 'function') {
      window.zaraz.track(name, properties);
    }
  };

  // Scroll milestones are useful for long-form interactive storytelling.
  const milestones = [25, 50, 75, 90];
  const sent = new Set();
  let ticking = false;
  const measure = () => {
    ticking = false;
    const root = document.documentElement;
    const max = Math.max(1, root.scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.round((window.scrollY / max) * 100));
    for (const point of milestones) {
      if (percent >= point && !sent.has(point)) {
        sent.add(point);
        send('article_scroll_depth', { percent: point });
      }
    }
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(measure);
    }
  }, { passive: true });
  window.addEventListener('load', measure, { once: true });

  // Track semantic controls without collecting their visible text or user-entered data.
  document.addEventListener('click', (event) => {
    const target = event.target.closest('button, a[href], summary, [role="button"]');
    if (!target) return;
    const id = target.id || target.getAttribute('data-track-id') || '';
    const href = target.getAttribute('href') || '';
    send('article_interaction', {
      element: target.tagName.toLowerCase(),
      element_id: id.slice(0, 80),
      destination_type: href.startsWith('#') ? 'in_page' : (href ? 'link' : 'control')
    });
  }, { passive: true });
})();
