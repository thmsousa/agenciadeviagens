// <----- COMPARTILHAMENTO ----->
const imagemCompartilhar = document.getElementById('imagem-compartilhar');

    if (navigator.share) {
      imagemCompartilhar.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: 'Mundo Fronteira.',
            text: 'Mundo Fronteira.',
            url: 'https://about.html',
          });
          console.log('Compartilhado feito com sucesso!');
        } catch (error) {
          console.error('Erro ao compartilhar:', error);
        }
      });

       // Esconde a imagem se a API não for suportada.
    } else {
      imagemCompartilhar.style.display = 'none';
    }

// <----- MENU RESPONSIVO  ----->

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('open')) {
      menuMobileclassList.remove('open');
  } else {
      menuMobile.classList.add('open')
  }
}