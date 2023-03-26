idLetterAsignment();

function idLetterAsignment () {
const idNumber = prompt("Introduzca un DNI de ocho numeros")
const filter = "1234567890";
let idLetters = ["T","R","W","A","G","M","Y","I","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

for (i = 0; i < idNumber.length; i++) {
    if( filter.indexOf(idNumber.charAt(i)) != -1 && idNumber.length == 8){
        let resto = idNumber % 23;
        if (resto >=0 && resto <=22){
            let indexNumber = idLetters[resto];
            alert("La letra de su DNI es: " + indexNumber)
            break
        }
    }else {
    alert("Es un numero INVALIDO");
    alert("Pulse aceptar y repita la operacion")
    idLetterAsignment();
    }
}
}