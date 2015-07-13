var calBtn = document.getElementById('calculateBtn');

var calculate = function() {
  var firstNum = document.getElementById('num_one').value;
  var secNum = document.getElementById('num_two').value;

  var output = document.getElementById('answer');

  var quotient = firstNum / secNum;
  output.innerHTML = quotient;

  return quotient;

};

calBtn.onclick = calculate;
