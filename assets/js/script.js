function borrarVisor() {
  document.getElementById("visor").value = "";
}

function agregarCaracter(num) {
  if (calculado) {
    borrarVisor();
    calculado = false;
  }
  document.getElementById("visor").value += num;
}

function mostrarEnVisor(valor) {
  document.getElementById("visor").value = valor;
}

function fijarOperacion(operando) {
  operacion = operando;
  valor1 = parseInt(document.getElementById("visor").value);
  borrarVisor();
}

function calcular() {
  valor2 = parseInt(document.getElementById("visor").value);
  switch (operacion) {
    case "division":
      mostrarEnVisor(valor1 / valor2);
      break;
    case "multiplicacion":
      mostrarEnVisor(valor1 * valor2);
      break;
    case "resta":
      mostrarEnVisor(valor1 - valor2);
      break;
    case "suma":
      mostrarEnVisor(valor1 + valor2);
      break;
    default:
      console.log("calcular(): Default");
      break;
  }
  calculado = true;
}

let valor1;
let valor2;
let operacion;
let calculado;
