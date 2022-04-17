function calcularCircunferencia(){
    var raio = document.getElementById('raio').value
    document.getElementById('res1').innerHTML = `A circunferência é ${raio*2*3.14}`
}

function calcularArea(){
    var raio = document.getElementById('raio2').value
    document.getElementById('res2').innerHTML = `A área é ${raio**2*3.14}`
}