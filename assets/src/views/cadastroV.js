class Viwer {
    mostraNaTela(divid, funcVer, invalidDiv, text) {
        $(divid).attr("class", `form-control is-${funcVer}`);
        $(invalidDiv).text(text)
    }
    resultCad(divid,funcVer){
        $(divid).attr("class", `btn btn-primary form-control is-${funcVer}`)
    }
    thinking(rua,estado,bairro) {
        $(rua).val("...");
        $(estado).val("...");
        $(bairro).val("...");
    }
    replace(dados) {
        $("#inputRua").val(dados.logradouro);
        $("#inputEstado").val(dados.localidade);
        $("#inputBairro").val(dados.bairro);
        $("#inputCep").attr("class", "form-control is-valid");
    }
    limpa_formulário_cep() {
        $("#inputRua").val("");
        $("#inputEstado").val("");
        $("#inputBairro").val("");
    }
}