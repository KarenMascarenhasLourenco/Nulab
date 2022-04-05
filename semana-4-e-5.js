//Função Saudar card1 - ESSENCIAL
// Escreva uma função que receba um nome e retorne uma saudação para este nome:
// Tiago -> Olá, Tiago
function saudar(nome) {
    return `Olá, ${nome}`;
}
//teste
console.log(saudar('Karen'))

//função extrairPrimeiroNome card2 - ESSENCIAL
//Escreva uma função que receba um nome completo e retorna apenas o primeiro nome: Tiago Lage Payne de Pádua -> Tiago
function extrairPrimeiroNome(nome) {
    primeiroNome=nome.split(' ')[0];
    return primeiroNome
}
//teste
console.log(extrairPrimeiroNome("Karen Mascarenhas Lourenço"))

//função capitalizar card 3 - ESSENCIAL
//Escreva uma função que receba uma palavra e torna a primeira letra maiúscula e as outras minúsculas: tIaGo -> Tiago
function capitalizar(nome) {
    primeiraLetra=nome.slice(0,1).toUpperCase();
    restoDaPalavra=nome.slice(1,).toLowerCase();
    return `${primeiraLetra+restoDaPalavra}`;
}
//teste
console.log(capitalizar("kAren"));

//Função calculaImposto card 4 - ESSENCIAL
//Escreva uma função que recebe um preço original e uma categoria de produto e calcula o valor do imposto. Produtos da categoria Alimentação são isentos. Outros produtos tem um imposto de 10%.
//(30, Alimentação) => 0
//(10, Bebida) => 1
function calculaImposto(preco,categoria){
    if(categoria==="Alimentação"){
        imposto= 0;
    }else{
        imposto=preco*0.1;
    }
    return imposto;
}
//teste
console.log(calculaImposto(50,'Alimentação'));
console.log(calculaImposto(50,'Higiene'));

//função calculaDesconto card 5 - ESSENCIAL
//Escreva uma função que recebe um preço original, uma categoria de produto e um cupom de desconto e calcula o preço com desconto. Se a categoria for Alimentação e o cupom for NULABSSA, deve ser feito um desconto de 50%. Caso contrário, não há nenhum desconto.
//(30, Alimentação, NULABSSA) => 15
//(10, Bebida, NULABSSA) => 10
//(30, Alimentação, XPTO) => 30
//(10, Bebida, XPTO) => 10
function calculaDesconto(preco,categoria,cupom){
    if(categoria==='Alimentação' && cupom==='NULABSSA'){
        desconto=preco/2
    }else{
        desconto=preco
    }
    return desconto
}
//teste
console.log(calculaDesconto(100,'Alimentação','NULABSSA'));
console.log(calculaDesconto(100,'Alimento','NUBLABSSA'));
console.log(calculaDesconto(100,'Higiente','10off'));

//função truncar card 6 - DESEJÁVEL
//Escreva uma função que receba uma palavra como primeiro argumento, um comprimento máximo como segundo argumento e trunca a palavra se ela for maior que o comprimento máximo.
//o valor default do comprimento máximo deve ser 5:
//(teste, 10) -> teste
//(fulano, 4) -> fula...
function truncar(palavra,comprimentoMaximo=5){
    truncado = palavra.slice(0,comprimentoMaximo);
    return truncado
}
//teste
console.log(truncar('alimento',6));
console.log(truncar('alimento'))

//função validaTextoPreenchido card 7 -DESEJÁVEL
//Escreva uma função que valida se o texto informado está preenchido e retorna o texto sem espaços antes ou depois.
//"" -> undefined
//" " -> undefined
//" Maria " -> "Maria"
function validaTextoPreenchido(texto){
    if (texto.trim()!==""){
        validado=texto.trim();
    }else{
        validado=undefined
    }
    return validado
}
//teste
console.log(validaTextoPreenchido(''));
console.log(validaTextoPreenchido(' '));
console.log(validaTextoPreenchido('                                     Karen'));

//função validaData card 8 - DESAFIO
//Escreva uma função que valida se a string passada é uma data de nascimento válida, deve retornar um objeto Date sea data for válida ou NaN caso seja inválida.
//01/01/2000 -> Ok
//99/99/9999 -> NaN
function validaData(data) {
    dia=data.slice(0,2)
    dia= Number(dia)
    mes=data.slice(3,5)
    mes= Number(mes)
    ano=data.slice(-4)
    ano= Number(ano)
    validaAno(ano);
    validaMes(mes);
    validaDia(dia);
    if(anoValidado === true && mesValidado === true && diaValidado === true){
        resposta= console.log('ok')
    }else{
        resposta = console.log('NaN');
    }
    return resposta
  }

function validaAno(ano){
    if(ano>1900 && ano <2022){
        return anoValidado =true
    }else{
        return anoValidado =false
    }
}
function validaMes(mes){
    if(mes>0 && mes <13){
        return mesValidado = true
    }else{
        return mesValidado = false
    }
}
function validaDia(dia){
    if(dia>0 && dia <32){
        if(mes==02 && dia>29){
            return diaValidado = false
        }else if((mes==04 || mes==06 || mes==09 || mes==11) && dia>30){
            return diaValidado = false
        }else if(dia>31){
            return diaValidado = false
        }else{
            return diaValidado = true
        }

    }else{
        return diaValidado = false
    }
}
//teste
  console.log(validaData("99/99/9999"));
  console.log(validaData("02/03/2002")); 
