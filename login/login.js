const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const submitBotao = document.querySelector("#submit-botao");

const erroEmail = document.querySelector('.msg-email');
const erroSenha = document.querySelector('.msg-senha');

submitBotao.addEventListener('click', (e) => {
    e.preventDefault()

    // const emailValue = email.value;
    // const senhaValue = senha.value;

    if(email.value === '' || senha.value === '') {
        Swal.fire({
            title: 'Atenção!',
            text: 'Preencha todos os Campos!',
            icon: 'warning',
            showConfirmButton: false,
            timer: 2500
          })
    }else {
        location.href ="/cursos/meuscursos.html"
    }
    return; 
})

//Validação de e-mail
email.addEventListener("keyup", () => {
    if(!validarEmail(email.value)) {
        erroEmail.textContent = "Formato do e-mail: usuario@email.com"
        erroEmail.classList = "error"
    }else {
        erroEmail.textContent = ""
    }
})

//Validar senha
senha.addEventListener("keyup", () => {
    if(!validarSenha(senha.value)) {
        erroSenha.textContent = "Mínimo de 6 dígitos numéricos"
        erroSenha.classList = "error"
    }else {
        erroSenha.textContent = ""
    }
})

//REGEX
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function validarSenha(senha) {
    var reg = /^[0-9]{6}/;
    return reg.test(senha);
}

