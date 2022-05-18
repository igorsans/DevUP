// ola eu sou sua model
function verificaLogado(){
    try {
        let nomeUser = localStorage.getItem('usuarioNome');
        let nickUser = localStorage.getItem('usuarioNick');
        let emailUser = localStorage.getItem('usuarioEmail');
        let senhaUser = localStorage.getItem('usuarioSenha');
        if(nomeUser == null || nickUser == null || emailUser == null || senhaUser == null) throw new Error("não esta logado");
        alert('bem vindo')
        usuarioLogado()
        console.log('usuario logado');
    } catch (e) {
        usuarioLogado('https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html')
        console.log('usuario deslogado');
        alert(e)
        console.error(e)
    }
}

//verificador de cadastro
function verificaCadastro() {
    if (
        validaElement("#inputName", "#nameInvalido", 2) != true ||
        validaElement("#inputNick", "#nickInvalido", 2) != true ||
        validaCep() != true ||
        validaElement("#inputNumero", "#numeroInvalido", 1) != true ||
        validaEmail() != true ||
        compara('#inputEmail', '#inputEmailVer', '#emailVerInvalido', 'Emails') != true ||
        validaSenha() != true ||
        compara('#inputSenha', '#inputVerSenha', '#senhaVerInvalida', 'Senhas') != true ||
        validaRG() != true
    ) {
        console.log("falta algo");
    } else {
        const nome = $("#inputName").val()
        const nick = $("#inputNick").val()
        const email = $("#inputEmail").val()
        const senha = $("#inputSenha").val()
        localStorage.setItem('usuarioNome', nome);
        localStorage.setItem('usuarioNick', nick);
        localStorage.setItem('usuarioEmail', email);
        localStorage.setItem('usuarioSenha', senha);
        // window.location.href = "../../index.html"
    }
    console.log(validaCep());
}
//valida dados
function validaElement(id, invalId, maxChar) {
    const name = $(id)
    if (name.val().length == 0) {
        return mostraNaTela(id, 'invalid', invalId, 'Campo vazio!')
    } else if (name.val().length >= maxChar) {
        mostraNaTela(id, 'valid')
        return true
    } else {
        return mostraNaTela(id, 'invalid', invalId, 'Parece que algo não está correto!')
    }
}
// email
function validaEmail() {
    const email = $("#inputEmail").val()
    if (email == "") {
        return mostraNaTela('#inputEmail', 'invalid', '#emailInvalido', 'Campo vazio!')
    } else {
        const contemArro = /@/
        if (!contemArro.test(email)) {
            return mostraNaTela('#inputEmail', 'invalid', '#emailInvalido', 'E-mail invalido!')
        } else if (email.length < 6) {
            return mostraNaTela('#inputEmail', 'invalid', '#emailInvalido', 'E-mail invalido!')
        } else {
            mostraNaTela('#inputEmail', 'valid')
            return true
        }
    }
}
function compara(valor1, valor2, invalId, elemento) {
    const value1 = $(valor1).val()
    const value2 = $(valor2).val()
    if (value2 == "") {
        return mostraNaTela(valor2, 'invalid', invalId, 'Campo vazio!')
    } else if (value1 !== value2) {
        return mostraNaTela(valor2, 'invalid', invalId, `${elemento} não coincidem`)
    } else {
        mostraNaTela(valor2, 'valid')
        return true
    }
}
//senha entre 8 uma letra um numero
function validaSenha() {
    const senha = $("#inputSenha").val()
    if (senha == "") {
        return mostraNaTela('#inputSenha', 'invalid', '#senhaInvalida', 'Campo Vazio!')
    } else {
        const numeros = /([0-9])/;
        const alfabeto = /([a-zA-Z])/;
        const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if (senha.length < 8) {
            return mostraNaTela('#inputSenha', 'invalid', '#senhaInvalida', 'Senha Fraca, minimo de 8 digitos')
        } else {
            if (senha.match(numeros) && senha.match(alfabeto) && senha.match(chEspeciais)) {
                mostraNaTela('#inputSenha', 'valid')
                return true
            } else {
                return mostraNaTela('#inputSenha', 'invalid', '#senhaInvalida', 'Senha deve conter letras numeros e caracteres especiais.')
            }
        }
    }
}
//RG
function validaRG(){
    const rg = $("#inputRG").val()
    if (rg == ""){
        return mostraNaTela('#inputRG', 'invalid', '#rgInvalido', 'Campo Vazio!')
    } else {
        const validaRg = /^[0-9]{9}$/;
        if (validaRg.test(rg)) {
            mostraNaTela('#inputRG', 'valid')
            return true
    } else {
        return mostraNaTela('#inputRG', 'invalid', '#rgInvalido', 'RG invalido!')
    }
}
}
// Cep
function buscaCep() {
    const cep = $("#inputCep").val().replace(/\D/g, '');
    if (cep != "") {
        const validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            thinking()

            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
                if (!("erro" in dados)) {
                    replace(dados)
                }
                else {
                    limpa_formulário_cep();
                    mostraNaTela('#inputCep', 'invalid', '#cepInvalido', 'Cep não encontrado')
                }
            });
        }
        else {
            limpa_formulário_cep();
            mostraNaTela('#inputCep', 'invalid', '#cepInvalido', "Formato de CEP inválido.")
            return false
        }
    }
    else {
        mostraNaTela('#inputCep', 'invalid', '#cepInvalido', 'Campo vazio')
        limpa_formulário_cep();
        return false
    }
}

function validaCep(){
    const estado = $('#inputEstado').val()
    const rua = $('#inputRua').val()
    const cep = $("#inputCep").val().replace(/\D/g, '');
    if(estado == "" || rua == "" || cep == ""){
        return false
    } else {
        return true
    }
}