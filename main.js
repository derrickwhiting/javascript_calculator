function lastAnswer(){
  var element = document.getElementById('output');
  if (element.innerHTML == '') {
    return ''
  } else {
  return parseFloat(document.getElementById('output').innerHTML);
  }
}

function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  return [inputOne, inputTwo]
}

function setOutput(sum){
  var lastOutput = lastAnswer();
  document.getElementById('output').innerHTML = sum;
  document.getElementById('last_answer').innerHTML = lastOutput;
}

function add(){
  var inputs = getInputs()
  var sum = inputs[0] + inputs[1];
  setOutput(sum)
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  setOutput(sum);
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  setOutput(sum);
}

function multiplyg(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  setOutput(sum);
}