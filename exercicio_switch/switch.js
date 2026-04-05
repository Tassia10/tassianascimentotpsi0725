/*
function tipoDia(dia){
    dia = dia

  switch (dia) {
        case "Sabado":
        case "Domingo":
            return "Fim de semana";
        case "Segunda":
        case "Terca":
        case "Quarta":
        case "Quinta":
        case "Sexta":
            return "Dia util";
        default:
            return "Dia invalido";
    }
}
console.log(tipoDia("Sabado"));
console.log(tipoDia("domingo"));
console.log(tipoDia("segunda"));
console.log(tipoDia("terca"));
console.log(tipoDia("quarta"));
console.log(tipoDia("quinta"));
console.log(tipoDia("sexta"));


function classificacaoNota(nota){
switch(nota){
    case "Excelente":
        return"90-100";

        case "Bom":
        return "70-89";

        case "Suficiente":
        return "50-69";

        case "Insuficinete":
        return "20-49";

        default: 
        return "invalida";

        
}   
}
console.log(classificacaoNota("Excelente"));
console.log(classificacaoNota("Bom"));
console.log(classificacaoNota("Suficiente"));
console.log(classificacaoNota("Insuficiente"));


function tipoPedido(pedido){
const tipo = pedido.tipo
const valor = pedido.valor


switch (tipo){
case "compra":
return `Compra de ${pedido.valor}`;

case "venda":
return`Venda de ${pedido.valor}`;

default:
    return "Pedido desconhecido"
}
}
console.log(tipoPedido({"tipo" : "venda", "valor": 250}));


function tipoDado(valor){
const tipoValor  = typeof valor

switch(true){
    case valor === null:
            return 'Null'
case Array.isArray(valor):
return 'Lista'
case tipoValor === 'number' && Number.isInteger(valor):
    return 'Numero inteiro'
    case tipoValor === 'number' && !Number.isInteger(valor):
    return 'Numero decimal'
    case tipoValor === 'string' && !isNaN(valor) && valor.trim() !== '':
        return 'String Numerica'
        case tipoValor === 'string':
            return ' String textual'
            default:
                return 'Tipo desconhecido'

}
}

console.log(tipoDado([10, 20, 30]));
console.log(tipoDado(20));
console.log(tipoDado(10.5));

/*
function analiseMensagem(mensagem){

if(mensagem === 'Ola' || mensagem === 'Bom dia'){
return 'Saudacao'

}else if(mensagem.endsWith('?')) {
    return 'Pergunta'

}else if(mensagem.includes('tchau')|| mensagem.includes('Adeus')){
    return 'Despedida'

}else {
    return 'Mensagem generica'
}
}
console.log(analiseMensagem('Tudo bem?'))
console.log(analiseMensagem('Adeus'))


function estadoServidor(servidor){
const status = servidor.status
const tempo = servidor.tempo

switch(true){

    case status === 'ok' && tempo <= 200:
        return 'Servidor ativo'
        case status === 'ok' && tempo > 200:
            return 'Servidor lento'
            case status === 'erro':
                return 'Servidor indisponivel'
                default: 
                return 'Estado desconhecido'

}
}
console.log(estadoServidor({"status": "ok", "tempo": 150}))


function operacaoMatematica(operacao, num1, num2){

    switch(operacao){
    case 'soma':
    return num1 + num2
    case 'subtracao':
    return num1 - num2
    case 'multiplicacao':
   return num1 * num2
   case 'divisao':
   if(num2 === 0){
    return 'Erro na divisao'
   }
return num1 / num2

default: 
return 'Operacao invalida'

}
}
console.log(operacaoMatematica('soma', 10, 5))
console.log(operacaoMatematica('subtracao', 10, 5))


function processamentoRequisicao(requisicao){
const metodo = requisicao.metodo
const conteudo = requisicao.conteudo

switch (metodo){
    case 'GET':
        return 'requisicao GET recebida'
        case 'POST':
        if (conteudo && conteudo.trim() !== ''){
            return'Requisicao POST com dados validos'
        }else {
            return'requisicao POST sem dados'
        }
default:
    return 'Metodo não suportado'

}
}
console.log(processamentoRequisicao({"metodo": "POST", "conteudo": "" }))
console.log(processamentoRequisicao({"metodo": "GET", "conteudo": "" }))


function jogoPedraPapelTesoura(jogador1, jogador2){
if(jogador1 === jogador2){
    return 'Empate'
}
switch(jogador1){
case 'pedra':
    switch(jogador2){
        case 'tesoura':
            return 'Jogador1 venceu'
            default:
            return 'jogador2 venceu'
}
case 'papel':
    switch(jogador2){
        case 'pedra':
            return 'Jogador1 venceu'
            default:
            return 'jogador2 venceu'
    }
        case 'tesoura':
    switch(jogador2){
        case 'papel':
            return 'Jogador1 venceu'
            default:
            return 'jogador2 venceu'
    }
    default:
        return 'Jogada Invalida'
}
}
console.log(jogoPedraPapelTesoura('pedra','tesoura'))
console.log(jogoPedraPapelTesoura('pedra','papel'))
console.log(jogoPedraPapelTesoura('papel','tesoura'))

*/
