// ola eu sou sua viwer
class ViwerUser{
    constructor(){
        this.header = $('#headerNav')
        this.footer = $('#footer')
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
            console.log(userExist);
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/headerLogado.html")
        } else if (!userExist){
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/header.html")
        } else {
            this.header.load("https://igorsans.github.io/DevUP/assets/pages/elements/headerLogado.html")
        }
    }
}