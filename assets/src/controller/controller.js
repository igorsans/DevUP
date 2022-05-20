const usuario = new User
const viwerPage = new ViwerUser
console.log(usuario);
console.log(viwerPage);
viwerPage.entregaFooter()
viwerPage.entregaHeader()
console.log(usuario.verificaLogado1());
viwerPage.entregaUser(usuario.verificaLogado1())