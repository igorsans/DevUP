const usuario = new User
const viwerPage = new ViwerUser
viwerPage.entregaFooter()
// viwerPage.entregaHeader()
viwerPage.entregaUser(usuario.verificaLogado1())

function identificar(id){
    const identnome = localStorage.setItem('nome', nome);
    const identNick = localStorage.setItem('nick', nick);
    $(id).text(`${identnome} ${identNick}`)
}

