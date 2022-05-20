// ola eu sou sua viwer
$('#footer').load("https://igorsans.github.io/DevUP/assets/pages/elements/footer.html")
$('#headerNav').load("https://igorsans.github.io/DevUP/assets/pages/elements/header.html")
$('#usuario').load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html")
// function usuarioLogado(){
//     $('#usuario').load('https://igorsans.github.io/DevUP/assets/pages/elements/usuarioLogado.html')
// }
// mostra na tela forms
function mostraNaTela(divid, valid, invalidDiv, text) {
    $(divid).attr("class", `form-control is-${valid}`);
    $(invalidDiv).text(text)
}
// cep na tela
function thinking() {
    $("#inputRua").val("...");
    $("#inputEstado").val("...");
    $("#inputBairro").val("...");
}
function replace(dados) {
    $("#inputRua").val(dados.logradouro);
    $("#inputRua").attr("readonly", "true");
    $("#inputEstado").val(dados.localidade);
    $("#inputEstado").attr("readonly", "true");
    $("#inputBairro").val(dados.bairro);
    $("#inputBairro").attr("readonly", "true");
    $("#inputCep").attr("class", "form-control is-valid");
}
function limpa_formulário_cep() {
    $("#inputRua").val("");
    $("#inputRua").removeAttr("readonly", "true");
    $("#inputEstado").val("");
    $("#inputEstado").removeAttr("readonly", "true");
    $("#inputBairro").val("");
    $("#inputBairro").removeAttr("readonly", "true");
}