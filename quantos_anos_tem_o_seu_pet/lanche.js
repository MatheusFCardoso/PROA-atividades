var max = 75

function  calcularLanche(){
    var idade = document.getElementById('idade').value
    var lanche = document.getElementById('lanche').value
    document.getElementById('res').innerHTML = `Você precisará de ${(max - idade)* lanche * 365 } para durar até a idade ${max}`
    
}