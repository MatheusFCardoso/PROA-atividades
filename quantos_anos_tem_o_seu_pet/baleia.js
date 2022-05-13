var baleia = 1.3

function calcularIdadePet(){
    var idade = document.getElementById('idade').value
    var nome = document.getElementById('nome').value
    
    if(idade <= 0 && nome == ''){
        document.getElementById('res').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser, ZERO. o campo de nome tâmbem não pode está vazio.</p>`  
    }else{
        document.getElementById('res').innerHTML = `<p>${nome} tem ${idade*7} anos em anos de verdade! Um(a) baleia tem uma relação de ${baleia} anos de baleia para cada 1 ano humano"</p>`
    }
}