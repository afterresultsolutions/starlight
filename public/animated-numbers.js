document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.animated-number').forEach(el => {
    let target = +el.getAttribute('data-target');
    let count = 0;
    let step = Math.ceil(target / 60);
    function update() {
      count += step;
      if (count < target) {
        el.textContent = count;
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    update();
  });
});
