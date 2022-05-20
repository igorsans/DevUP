class User{
    constructor(){
        this.User = localStorage.getItem('nome')
        this.Email = localStorage.getItem('email')
        this.Nick = localStorage.getItem('nick')
        this.Senha = localStorage.getItem('senha')
    }
    verificaLogado1(){
        if(this.User == null || this.Email == null || this.Nick == null){
            return false
        } else {
            return true
        }
    }
}
function verificaLogado(){
// Ola, seja bem vindo ao projeto, você deve estar se perguntando: o que essa função faz? e a resposta é: segura o projeto, como? não sei
// mas não tire-me daqui
}