function celsiusFahrenheit(){
    var celsius = document.getElementById('celsius').value
    document.getElementById('res1').innerHTML = `${celsius}° C é igual a ${celsius*1.8+32}° F`
    console.log(celsius)
}

function fahrenheitCelsius(){
    var fahrenheit = document.getElementById('fahrenheit').value
    document.getElementById('res2').innerHTML = ` ${fahrenheit}° F é igual a ${(fahrenheit-32)/1.8}° C`
}

