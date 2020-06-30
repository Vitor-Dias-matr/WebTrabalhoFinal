console.log(document.querySelector("#nome").value.length);

console.log(document.forms);



document.querySelector("#FormularioContato").onsubmit = function() {


    var formularioValido = true;

    if (document.querySelector("#nome").value.length > 20 || document.querySelector("#nome").value.length < 3) {
        //window.alert("O nome deve ter entre 4 e 20 caracteres");
        document.querySelector("#msgNome").innerHTML = "O nome deve ter entre 3 e 20 caracteres";
        document.querySelector("#nome").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgNome").innerHTML = "";
        document.querySelector("#nome").classList.remove("border-danger");
    }
    if (document.querySelector("#telefone").value.length != 11) {
        //window.alert("O telefone deve ter 11 caracteres");
        //console.log("Telefone");
        document.querySelector("#msgTelefone").innerHTML = "O telefone deve ter 11 caracteres";
        document.querySelector("#telefone").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgTelefone").innerHTML = "";
        document.querySelector("#telefone").classList.remove("border-danger");
    }
    if (document.querySelector("#exampleInputEmail1").value == "" ||
        document.querySelector("#exampleInputEmail1").value.indexOf('@') == -1 ||
        document.querySelector("#exampleInputEmail1").value.indexOf('.') == -1) {
        //window.alert("O email deve ter o caractere @");
        document.querySelector("#msgEmail").innerHTML = "O email deve ter o caractere @";
        document.querySelector("#exampleInputEmail1").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgEmail").innerHTML = "";
        document.querySelector("#exampleInputEmail1").classList.remove("border-danger");
    }
    if (document.querySelector("#assunto").value.length > 60 || document.querySelector("#assunto").value.length < 5) {
        //window.alert("Digite o assunto, no maximo 60 caracteres");
        document.querySelector("#msgAssunto").innerHTML = "Digite no minimo 5, no maximo 60 caracteres";
        document.querySelector("#assunto").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgAssunto").innerHTML = "";
        document.querySelector("#assunto").classList.remove("border-danger");
    }
    if (document.querySelector("#mensagem").value.length > 300 || document.querySelector("#mensagem").value.length < 10) {
        //window.alert("Digite a mensagem, no máximo 300 caracteres;");
        document.querySelector("#msgMensagem").innerHTML = "Digite no minimo 10 caracteres, no máximo 300 caracteres";
        document.querySelector("#mensagem").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgMensagem").innerHTML = "";
        document.querySelector("#mensagem").classList.remove("border-danger");
    }

    return formularioValido;

};