// ola eu sou sua viwer
class ViwerUser{
    constructor(){
        this.header = $('#headerNav')
        this.footer = $('#footer')
        this.userSpace = $('#usuario')
    }
    entregaFooter(){
        this.footer.load("https://igorsans.github.io/DevUP/assets/pages/elements/footer.html")
    }
    entregaHeader(){
        this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/header.html")
    }
    entregaUser(userExist){
        if (userExist) {
            this.header.load('https://igorsans.github.io/DevUP/assets/pages/elements/usuarioLogado.html')
        } else if (!userExist){
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html")
        } else {
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html")
        }
    }
}