// Variáveis globais
let prato;
let bebida;
let doce;
let escolhido1;
let escolhido2;
let escolhido3;
let nome; 
let endereco;
let confirmado;
let preco;
let valorTotal;
// Pratos

function escolherPratoUm() {
    document.getElementById("prato-1").style.border = "5px solid #32B72F";
    document.getElementById("prato-1").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("prato-2").style.borderColor = "white";
    document.getElementById("prato-3").style.borderColor = "white";
    document.getElementById("prato-4").style.borderColor = "white";

    //guardar na gaveta que o prato escolhido foi pratoUm
    prato = "prato um";
    preco1 = parseFloat(14.90);
    escolhido1 = "sim";
}

function escolherPratoDois() {
    document.getElementById("prato-1").style.borderColor = "white";
    document.getElementById("prato-2").style.border = "5px solid #32B72F";
    document.getElementById("prato-2").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("prato-3").style.borderColor = "white";
    document.getElementById("prato-4").style.borderColor = "white";
    prato = "prato dois";
    preco1 = parseFloat(14.90);
    escolhido1 = "sim";
}

function escolherPratoTres() {
    document.getElementById("prato-1").style.borderColor = "white";
    document.getElementById("prato-2").style.borderColor = "white";
    document.getElementById("prato-3").style.border = "5px solid #32B72F";
    document.getElementById("prato-3").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("prato-4").style.borderColor = "white";

    //guardar na gaveta que o prato escolhido foi pratoTres
    prato = "prato tres";
    preco1 = parseFloat(14.90);
    escolhido1 = "sim";
}

function escolherPratoQuatro() {
    document.getElementById("prato-1").style.borderColor = "white"
    document.getElementById("prato-2").style.borderColor = "white"
    document.getElementById("prato-3").style.borderColor = "white"
    document.getElementById("prato-4").style.border = "5px solid #32B72F";
    document.getElementById("prato-4").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)"

    //guardar na gaveta que o prato escolhido foi pratoQuatro
    prato = "prato quatro";
    preco1 = parseFloat(14.90);
    escolhido1 = "sim";
}

// Bebidas

function escolherBebidaUm() {
    document.getElementById("bebida-1").style.border = "5px solid #32B72F";
    document.getElementById("bebida-1").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("bebida-2").style.borderColor = "white";
    document.getElementById("bebida-3").style.borderColor = "white";
    document.getElementById("bebida-4").style.borderColor = "white";
    bebida = "bebida um";
    preco2 = parseFloat(4.90);
    escolhido2 = "sim";
}

function escolherBebidaDois() {
    document.getElementById("bebida-1").style.borderColor = "white";
    document.getElementById("bebida-2").style.border = "5px solid #32B72F";
    document.getElementById("bebida-2").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("bebida-3").style.borderColor = "white";
    document.getElementById("bebida-4").style.borderColor = "white";
    bebida = "bebida dois";
    preco2 = parseFloat(4.90);
    escolhido2 = "sim";
}

function escolherBebidaTres() {
    document.getElementById("bebida-1").style.borderColor = "white";
    document.getElementById("bebida-2").style.borderColor = "white";
    document.getElementById("bebida-3").style.border = "5px solid #32B72F";
    document.getElementById("bebida-3").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("bebida-4").style.borderColor = "white";
    bebida = "bebida tres";
    preco2 = parseFloat(4.90);
    escolhido2 = "sim";
}

function escolherBebidaQuatro() {
    document.getElementById("bebida-1").style.borderColor = "white";
    document.getElementById("bebida-2").style.borderColor = "white";
    document.getElementById("bebida-3").style.borderColor = "white";
    document.getElementById("bebida-4").style.border = "5px solid #32B72F";
    document.getElementById("bebida-4").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    bebida = "bebida quatro";
    preco2 = parseFloat(4.90);
    escolhido2 = "sim";
}

// Sobremesas

function escolherDoceUm() {
    document.getElementById("doce-1").style.border = "5px solid #32B72F";
    document.getElementById("doce-1").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("doce-2").style.borderColor = "white";
    document.getElementById("doce-3").style.borderColor = "white";
    document.getElementById("doce-4").style.borderColor = "white";
    doce = "doce um";
    preco3 = parseFloat(7.90);
    escolhido3 = "sim";
    if (escolhido1 == 'sim' && escolhido2 == 'sim' && escolhido3 == 'sim'){
        document.getElementById("botao-confirma").style.backgroundColor = "#32B72F";
        document.getElementById("botao-confirma").innerHTML = "Fechar pedido";
        confirmado = "sim"
    }
}

function escolherDoceDois() {
    document.getElementById("doce-1").style.borderColor = "white";
    document.getElementById("doce-2").style.border = "5px solid #32B72F";
    document.getElementById("doce-2").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("doce-3").style.borderColor = "white";
    document.getElementById("doce-4").style.borderColor = "white";
    doce = "doce dois";
    preco3 = parseFloat(7.90);
    escolhido3 = "sim";
    if (escolhido1 == 'sim' && escolhido2 == 'sim' && escolhido3 == 'sim'){
        document.getElementById("botao-confirma").style.backgroundColor = "#32B72F";
        document.getElementById("botao-confirma").innerHTML = "Fechar pedido";
        confirmado = "sim";

    }
}

function escolherDoceTres() {
    document.getElementById("doce-1").style.borderColor = "white";
    document.getElementById("doce-2").style.borderColor = "white";
    document.getElementById("doce-3").style.border = "5px solid #32B72F";
    document.getElementById("doce-3").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    document.getElementById("doce-4").style.borderColor = "white";
    doce = "doce tres";
    preco3 = parseFloat(7.90);
    escolhido3 = "sim";
    if (escolhido1 == 'sim' && escolhido2 == 'sim' && escolhido3 == 'sim'){
        document.getElementById("botao-confirma").style.backgroundColor = "#32B72F";
        document.getElementById("botao-confirma").innerHTML = "Fechar pedido";
        confirmado = "sim";
    }
}

function escolherDoceQuatro() {
    document.getElementById("doce-1").style.borderColor = "white";
    document.getElementById("doce-2").style.borderColor = "white";
    document.getElementById("doce-3").style.borderColor = "white";
    document.getElementById("doce-4").style.border = "5px solid #32B72F";;
    document.getElementById("doce-4").style.boxShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)";
    
    doce = "doce quatro";
    preco3 = parseFloat(7.90);
    escolhido3 = "sim";
    if (escolhido1 == 'sim' && escolhido2 == 'sim' && escolhido3 == 'sim'){
        document.getElementById("botao-confirma").style.backgroundColor = "#32B72F";
        document.getElementById("botao-confirma").innerHTML = "Fechar pedido";
        confirmado = "sim"
    }
}

function fecharConta () {
    // pega os produtos escolhidos
    // monta uma frase com o pedido
    // integração com o whatsapp
    nome = prompt("Qual é o seu nome? ");
    endereco = prompt("Qual é o seu endereco? ");
    valorTotal = preco1 + preco2 + preco3;
    let mensagem = "";
    mensagem += "Olá, gostaria de fazer o pedido: ";
    mensagem += "\n";
    mensagem += "Prato = " + prato;
    mensagem += "\n Bebida = " + bebida;
    mensagem += "\n Doce = " + doce;
    mensagem += ("\n Nome: "+ nome + "\n");
    mensagem += (`Endereço: ${endereco}`);
    mensagem += ("\n Valor Total = " + parseFloat(valorTotal.toFixed(2)));

    var wapMes = encodeURIComponent(mensagem);

    var prep = "https://wa.me/+5513991730128?text="
    window.open(prep + wapMes);
    console.log(mensagem);
    alert(mensagem);
}


