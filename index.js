function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacion(){
    var opera = document.getElementById('resultado').value;
    var result = parseFloat(opera);
    if(isNaN(result)){
        document.getElementById('resultado').value = "Sin Operacion";
    } else{
        document.getElementById('resultado').value = eval(opera);
    }
}


function resetear(){
    document.getElementById("resultado").value = "=";
}