const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkInputs()) {
      // Se a validação dos campos estiver correta, o usuário será redirecionado para a página Pacotes.
      window.location.href = 'pacotes.html';
    }
  });

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        setErrorFor(username, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        setErrorFor(email, 'Preencha esse campo')
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        setErrorFor(password, 'Preencha esse campo.')
        return false;

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres.')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo.')
        return false;

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não estão iguais.')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

    return emailValue !== '' && isEmail(emailValue) && passwordValue !== '' && passwordValue.length >= 8;

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}