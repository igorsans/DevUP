// ola, eu sou sua controller!

// verifica se o usuario está logado ou não
// $('#')


// verificador de cadastro
$('#btnCadastro').click(()=>{
    verificaCadastro()
})
$("#inputName").blur(()=>{
    validaNome("#inputName")
})
$("#inputNick").blur(()=>{
    validaNome("#inputNick")
})
// Vê e-mail
$("#inputEmail").blur(() => {
    validaEmail()
   })
   // Vê e-mail
$("#inputEmailVer").blur(() => {
    validaEmailVer()
   })
// Vê Cep
$( "#inputCep" ).blur(() => {
   return buscaCep()
  })