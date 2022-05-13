var array = {
    dinheiro: [],
    operacao: [],
    hora: [],
    saldo: [] 
}
var data = new Date()
var hora = ''
var operacao = ''
var saldo = 10000.00; //Float
var nome = ''		

function usuario(){
    nome = window.prompt('Me diz o seu nome.')
    window.alert(`Olá ${nome}, é um prazer ter você aqui`)
    inicio()
}

function inicio() {
    
    var escolha = parseInt(prompt(`${nome} selecione uma opção que você deseja realizar: 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferêrencia 6.) Sair`));

    switch(escolha){
        case 1:
            senha()
            ver_saldo()
            break
        case 2:
            senha()
            ver_extrato()
            break
        case 3:
            senha()
            fazer_saque()
            break
        case 4:
            fazer_deposito()
            break
        case 5:
            senha()
            usuario_conta()
            break
        case 6:
            sair()
            break
        default:
            erro()

    }
}		

function senha(){
    var password = parseInt(window.prompt(`Digite sua senha`))
    if(password == 3589 ){
        window.alert(`Senha correta`)
    }else{
        window.alert(`Senha incorreta, Digite ela novamente.`)
        senha()
    }
}

function ver_saldo() {
    alert(`Seu saldo atualizado é:  ${saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number -> Isso é um não-número?
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número!');
        fazer_deposito();
    }else if( deposito <= 0 ){
        naoAutorizada()
        fazer_deposito()
    }else {
        operacao = ' + deposito'
        hora = `${data.getHours()}:${data.getMinutes()}`
        saldo = saldo + deposito;
        array.dinheiro.push(deposito)
        array.operacao.push(operacao)
        array.hora.push(hora)
        array.saldo.push(saldo)
        //saldo += deposito; 

        ver_saldo();
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
    }else if(saque > saldo || saque <= 0){
        naoAutorizada()
        fazer_saque()
    }else {
        saldo -= saque;

        operacao = ' - saque'
        hora = `${data.getHours()}:${data.getMinutes()}`
        array.dinheiro.push(saque)
        array.operacao.push(operacao)
        array.hora.push(hora)
        array.saldo.push(saldo)
        
        ver_saldo();
    }
}

function usuario_conta(){
    var conta = parseInt(prompt(`Conta que você deseja fazer a transferência`))
    if (isNaN(conta) || conta === ''){
        window.alert(`Dados incorretos`)
        naoAutorizada()
        usuario_conta()
    }else{
        fazer_transferencia()
    }
}

function fazer_transferencia(){
    var transferencia = parseFloat(prompt('Qual o valor para transferência?'));
    if (isNaN(transferencia) || transferencia === '') {
        alert('Por favor, informe um número:');
        fazer_transferencia()
    }else if(transferencia > saldo || transferencia <= 0){
        naoAutorizada()
        fazer_transferencia()
    }else {
        saldo -= transferencia;

        operacao = ' - tranferencia'
        hora = `${data.getHours()}:${data.getMinutes()}`
        array.dinheiro.push(transferencia)
        array.operacao.push(operacao)
        array.hora.push(hora)
        array.saldo.push(saldo)
        
        ver_saldo();
    }
}

function ver_extrato(){
        
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    
    for(var c = 0; c < array.operacao.length; c++){
        if(array.operacao[c] == ' + deposito'){
            res.innerHTML += `<p class='positivo'> Dinheiro: +${array.dinheiro[c].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} , Operação: ${array.operacao[c]} , Hora: ${array.hora[c]} , Saldo: ${array.saldo[c].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </p>`
        }else{
            res.innerHTML +=`<p class='negativo'> Dinheiro: -${array.dinheiro[c].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} , Operação: ${array.operacao[c]} , Hora: ${array.hora[c]} , Saldo: ${array.saldo[c].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </p>`
        }
        
    }
    res.innerHTML += `<h2>Saldo da conta é ${saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>`
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function naoAutorizada(){
    window.alert(`Operação não autorizada`)
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.alert(`${nome}, foi um prazer ter você por aqui!`)
        window.close();
    } else {
        
        inicio();
    }
}

usuario();
