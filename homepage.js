// <----- MENU RESPONSIVO  ----->

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobileclassList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

// <----- CARROSSEL DE IMAGENS (HOMEPAGE) ----->

let count = 1;
document.getElementById("radio1").checked = true;

// setInterval para as imagens passarem infinitamente.
setInterval(function() {
    nextImage();
}, 4000)

// Função para passar as imagens.
function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}