
var number;
var operation;
var operationInCourse = false;
var operationHistory = "";
var i = 1;
var campo = "campo";


function main() {

    for (let e = 1; e <= 10; e++) {

        if (localStorage.getItem("campo" + e.toString()) != null) {
            let temp = campo + e.toString();
            document.getElementById('historial' + e.toString()).value = localStorage.getItem("campo" + e.toString()).toString();
            console.log(localStorage.getItem(temp) + " es el #" + e);

        }
        //localStorage.removeItem("campo"+e.toString());

    }

}


function toHistorial(operationHistory) {
    let element = 'historial' + i.toString();
    let postElement;
    let temp = campo + i.toString();
    let r;
    for (let e = 2; e > 9; e++) {
        r = i - 1;
        postElement = 'historial' + r;
        document.getElementById(postElement).value = document.getElementById(element).value;
    }
    localStorage.setItem(temp, operationHistory);

    document.getElementById(element).value = operationHistory.toString();
}

function addValue(number) {
    if (operationInCourse == true) {
        document.getElementById('calcMonitor').value = "";
        operationInCourse = false;
        operationHistory += " ";
    }
    if (number == ".") {
        if (document.getElementById('calcMonitor').value.includes(".")) {
            window.alert("No puede poner mas de un '.' ")
        }
        else {
            document.getElementById('calcMonitor').value += number;
            operationHistory += ".";
        }

    }
    else {
        document.getElementById('calcMonitor').value += number;
        operationHistory += number;

    }

}


function clearingMonitor() {
    document.getElementById('calcMonitor').value = "";
    operationHistory += "";



}

var value = 0;
var secondValue = 0;
function equal() {
    if (i > 10) i = 1;
    secondValue = parseFloat(document.getElementById('calcMonitor').value);
    operationInCourse = false;
    switch (operation) {
        case 'sum':
            value += secondValue;
            break;

        case 'rest':
            value -= secondValue;
            break;

        case 'div':
            value /= secondValue; m
            break;

        case 'mul':
            value *= secondValue;
            break;


    }
    if (value.toString() !== NaN) {
        if (operationHistory !== "") {
            document.getElementById('calcMonitor').value = value.toString();
            operationHistory += " = " + value.toString();
            console.log(operationHistory);
            toHistorial(operationHistory);
            operationHistory = "";
            i++;
        }
        else if (operationHistory === "") {
            document.getElementById('calcMonitor').value = value.toString();
            operationHistory += value.toString();
            console.log(operationHistory);
            toHistorial(operationHistory);
            operationHistory = "";
            i++;
        }
    }
    else {
        document.getElementById('calcMonitor').value = "Sintax Error";

    }
}


function quejarse() {
    window.alert('METETE TUS QUEJAS POR EL CULO 0.0');
}


function change() {
    let objButton = document.getElementById("changeButton");
    let objCalc = document.getElementById("calcContainer");
    let objHist = document.getElementById("histContainer");
    if (objButton.className === "changeButton-calc") {
        objButton.className = "changeButton-hist";
        objCalc.className = "calcContainer-hide "
        objHist.className = "historialContainer-show"
    }
    else if (objButton.className === "changeButton-hist") {
        objButton.className = "changeButton-calc";
        objCalc.className = "calcContainer-show"
        objHist.className = "historialContainer-hide"
    }
}




function retro() {

    document.getElementById('calcMonitor').value = document.getElementById('calcMonitor').value.slice(0, -1);
}

function clears() {

    document.getElementById('calcMonitor').value = "";
}

function sum() {

    value = parseFloat(document.getElementById('calcMonitor').value);
    //  document.getElementById('calcMonitor').value = "";
    console.log(value);
    operation = 'sum';
    operationHistory += " +";

    operationInCourse = true;

}
function rest() {

    value = parseFloat(document.getElementById('calcMonitor').value);
    //  document.getElementById('calcMonitor').value = "";
    console.log(value);
    operation = 'rest';
    operationHistory += " -";

    operationInCourse = true;

} function div() {

    value = parseFloat(document.getElementById('calcMonitor').value);
    //  document.getElementById('calcMonitor').value = "";
    console.log(value);
    operation = 'div';
    operationHistory += " /";
    operationInCourse = true;

} function mul() {

    value = parseFloat(document.getElementById('calcMonitor').value);
    //  document.getElementById('calcMonitor').value = "";
    console.log(value);
    operation = 'mul';
    operationHistory += " *";
    operationInCourse = true;

}
