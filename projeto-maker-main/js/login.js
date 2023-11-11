function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let userLogado = JSON.parse(localStorage.getItem('userLogado'))
    let logado = document.querySelector('#logado')
    logado.innerHTML = 'Olá!' + userLogado.nome

    let msgError = document.querySelector('#msg-Error')
    let listaUser = []

    userValid = {
        nome : '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item)=>{
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
                    
            }
        
        }

        
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'index.html'
        localStorage.setItem('userValid')

        localStorage.setItem('userLogado',JSON.stringify())

    }
    else {
        userLabel.setAttribute('style','color:red')
        usuario.setAttribute('style','border-color:red')
        senhaLabel.setAttribute('style','color:red')
        senha.setAttribute('style','color:red')
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = 'Usuário ou senhas incorretos'
        usuario.focus()
    }

    console.log(listaUser)
}
