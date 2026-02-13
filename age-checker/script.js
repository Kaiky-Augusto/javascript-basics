const form = document.getElementById("ageForm");
const birthYearInput = document.getElementById("birthYear");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAge();
});

function checkAge() {
  const birthYear = Number(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  result.textContent = "";
  result.style.color = "";

  if (!birthYear) {
    result.textContent = "Informe um ano válido.";
    result.style.color = "red";
    return;
  }

  if (birthYear > currentYear) {
    result.textContent = "Ano de nascimento não pode ser no futuro.";
    result.style.color = "red";
    return;
  }

  const age = currentYear - birthYear;

  if (age < 18) {
    result.textContent = `Você tem ${age} anos. Menor de idade.`;
    result.style.color = "orange";
  } else {
    result.textContent = `Você tem ${age} anos. Maior de idade.`;
    result.style.color = "green";
  }
}
