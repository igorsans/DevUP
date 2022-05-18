// ola, eu sou sua controller!

// verifica se o usuario está logado ou não
// $('#')


// verificador de cadastro
$('#btnCadastro').click(()=>{
    verificaCadastro()
})
$("#inputName").blur(()=>{
    validaElement("#inputName","#nameInvalido",2,undefined)
})
$("#inputNick").blur(()=>{
    validaElement("#inputNick","#nickInvalido",2,undefined)
})
// Vê e-mail
$("#inputEmail").blur(() => {
    validaEmail()
   })
// Vê e-mail igual
$("#inputEmailVer").blur(() => {
    compara('#inputEmail','#inputEmailVer','#emailVerInvalido','Emails')
   })
// vê senha
$('#inputSenha').blur(()=>{
    validaSenha()
})
//vê senha igual
$('#inputVerSenha').blur(()=>{
    compara('#inputSenha','#inputVerSenha','#senhaVerInvalida','Senhas')
})
// Vê Cep
$( "#inputCep" ).blur(() => {
   return buscaCep()
  })