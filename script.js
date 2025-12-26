// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de destaque no header ao rolar
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(11, 16, 32, 0.98)';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.backgroundColor = 'rgba(11, 16, 32, 0.95)';
    header.style.boxShadow = 'none';
  }
});
