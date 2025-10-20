document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-section');
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 200, behavior: 'smooth' });
  });
});
