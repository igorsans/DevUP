// ola eu sou sua model

//verificador de cadastro
function verificaCadastro(){
    const cep1 = 1
    return cep1
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
                    alert("CEP não encontrado.");
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