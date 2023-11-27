// <----- VALIDAÇÃO DE REGISTRO  ----->

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (registroValidacao()) {
        // Armazenar dados no localStorage após validação dos dados.
        usuarioDados(username.value, email.value, password.value);
        // Redirecionar para a página de login após o registro.
        window.location.href = 'login.html';
    }
});

// Verifição do cadastro.
function registroValidacao() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    // Valida o nome.
    if(usernameValue === '') {
        // Mostrar erro se o campo estiver vazio.
        setErrorFor(username, 'Preencha esse campo.')
        return false;
    } else {
        // Informação correta.
        setSuccessFor(username)
    }

    // Valida o e-mail.
    if(emailValue === '') {
        // Mostrar erro se o campo estiver vazio.
        setErrorFor(email, 'Preencha esse campo.')
        return false;
    } else if (!isEmail(emailValue)) {
        // Mostrar erro ao inserir menos o email sem estar de acordo com o padrão estbaelecido.
        setErrorFor(email, 'Email inválido.')
        return false;
    } else {
        // Informação correta.
        setSuccessFor(email)
    }

    // Valida a senha.
    if(passwordValue === '') {
        // Mostrar erro se o campo estiver vazio.
        setErrorFor(password, 'Preencha esse campo.')
        return false;
    } else if(passwordValue.length < 8) { 
        // Mostrar erro ao inserir menos que 8 caracteres.
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres.')
        return false;
    } else {
        // Informação correta.
        setSuccessFor(password)
    }

    // Valida a confirmação da senha.
    if(passwordtwoValue === '') {
        // Mostrar erro se o campo estiver vazio.
        setErrorFor(passwordtwo, 'Preencha esse campo.')
        return false;

    } else if(passwordValue !== passwordtwoValue) { 
        // Mostrar erro se o campo não for preenchido por uma senha igual.
        setErrorFor(passwordtwo, 'Senhas não estão iguais.')
        return false;
    } else {
        // Informação correta.
        setSuccessFor(passwordtwo)
    }

    // Retorne true se todos os campos estiverem corretos.
    return emailValue !== '' && isEmail(emailValue) && passwordValue !== '' && passwordValue.length >= 8;

}

// Salvar os dados no localStorage.
function usuarioDados(username, email, password) {
    const usuarioDados = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem('usuarioDados', JSON.stringify(usuarioDados));
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