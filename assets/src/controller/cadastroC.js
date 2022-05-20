const form = new Form
const viwer = new Viwer

$(form.Btn).click((e)=>{
    e.preventDefault()
    const cadastro = new Cadastro
    viwer.resultCad(form.Btn,cadastro.verificaCad())
})
//valida elements
$(form._name).blur(()=>{
    viwer.mostraNaTela(form._name,form.validaElement(form._name, 2), form.invalIdName, form.msg)
})
$(form._nick).blur(()=>{
    viwer.mostraNaTela(form._nick,form.validaElement(form._nick, 2), form.invalIdNick, form.msg)
})
$(form._nCasa).blur(()=>{
    viwer.mostraNaTela(form._nCasa,form.validaElement(form._nCasa, 1), form.invalIdNCasa, form.msg)
})
//valida RG
$(form._rg).blur(()=>{
    viwer.mostraNaTela(form._rg,form.validaRG(form._rg.val()), form.invalIdRg, form.msg)
})
//valida CEP
$(form._cep).blur(()=>{
    viwer.thinking(form._rua,form._estado,form._bairro)
    form.buscaCep(form._cep)
})
//valida email
$(form._email).blur(()=>{
    viwer.mostraNaTela(form._email,form.validaEmail(form._email.val()), form.invalIdEmail, form.msg)
})
// valida senha
$(form._senha).blur(()=>{
    viwer.mostraNaTela(form._senha,form.validaSenha(form._senha.val()), form.invalIdSenha, form.msg)
})
//compara
$(form._emailVer).blur(() => {
    viwer.mostraNaTela(form._emailVer,form.compara(form._email.val(), form._emailVer.val(),'Emails'), form.invalIdEmailVer, form.msg)
})
$(form._senhaVer).blur(() => {
    viwer.mostraNaTela(form._senhaVer,form.compara(form._senha.val(), form._senhaVer.val(),'Senhas'), form.invalIdSenhaVer, form.msg)
})

