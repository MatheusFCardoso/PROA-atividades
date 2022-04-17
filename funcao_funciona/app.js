//Questão 1

function verExercicio(){
    document.getElementById('exercicio').innerHTML = `<form>
    <label>Qual é a idade do seu cachorro ? <input type="number" id="idade"></label>
    <input type="button" value="Calcular a idade do seu PET" onclick="calcularIdadePet()">
</form>
<div id="res" class='res'></div>`
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "fecharExercicio()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio(){
    document.getElementById('exercicio').innerHTML = ``
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "verExercicio()")
    botao.innerHTML = `Ver exércicio`
}

function calcularIdadePet(){
    var idade = document.getElementById('idade').value
    if(idade <= 0){
        document.getElementById('res').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser VAZIO, ZERO ou menor que zero.</p>`  
    }else{
        document.getElementById('res').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos!</p>`
    }
}

//Questão 2

function verExercicio1(){
    document.getElementById('exercicio1').innerHTML = `<form>
    <label>Qual é a idade do seu cachorro ? <input type="number" id="idade1"></label>
    <label>Qual é o nome do seu pet ? <input type="text" id="nome"></label>
    <input type="button" value="Calcular a idade do seu PET" onclick="calcularIdadePet2()">
</form>
<div id="res1" class='res'></div>`

    var botao = document.getElementById('botao1')
    botao.setAttribute('onclick', "fecharExercicio1()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio1(){
    document.getElementById('exercicio1').innerHTML = ``
    var botao = document.getElementById('botao1')
    botao.setAttribute('onclick', "verExercicio1()")
    botao.innerHTML = `Ver exércicio`
}

var baleia = 1.3

function calcularIdadePet2(){
    var idade1 = document.getElementById('idade1').value
    var nome = document.getElementById('nome').value
    
    if(idade <= 0 && nome == ''){
        document.getElementById('res1').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser, ZERO. o campo de nome tâmbem não pode está vazio.</p>`  
    }else{
        document.getElementById('res1').innerHTML = `<p>${nome} tem ${idade1*7} anos em anos de verdade! Um(a) baleia tem uma relação de ${baleia} anos de baleia para cada 1 ano humano"</p>`
    }
}

//Questão 3

function verExercicio2(){
    document.getElementById('exercicio2').innerHTML = `<form>
    <label>Qual sua idade ? <input type="number" id="idade2"></label>
    <label>Quantidade de lanches por dia ? <input type="number" id="lanche"></label>
    <input type="button" value="Calcula a quantidade consumida para o resto da vida" onclick="calcularLanche()">
</form>  
<div id="res2" class='res'>`

    var botao = document.getElementById('botao2')
    botao.setAttribute('onclick', "fecharExercicio2()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio2(){
    document.getElementById('exercicio2').innerHTML = ``
    var botao = document.getElementById('botao2')
    botao.setAttribute('onclick', "verExercicio2()")
    botao.innerHTML = `Ver exércicio`
}

var max = 75

function  calcularLanche(){
    var idade2 = document.getElementById('idade2').value
    var lanche = document.getElementById('lanche').value
    document.getElementById('res2').innerHTML = `Você precisará de ${(max - idade2)* lanche * 365 } para durar até ${max} ANOS DE IDADE`
    
}

//Questão 4

function verExercicio3(){
    document.getElementById('exercicio3').innerHTML = `<form>
    <label>Qual é o raio do circulo ? <input type="number" id="raio"></label>
    <input type="button" value="Calcular Circunferência" onclick="calcularCircunferencia()">
</form>
<div id="res3" class='res'>`

    var botao = document.getElementById('botao3')
    botao.setAttribute('onclick', "fecharExercicio3()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio3(){
    document.getElementById('exercicio3').innerHTML = ``
    var botao = document.getElementById('botao3')
    botao.setAttribute('onclick', "verExercicio3()")
    botao.innerHTML = `Ver exércicio`
}

function calcularCircunferencia(){
    var raio = document.getElementById('raio').value
    document.getElementById('res3').innerHTML = `A circunferência é ${raio*2*3.14}`
}

//Questão 5

function verExercicio4(){
    document.getElementById('exercicio4').innerHTML = `<form>
    <label>Qual é o raio do circulo ? <input type="number" id="raio2"></label>
    <input type="button" value="Calcular a Área" onclick="calcularArea()">
</form>
<div id="res4" class='res'>

</div>`

    var botao = document.getElementById('botao4')
    botao.setAttribute('onclick', "fecharExercicio4()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio4(){
    document.getElementById('exercicio4').innerHTML = ``
    var botao = document.getElementById('botao4')
    botao.setAttribute('onclick', "verExercicio4()")
    botao.innerHTML = `Ver exércicio`
}

function calcularArea(){
    var raio = document.getElementById('raio2').value
    document.getElementById('res4').innerHTML = `A área é ${raio**2*3.14}`
}

//Questão 6

function verExercicio5(){
    document.getElementById('exercicio5').innerHTML = `<form>
    <label>Temperatura em Celsius <input type="number" id="celsius"></label>
    <input type="button" value="Calcular" onclick="celsiusFahrenheit()">
</form>
<div id="res5" class='res'>

</div>`

    var botao = document.getElementById('botao5')
    botao.setAttribute('onclick', "fecharExercicio5()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio5(){
    document.getElementById('exercicio5').innerHTML = ``
    var botao = document.getElementById('botao5')
    botao.setAttribute('onclick', "verExercicio5()")
    botao.innerHTML = `Ver exércicio`
}

function celsiusFahrenheit(){
    var celsius = document.getElementById('celsius').value
    document.getElementById('res5').innerHTML = `${celsius}° C é igual a ${celsius*1.8+32}° F`
    console.log(celsius)
}

//Questão 7

function verExercicio6(){
    document.getElementById('exercicio6').innerHTML = `<form>
    <label>Temperatura em Fahrenheit <input type="number" id="fahrenheit"></label>
    <input type="button" value="Calcular" onclick="fahrenheitCelsius()">
</form>
<div id="res6" class='res'>
    
</div>`

    var botao = document.getElementById('botao6')
    botao.setAttribute('onclick', "fecharExercicio6()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio6(){
    document.getElementById('exercicio6').innerHTML = ``
    var botao = document.getElementById('botao6')
    botao.setAttribute('onclick', "verExercicio6()")
    botao.innerHTML = `Ver exércicio`
}

function fahrenheitCelsius(){
    var fahrenheit = document.getElementById('fahrenheit').value
    document.getElementById('res6').innerHTML = ` ${fahrenheit}° F é igual a ${(fahrenheit-32)/1.8}° C`
}