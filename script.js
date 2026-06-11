const timeline = document.querySelector('.timeline');
const leftButton = document.querySelector('.timeline-prev');
const rightButton = document.querySelector('.timeline-next');

if (timeline && leftButton && rightButton) {
  const gap = parseInt(getComputedStyle(timeline).gap, 10) || 20;
  const cardWidth = 320;
  const scrollAmount = cardWidth + gap;

  leftButton.addEventListener('click', () => {
    timeline.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', () => {
    timeline.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}
