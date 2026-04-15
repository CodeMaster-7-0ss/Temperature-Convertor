function convertTemp() {
  let input = document.getElementById("tempInput").value.trim();
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    result.innerText = "⚠ Please enter a valid number!";
    return;
  }

  let temp = parseFloat(input);

  let celsius;
  if (from === "C") celsius = temp;
  else if (from === "F") celsius = (temp - 32) * 5/9;
  else if (from === "K") celsius = temp - 273.15;

  let output;
  if (to === "C") output = celsius;
  else if (to === "F") output = (celsius * 9/5) + 32;
  else if (to === "K") output = celsius + 273.15;

  result.innerText = `${temp}°${from} = ${output.toFixed(2)}°${to}`;
}

document.getElementById("tempInput").addEventListener("input", convertTemp);
