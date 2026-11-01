const FILL_SELECTOR = '.scroll-fill';
const EMPTY_Y = 57;
const FULL_Y = 12;

const fill = document.querySelector(FILL_SELECTOR);

function updateFill() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0;
  fill.setAttribute('y', String(EMPTY_Y - (EMPTY_Y - FULL_Y) * progress));
}

addEventListener('scroll', () => requestAnimationFrame(updateFill), { passive: true });
addEventListener('resize', updateFill);
updateFill();
