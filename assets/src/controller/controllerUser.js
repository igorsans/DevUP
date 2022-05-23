const usuario = new User
const viwerPage = new ViwerUser
viwerPage.entregaFooter()
// viwerPage.entregaHeader()
viwerPage.entregaUser(usuario.verificaLogado1())

function identificar(id){
    const identnome = localStorage.getItem('nome');
    const identNick = localStorage.getItem('nick');
    $(id).text(`${identnome} ${identNick}`)
}
function deslogar(){
    localStorage.clear();
    console.log('teste');
    document.location.reload(true)
}

