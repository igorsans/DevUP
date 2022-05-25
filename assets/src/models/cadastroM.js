class Cadastro {
    constructor() {
        this._nameUser = $('#inputName').val()
        this._nickUser = $('#inputNick').val()
        this._rgUser = $('#inputRG').val()
        this._cepUser = $('#inputCep').val()
        this._ruaUser = $('#inputRua').val()
        this._nCasaUser = $('#inputNumero').val()
        this._emailUser = $('#inputEmail').val()
        this._emailVerUser = $('#inputEmailVer').val()
        this._senhaUser = $('#inputSenha').val()
        this._senhaVerUser = $('#inputVerSenha').val()
    }
    verificaCad() {
        try {
            if (
            form.validaElement(form._name, 2) != 'valid' || form.validaElement(form._nick, 2) != 'valid' ||
            form.validaElement(form._nCasa, 1) != 'valid' || form.validaRG(form._rg.val()) != 'valid' ||
            form.validaEmail(form._email.val()) != 'valid' || form.validaSenha(form._senha.val()) != 'valid' ||
            form.compara(form._email.val(), form._emailVer.val(),'Emails') != 'valid' ||
            form.compara(form._senha.val(), form._senhaVer.val(),'Senhas') != 'valid' ||
            this._ruaUser == ''
        ) throw new Error('Cadastro não realizado\nVerifique os dados!')
            const email = this._emailUser
            const senha = this._senhaUser
            const nome = this._nameUser
            const nick = this._nickUser
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);
            localStorage.setItem('nome', nome);
            localStorage.setItem('nick', nick);
            window.location.href = "../../index.html"
        } catch(e) {
            return 'invalid'
        }
    }
}
class Form {
    constructor() {
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
        this._rua = $('#inputRua')
        this._estado = $('#inputEstado')
        this._bairro = $('#inputBairro')
        this.Btn = $('#btnCadastro')
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
    validaRG(rg) {
        if (rg == "") {
            this.msg = 'Campo Vazio'
            return 'invalid'
        } else {
            const validaRg = /^[0-9]{9}$/;
            if (validaRg.test(rg)) {
                return 'valid'
            } else {
                this.msg = 'RG invalido!'
                return 'invalid'
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
    compara(valor1, valor2, elemento) {
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
    buscaCep(Cep) {
        const cep = $(Cep).val().replace(/\D/g, '');
        if (cep != "") {
            const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
                    if (!("erro" in dados)) {
                        viwer.replace(dados)
                    }
                    else {
                        viwer.limpa_formulário_cep();
                        viwer.mostraNaTela('#inputCep', 'invalid', '#cepInvalido', 'Cep não encontrado')
                    }
                });
            }
            else {
                viwer.limpa_formulário_cep();
                viwer.mostraNaTela('#inputCep', 'invalid', '#cepInvalido', "Formato de CEP inválido.")
            }
        }
        else {
            viwer.mostraNaTela('#inputCep', 'invalid', '#cepInvalido', 'Campo Vazio')
        }
    }
}