// ola eu sou sua viwer
class ViwerUser{
    constructor(){
        this.header = $('#headerNav')
        this.footer = $('#footer')
        this.userSpace = ''
    }
    entregaFooter(){
        this.footer.load("https://igorsans.github.io/DevUP/assets/pages/elements/footer.html")
    }
    entregaHeader(){
        this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/header.html")
    }
    entregaUser(userExist){
        console.log(userExist);
        if (userExist==true) {
            this.userSpace = $('#usuario')
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioLogado.html")
        } else if (!userExist){
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html")
        } else {
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/usuarioDeslogado.html")
        }
    }
}