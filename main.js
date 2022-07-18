let total = 0, i = 0, promedio = 0, control = "si", nota;


function sacarPromedio (num1, num2){
    let resultado = num1 / num2;
    return resultado;
}



while (control == "si"){
    nota = parseInt(prompt("Ingrese una nota : "));
    total = total+nota;
    i++;
    control = prompt ("Agregar otra nota? si-no");
}

promedio = sacarPromedio (total, i);
alert ("Su promedio es :" + promedio);

while (promedio>0){
    if (promedio < 7){
        alert("Desaprobado");
    };
    if ( 7 <= promedio && promedio<10){
        alert("Aprobado");
    };
    if(promedio == 10){
        alert("Aprobado y promocionado.")
    };
    promedio = 0;
}
