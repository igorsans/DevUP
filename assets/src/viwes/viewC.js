class Viwer {
    mostraNaTela(divid, funcVer, invalidDiv, text) {
        $(divid).attr("class", `form-control is-${funcVer}`);
        $(invalidDiv).text(text)
    }
}