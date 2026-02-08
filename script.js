document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('dispatchForm');
  const success = document.getElementById('dispatchSuccess');

  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // "map is updating" vibe
    form.style.opacity = '0.35';
    form.style.pointerEvents = 'none';

    setTimeout(() => {
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  });
});
