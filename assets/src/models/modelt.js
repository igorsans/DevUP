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
