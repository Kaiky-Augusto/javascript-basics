function calculate(operator) {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Informe dois números válidos.";
    return;
  }

  let calculation;

  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result.textContent = "Não é possível dividir por zero.";
        return;
      }
      calculation = num1 / num2;
      break;
  }

  result.textContent = `Resultado: ${calculation}`;
}
