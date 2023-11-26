// <----- VALIDAÇÃO DO LOGIN  ----->

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (loginValidacao()) {
        // Verificar se o usuário existe no localStorage
        const usuarioDados = recuperarUsuarioDados(email.value);
        if (usuarioDados && usuarioDados.password === password.value) {
            // Login executado, redirecionar para a página de pacotes.
            localStorage.setItem('verificarAutenticacao', true);
            window.location.href = 'pacotes.html';
        } else {
            // Login não executado, exibir mensagem de erro.
            setErrorFor(email, 'Credenciais inválidas');
            setErrorFor(password, 'Credenciais inválidas');
        }
    }
});

// Verifição do login.
function loginValidacao() {

    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    // Verifica o email.
    if(emailValue === '') {
        //Se estiver vazio, será mostrado uma mensagem.
        setErrorFor(email, 'Preencha esse campo.')
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail inválido.')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }

    // Verifica a senha.
    if(passwordValue === '') {
        // mostrar erro
        setErrorFor(password, 'Preencha esse campo.')
        return false;
    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres.')
        return false;
    } else {
        // adicionar a classe de sucesso.
        setSuccessFor(password)
    }

    // Retorne true se todos os campos estiverem corretos.
    return emailValue !== '' && isEmail(emailValue) && passwordValue !== '' && passwordValue.length >= 8;
    
}

// Recuperar dados do usuário do localStorage por meio do e-mail.
function recuperarUsuarioDados(email) {
    const storedData = JSON.parse(localStorage.getItem('usuarioDados'));
    if (storedData && storedData.email === email) {
        return storedData;
    }
    return null; // Retorna null se não encontrar dados para o e-mail informado.
}

// Mostra mensagem/imagem de erro.
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

// Mostra mensagem/imagem de sucesso.
function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

// Verifica o e-mail.
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
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