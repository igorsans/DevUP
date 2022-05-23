class Controller {
    validaName(){
        viwer.mostraNaTela(form._name,form.validaElement(form._name, 2), form.invalIdName, form.msg)
    }
    validaNick(){
        viwer.mostraNaTela(form._nick,form.validaElement(form._nick, 2), form.invalIdNick, form.msg)
    }
    validaNCasa(){
        viwer.mostraNaTela(form._nCasa,form.validaElement(form._nCasa, 1), form.invalIdNCasa, form.msg)
    }
    validaRG(){
        viwer.mostraNaTela(form._rg,form.validaRG(form._rg.val()), form.invalIdRg, form.msg)
    }
    validaCep(){
        viwer.thinking(form._rua,form._estado,form._bairro)
        form.buscaCep(form._cep)
    }
    validaEmail(){
        viwer.mostraNaTela(form._email,form.validaEmail(form._email.val()), form.invalIdEmail, form.msg)
    }
    validaSenha(){
        viwer.mostraNaTela(form._senha,form.validaSenha(form._senha.val()), form.invalIdSenha, form.msg)
    }
    comparaEmail(){
        viwer.mostraNaTela(form._emailVer,form.compara(form._email.val(), form._emailVer.val(),'Emails'), form.invalIdEmailVer, form.msg)
    }
    comparaSenha(){
        viwer.mostraNaTela(form._senhaVer,form.compara(form._senha.val(), form._senhaVer.val(),'Senhas'), form.invalIdSenhaVer, form.msg)
    }
}

const form = new Form
const viwer = new Viwer
const controller = new Controller

$(form.Btn).click((e)=>{
    e.preventDefault()
    const cadastro = new Cadastro
    viwer.resultCad(form.Btn,cadastro.verificaCad())
})
//valida elements
$(form._name).blur(()=>{
    controller.validaName()
})
$(form._nick).blur(()=>{
    controller.validaNick()
})
$(form._nCasa).blur(()=>{
    controller.validaNCasa()
})
//valida RG
$(form._rg).blur(()=>{
    controller.validaRG()
})
//valida CEP
$(form._cep).blur(()=>{
    controller.validaCep()
})
//valida email
$(form._email).blur(()=>{
    controller.validaEmail()
})
// valida senha
$(form._senha).blur(()=>{
    controller.validaSenha()
})
//compara
$(form._emailVer).blur(() => {
    controller.comparaEmail()
})
$(form._senhaVer).blur(() => {
    controller.comparaSenha()
})

