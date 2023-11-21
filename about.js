const imagemCompartilhar = document.getElementById('imagem-compartilhar');

    if (navigator.share) {
      imagemCompartilhar.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: 'Título do conteúdo a ser compartilhado',
            text: 'Texto do conteúdo a ser compartilhado',
            url: 'https://about.html',
          });
          console.log('Compartilhado feito com sucesso!');
        } catch (error) {
          console.error('Erro ao compartilhar:', error);
        }
      });

       // Esconde a imagem se a API não for suportada
    } else {
      imagemCompartilhar.style.display = 'none';
    }