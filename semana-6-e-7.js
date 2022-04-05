//função obterMenorPreço - CARD 1 - ESSENCIAL
function obterMenorPreco (listaDePrecos){
    menorPreco =  listaDePrecos.map(Number).reduce(function(a,b){
      return Math.min(a,b);
    });
    return menorPreco;
  }
  //teste
  console.log(obterMenorPreco([10,7,8,25,8,9,100,99]));

  //função obterMaiorPreco - CARD 2 - ESSENCIAL
function obterMaiorPreco(listaDePreco){
    maiorPreco = listaDePreco.map(Number).reduce(function(a,b){
        return Math.max(a,b);
    })
    return maiorPreco;
}
//teste
console.log(obterMaiorPreco([10,7,8,25,8,9,100,99]));

//Função capitalizarNomes - CARD 3 -ESSENCIAL
function capitalizarNomes(listaDeNomes){
    for(i=0;i<listaDeNomes.length;i++){
        listaDeNomes[i] = listaDeNomes[i].slice(0,1).toUpperCase()+ listaDeNomes[i].substr(1, listaDeNomes[i].length).toLowerCase();
    }
    return listaDeNomes;
}
//teste
console.log(capitalizarNomes(["tiago", "Alexandre", "kamillA"]));
//Função obterDescontoCategoria - CARD 4 - ESSENCIAL
categoriasDeCompras=['Alimentação','Infantil','Bebida']
function obterDescontoCategoria(categoria){
    categoria=String(categoria)
        if(categoria==='Alimentação'){
            return 30;
        }else if(categoria=='Infantil'){
            return 15;
        }else{
            return 0;
        }
}
//testes
console.log(obterDescontoCategoria('Alimentação'));
console.log(obterDescontoCategoria('Infantil'));
console.log(obterDescontoCategoria('higiene'));

//Função obterPrecosLimitadosAoOrçamento - CARD 5 - ESSENCIAL
function obterPrecosLimitadosAoOrçamento(listaDePreco,orcamento){
    let cabeNoOrçamento=[];
    for(let i=0;i<listaDePreco.length; i++){
        if(listaDePreco[i]<=orcamento){
            cabeNoOrçamento.push(listaDePreco[i]);
        }
    }
    return cabeNoOrçamento;
}
//testes
console.log(obterPrecosLimitadosAoOrçamento([5,7,9,50,20],9));



//Função calcularTotalDaCompra - CARD 6 - ESSENCIAL;
function calcularTotalDaCompra(listaDePreco){
    totalDaCompra = listaDePreco.reduce(function(a,b){
        return a+b
    });
    return totalDaCompra
}
//testes
console.log(calcularTotalDaCompra([10,30,5,15]))

//Função obterMenorEMaiorPrecos -CARD 7 - DESEJÁVEL
listaMaioreMenorPreco = []
function obterMenorEMaiorPrecos(listaDePreco){
    maiorPreco = listaDePreco.reduce(function(a,b){
        return Math.max(a,b)
    })
    listaDePreco.push(maiorPreco)
    menorPreco = listaDePreco.reduce(function(a,b){
        return Math.min(a,b)
    })
    listaMaioreMenorPreco.push(maiorPreco,menorPreco)
        return console.log(listaMaioreMenorPreco)
    
}
//teste
obterMenorEMaiorPrecos([10,7,8,25,8,9,100,99])

//Função obterPrecosDentroDoOrcamento - CARD 8 - DESEJÁVEL
precoNoOrcamento = []
function obterPrecosDentroDoOrcamento (listaDePreco,valorInferior,valorSuperior){
    if(valorSuperior <= valorInferior){
        return console.log(undefined);
    }else{
        for(i=0;i<listaDePreco.length;i++){
            if(valorInferior <= listaDePreco[i] && listaDePreco[i]<= valorSuperior){
                precoNoOrcamento.push(listaDePreco[i]);
            }
        }
        return console.log(precoNoOrcamento)
    }
}
//teste
obterPrecosDentroDoOrcamento([10,7,8,25,8,9,100,99],9,30)

//Função obterDescontoTotal - CARD 9 - DESEJÁVEL
function obterDescontoTotal(categoria,cupom){
    descontoPorCategoria=obterDescontoCategoria(categoria)
    if(cupom ==='NULABSSA' || cupom==='ALURANU'){
        descontoPorCupom = 10;
    }else{
        descontoPorCupom=0;
    }
    return descontoPorCategoria+descontoPorCupom
}
//testes
console.log(obterDescontoTotal('Alimentação', 'NULABSSA'));
console.log(obterDescontoTotal('Alimentação', 'ALURANU') );
console.log(obterDescontoTotal('Infantil', 'ALURANU'));
console.log(obterDescontoTotal('Bebida', 'ALURANU'));
console.log(obterDescontoTotal('Bebida', 'CUPOM-INVALIDO'));
console.log(obterDescontoTotal('Alimentação', 'CUPOM-INVALIDO'));
//Função calcularTotalDaCompraComDescontos - CAR 10 - DESEJÁVEL
var valorTotal=0;
    valor=0
    valorDescontado=0
function calcularTotalDaCompraComDescontos(listaDePreco,listaDeCategoria,cupom){
    for(i=0;i<listaDePreco.length;i++){
        valor = listaDePreco[i]
        desconto=obterDescontoTotal(listaDeCategoria[i],cupom)/100
        valorDescontado = valor*desconto
        valorTotal = valorTotal+valor-valorDescontado
    }
    return valorTotal
}
console.log(calcularTotalDaCompraComDescontos([50, 25, 30, 22], ['Infantil', 'Bebida', 'Alimentação', 'Bebida'], 'ALURANU') )





//Função capitalizarNomeCompleto - CARD 11 - DESEJÁVEL
nomeCapitalizado=''
palavrasSeparadas=[];
function capitalizarNomeCompleto(nomeCompleto){
   palavrasSeparadas = nomeCompleto.split(" ")
   for(i=0; i<palavrasSeparadas.length; i++){
       if(palavrasSeparadas[i].length>2){
           palavrasSeparadas[i]= palavrasSeparadas[i].slice(0,1).toUpperCase() + palavrasSeparadas[i].substr(1).toLowerCase()
        }
       nomeCapitalizado += palavrasSeparadas[i]+" "
   }
   return nomeCapitalizado.trim()
}
//teste
console.log(capitalizarNomeCompleto("tiago lage payne de pádua"))

//Função gerarCupomFiscal -CARD 12 - DESAFIO
function calcularImposto(categoria){
    for(var i=0; i<categoria.length;i++){
        obterDescontoCategoria(categoria[i])
    }
}
function gerarCupomFiscal(listaDeProdutos,listaDePreco,categoria,cupom){
    console.log(`Nome           Valor   Desconto  Imposto   Total`);

    for(i=0;i<listaDePreco.length;i++){
        console.log(`${listaDeProdutos[i]}      R$${listaDePreco[i]},00  R$${listaDePreco[i]*obterDescontoTotal(categoria[i], cupom)/100},00    ${obterDescontoCategoria(categoria)}
        `)
    }

}
gerarCupomFiscal(['Serpentina', 'Refrigerante'], [20, 7], ['Infantil', 'Bebida'], 'NULABSSA')