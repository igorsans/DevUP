// ola eu sou sua model

//verificador de cadastro
function verificaCadastro() {
    const teste1 = $("#inputName")
    console.log(teste1);

   
}
//valida dados
function validaElement(id,invalId, maxChar) {
    const name = $(id)
    if (name.val().length == 0) {
        return mostraNaTela(id,'invalid',invalId,'Campo vazio!')
    } else if (name.val().length >= maxChar) {
        return mostraNaTela(id,'valid')
    } else {
        return mostraNaTela(id,'invalid',invalId,'Parece que algo não está correto!')
    }
}
// email
function validaEmail() {
    const email = $("#inputEmail").val()
    if (email == "") {
        return mostraNaTela('#inputEmail','invalid','#emailInvalido','Campo vazio!')
    } else {
        const contemArro = /@/
        if (!contemArro.test(email)) {
            return mostraNaTela('#inputEmail','invalid','#emailInvalido','E-mail invalido!')
        } else if (email.length < 8) {
            return mostraNaTela('#inputEmail','invalid','#emailInvalido','E-mail invalido!')
        } else {
            return mostraNaTela('#inputEmail','valid')
        }
    }
}
function compara(valor1,valor2,invalId,elemento) {
    const value1 = $(valor1).val()
    const value2 = $(valor2).val()
    if (value2 == ""){
        return mostraNaTela(valor2,'invalid',invalId,'Campo vazio!')
    }else if (value1 !== value2) {
        return mostraNaTela(valor2,'invalid',invalId,`${elemento} não coincidem`)
    } else {
        return mostraNaTela(valor2,'valid')
    }
}
//senha entre 8 uma letra um numero
function validaSenha() {
    const senha = $("#inputSenha").val()
    if (senha == "") {
        return mostraNaTela('#inputSenha','invalid','#senhaInvalida','Campo Vazio!')
    } else {
        const numeros = /([0-9])/;
        const alfabeto = /([a-zA-Z])/;
        const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if (senha.length < 8) {
            return mostraNaTela('#inputSenha','invalid','#senhaInvalida','Senha Fraca, minimo de 8 digitos')
        } else {
            if (senha.match(numeros) && senha.match(alfabeto) && senha.match(chEspeciais)) {
                return mostraNaTela('#inputSenha','valid')
            } else {
                return mostraNaTela('#inputSenha','invalid','#senhaInvalida','Senha deve conter letras numeros e caracteres especiais.')
            }
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
                        return mostraNaTela('#inputCep','invalid','#cepInvalido','Cep não encontrado')
                    }
                });
            }
            else {
                limpa_formulário_cep();
                return mostraNaTela('#inputCep','invalid','#cepInvalido',"Formato de CEP inválido.")
            }
        }
        else {
            mostraNaTela('#inputCep','invalid','#cepInvalido','Campo vazio')
            limpa_formulário_cep();
        }
    }