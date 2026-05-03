/* Gallery page — filter tabs */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-full-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else {
          const cats = item.getAttribute('data-category') || '';
          item.classList.toggle('hidden', !cats.includes(filter));
        }
      });
    });
  });
})();
