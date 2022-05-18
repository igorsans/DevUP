// ola, eu sou sua controller!

// verifica se o usuario está logado ou não
verificaLogado()


// verificador de cadastro
$('#btnCadastro').click(() => {
    verificaCadastro()
})
// elementos
$("#inputName").blur(() => {
    return validaElement("#inputName", "#nameInvalido", 2)
})
$("#inputNick").blur(() => {
    return validaElement("#inputNick", "#nickInvalido", 2)
})
$("#inputNumero").blur(() => {
    return validaElement("#inputNumero", "#numeroInvalido", 1)
})
// Vê RG
$("#inputRG").blur(() => {
    return validaRG()
})
// Vê e-mail
$("#inputEmail").blur(() => {
    return validaEmail()
})
// Vê e-mail igual
$("#inputEmailVer").blur(() => {
    return compara('#inputEmail', '#inputEmailVer', '#emailVerInvalido', 'Emails')
})
// vê senha
$('#inputSenha').blur(() => {
    return validaSenha()
})
//vê senha igual
$('#inputVerSenha').blur(() => {
    return compara('#inputSenha', '#inputVerSenha', '#senhaVerInvalida', 'Senhas')
})
// Vê Cep
$("#inputCep").blur(() => {
    return buscaCep()
})