
document.addEventListener('alpine:init', () => {
  Alpine.data('itinerary', () => ({
    activeDay: 'day1'
  }));
});