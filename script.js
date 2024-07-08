var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
function addition(){
var result = Number(number1.value) + Number(number2.value);
document.getElementById("result").innerHTML = result;
}
function extraction(){
var result = Number(number1.value) - Number(number2.value);
document.getElementById("result").innerHTML = result;
}
function multiplication(){
    var result = Number(number1.value) * Number(number2.value);
    document.getElementById("result").innerHTML = result;
}
function division(){
    var result = Number(number1.value) / Number(number2.value);
    document.getElementById("result").innerHTML = result;
}