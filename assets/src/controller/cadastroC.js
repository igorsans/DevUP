class ControladoraCadastro {

}
const form = new Form()
const cadastro = new Cadastro()
$("#btnCadastro").click((e)=>{
    e.preventDefault()
    cadastro.criar(e,form)
})

console.log(form);