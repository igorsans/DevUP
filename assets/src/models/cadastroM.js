class Cadastro {

    constructor(_nameIn, nick,rg,cep,nCasa,email,emailVer,senha,senhaVer){
        this._name = nome
        this._nick = nick
        this._rg = rg
        this._cep = cep
        this._nCasa = nCasa
        this._email = email
        this._emailVer = emailVer
        this._senha = senha
        this._senhaVer = senhaVer
    }
    
    criar(e,obj){
        e.preventDefault()
        this._name = obj._name.val()
        console.log(this.nome);
        // this.nick = 
        // this.rg = 
        // this.cep =
        // this.nCasa = 
        // this.email = 
        // this.emailVer 
        // this.senha = 
        // this.senhaVer = 
        // this.pessoa = new Cadastro(nome,nick,rg,cep,nCasa,email,emailVer,senha,senhaVer)
        // console.log(pessoa);
    }
}
class Form{
    constructor (){
    this._nameIn = $('#inputName')
    this._nick = $('#inputNick')
    this._rg = $('#inputRG')
    this._cep = $('#inputCep')
    this._nCasa = $('#inputNumero')
    this._email = $('#inputEmail')
    this._emailVer = $('#inputEmailVer')
    this._senha = $('#inputSenha')
    this._senhaVer = $('#inputVerSenha')
    }
}