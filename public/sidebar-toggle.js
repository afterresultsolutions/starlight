document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar-group > button').forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.classList.toggle('open');
    });
  });
});
