<script>
  // ===== MENU MOBILE E DROPDOWN =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Seleciona o dropdown (assumindo a estrutura com classes)
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Função para abrir/fechar o menu hambúrguer
  function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Se o menu fechar, também fecha o dropdown e reseta a seta
    if (!navMenu.classList.contains('active')) {
      dropdownMenu?.classList.remove('active');
      const arrow = dropdownToggle?.querySelector('i');
      if (arrow) arrow.style.transform = 'rotate(0)';
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  // Fechar menu ao clicar em um link (exceto o próprio dropdown toggle)
  document.querySelectorAll('.nav-menu a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      dropdownMenu?.classList.remove('active');
      const arrow = dropdownToggle?.querySelector('i');
      if (arrow) arrow.style.transform = 'rotate(0)';
    });
  });

  // Tratamento do dropdown "Atuação" para mobile
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      // Verifica se está em mobile (largura <= 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Impede o link de navegar
        dropdownMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (dropdownMenu.classList.contains('active')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0)';
        }
      }
    });
  }

  // Fechar dropdown e menu ao redimensionar para desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      dropdownMenu?.classList.remove('active');
      const arrow = dropdownToggle?.querySelector('i');
      if (arrow) arrow.style.transform = 'rotate(0)';
    }
  });

  // ===== SCROLL SUAVE PARA LINKS INTERNOS =====
  document.querySelectorAll('a[href^="#"]:not(.dropdown-toggle)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== EFEITO HEADER AO ROLAR =====
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(11, 16, 32, 0.98)';
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.backgroundColor = 'rgba(11, 16, 32, 0.95)';
      header.style.boxShadow = 'none';
    }
  });

  // ===== MODAL WHATSAPP (mantido igual) =====
  const botoesAbrirModal = document.querySelectorAll('.abrir-modal-whatsapp');
  const modal = document.getElementById('modalWhatsApp');
  const botaoFechar = document.getElementById('fecharModal');

  if (botoesAbrirModal.length > 0 && modal && botaoFechar) {
    botoesAbrirModal.forEach(botao => {
      botao.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('mostrar');
      });
    });

    botaoFechar.addEventListener('click', () => {
      modal.classList.remove('mostrar');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('mostrar');
      }
    });
  }
</script>