let output = document.getElementById("output");

function appendToOutput(value) {
  output.value += value;
}

function clearOutput() {
  output.value = "";
}

function calculate() {
  output.value = eval(output.value);
}
