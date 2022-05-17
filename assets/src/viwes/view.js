// ola eu sou sua viwer
$('#footer').load("https://igorsans.github.io/DevUP/assets/pages/elements/footer.html")

//cadastro na tela
function nameNaTela(id){
    $(id).attr("class", "form-control is-valid");
}
function errorName(id){
    $(id).attr("class", "form-control is-invalid");
}
function errorEmail(){
    $("#inputEmail").attr("class", "form-control is-invalid");
}
function emailNaTela() {
    $("#inputEmail").attr("class", "form-control is-valid");
}
function EmailErroVerNaTela(){
    $("#inputEmailVer").attr("class", "form-control is-invalid");
}
function emailVerNaTela() {
    $("#inputEmailVer").attr("class", "form-control is-valid");
}
// cep na tela
function thinking() {
    $("#inputRua").val("...");
    $("#inputEstado").val("...");
}
function replace(dados) {
    $("#inputRua").val(dados.logradouro);
    $("#inputRua").attr("readonly", "true");
    $("#inputEstado").val(dados.localidade);
    $("#inputEstado").attr("readonly", "true");
    $("#inputCep").attr("class", "form-control is-valid");
}
function limpa_formulário_cep() {
    $("#inputRua").val("");
    $("#inputRua").removeAttr( "readonly","true");
    $("#inputEstado").val("");
    $("#inputEstado").removeAttr( "readonly","true");
}
function cepNotFound(){
    $("#inputCep").attr("class", "form-control is-invalid");
}