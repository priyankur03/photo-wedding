// Intersection Observer to trigger animations when images come into view
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5 // 50% of the image needs to be in view to trigger
    });
  
    images.forEach(img => observer.observe(img));
  });
  