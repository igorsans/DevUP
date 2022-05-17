// ola eu sou sua model

//verificador de cadastro
function verificaCadastro(){
    const cep1 = 1
    return cep1
}
//valida dados
function validaNome(id){
    const name = $(id)
    console.log(name.val());
    if (name ==""){
        errorName(id)
    } else if (name.val().length > 2) {
        nameNaTela(id)
    } else {
        errorName(id)
    }
}
// email
function validaEmail(){
    const email= $("#inputEmail").val()
    console.log(email.length);
    if(email == ""){
        alert("preencha os campos")
    } else {
        const contemArro = /@/
        if(!contemArro.test(email)) {
            return alert("não é um email")
        } else if (email.length < 8){
            alert('ta pequeno ainda')
        } else {
            alert("email valido")
        }
    }
}
function validaEmailVer(){
    const email = $("#inputEmail").val()
    const emailVer = $("#inputEmailVer").val()
    if (email !== emailVer){
        alert("emails não coincidem")
    } else {
        alert("ok")
    }
}

// Cep
function buscaCep(){
    const cep = $("#inputCep").val().replace(/\D/g, '');
    if (cep != "") {
        const validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            thinking()

            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                if (!("erro" in dados)) {
                    replace(dados)
                }
                else {
                    limpa_formulário_cep();
                    cepNotFound()
                }
            });
        }
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        limpa_formulário_cep();
    }
}