// ola eu sou sua viwer
class ViwerUser{
    constructor(){
        this.header = $('#headerNav')
        this.footer = $('#footer')
    }
    entregaFooter(){
        this.footer.load("https://igorsans.github.io/DevUP/assets/pages/elements/footer.html")
    }
    entregaUser(userExist){
        if (userExist==true) {
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/IndexHeaderLogado.html")
        } else if (!userExist){
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/indexHeader.html")
        } else {
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/IndexHeaderLogado.html")
        }
    }
}