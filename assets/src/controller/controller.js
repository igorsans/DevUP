// ola, eu sou sua controller!

// verifica se o usuario está logado ou não
// $('#')


// verificador de cadastro
$('#btnCadastro').click(()=>{
    verificaCadastro()
})


// Vê Cep
$( "#inputCep" ).blur(function() {
   return buscaCep()
  })