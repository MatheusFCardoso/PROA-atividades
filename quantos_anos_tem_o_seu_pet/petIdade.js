function calcularIdadePet(){
    var idade = document.getElementById('idade').value
    if(idade <= 0){
        document.getElementById('res').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser VAZIO, ZERO ou menor que zero.</p>`  
    }else{
        document.getElementById('res').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos!</p>`
    }
}