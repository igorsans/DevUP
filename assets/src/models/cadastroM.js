class Cadastro {

    constructor(nome, nick,rg,cep,nCasa,email,emailVer,senha,senhaVer){
        this._nameUser = nome
        this._nickUser = nick
        this._rgUser = rg
        this._cepUser = cep
        this._nCasaUser = nCasa
        this._emailUser = email
        this._emailVerUser = emailVer
        this._senhaUser = senha
        this._senhaVerUser = senhaVer
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
    this._name = $('#inputName')
    this.invalIdName = $('#nameInvalido')
    this._nick = $('#inputNick')
    this.invalIdNick = $('#nickInvalido')
    this._rg = $('#inputRG')
    this.invalIdRg = $('#rgInvalido')
    this._cep = $('#inputCep')
    this.invalIdCep = $('#Invalido')
    this._nCasa = $('#inputNumero')
    this.invalIdNCasa = $('#numeroInvalido')
    this._email = $('#inputEmail')
    this.invalIdEmail = $('#emailInvalido')
    this._emailVer = $('#inputEmailVer')
    this.invalIdEmailVer = $('#emailVerInvalido')
    this._senha = $('#inputSenha')
    this.invalIdSenha = $('#senhaInvalida')
    this._senhaVer = $('#inputVerSenha')
    this.invalIdSenhaVer = $('#senhaVerInvalida')
    this.msg = ''
    }
    validaElement(id, maxChar) {
        if (id.val().length == 0) {
            this.msg = 'Campo Vazio'
            return 'invalid'
        } else if (id.val().length >= maxChar) {
            return 'valid'
        } else {
            this.msg = 'Parece que algo não está correto!'
            return 'invalid'
        }
    }
    validaRG(rg){
        if (rg == ""){
            this.msg = 'Campo Vazio'
            return 'invalid'
            return mostraNaTela('#inputRG', 'invalid', '#rgInvalido', 'Campo Vazio!')
        } else {
            const validaRg = /^[0-9]{9}$/;
            if (validaRg.test(rg)) {
                return 'valid'
                mostraNaTela('#inputRG', 'valid')
                return true
        } else {
            this.msg = 'RG invalido!'
            return 'invalid'
            return mostraNaTela('#inputRG', 'invalid', '#rgInvalido', 'RG invalido!')
        }
    }
    }
    validaEmail(email) {
        if (email == "") {
            this.msg = 'Campo Vazio'
            return 'invalid'
        } else {
            const contemArro = /@/
            if (!contemArro.test(email)) {
                this.msg = 'E-mail invalido!'
                return 'invalid'
            } else if (email.length < 6) {
                this.msg = 'E-mail invalido!'
                return 'invalid'
            } else {
                return 'valid'
            }
        }
    }
    validaSenha(senha) {
        if (senha == "") {
            this.msg = 'Campo Vazio!'
            return 'invalid'
        } else {
            const numeros = /([0-9])/;
            const alfabeto = /([a-zA-Z])/;
            const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
            if (senha.length < 8) {
                this.msg = 'Senha Fraca, minimo de 8 digitos'
                return 'invalid'
            } else {
                if (senha.match(numeros) && senha.match(alfabeto) && senha.match(chEspeciais)) {
                    return 'valid'
                } else {
                    this.msg = 'Senha deve conter letras numeros e caracteres especiais.'
                    return 'invalid'
                }
            }
        }
    }
    compara(valor1, valor2,elemento) {
        if (valor2 == "") {
            this.msg = 'Campo Vazio'
            return 'invalid'
        } else if (valor1 !== valor2) {
            this.msg = `${elemento} não coincidem`
            return 'invalid'
        } else {
            return 'valid'
        }
    }
}