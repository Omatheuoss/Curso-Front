const login = document.getElementById('login')
const senha = document.getElementById('senha')
const form = document.getElementById('formulario')
const enviar = document.getElementById('entrar')

enviar.addEventListener('click', (event) =>{

    event.preventDefault();

    if(senha.value == ''){

        alert('senha nao pode ser vazia')
        senha.classList = 'erro'
    }
    if(login.value == ''){
        
        alert('login nao pode ser vazia')
        login.classList = 'erro'
    }


})
