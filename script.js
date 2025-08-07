function calculateBMI() 
{
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultBox = document.getElementById("result");
  if (!height || !weight || height <= 0 || weight <= 0) 
    {
    resultBox.innerHTML = "Please enter valid height and weight.";
    resultBox.style.background = "#ffcccb";
    resultBox.style.color = "#b22222";
    return;
   }
  const heightInM = height / 100;
  const bmi = (weight / (heightInM * heightInM)).toFixed(2);
  let category = "";
  let color = "";
  let message = "";
  if (bmi < 18.5) {
    category = "Underweight";
    color = "#fbc02d";
    message = "You might need to gain some weight. Stay healthy!";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal";
    color = "#66bb6a";
    message = "Great! You're in the healthy range. Keep it up!";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    color = "#ffa726";
    message = "Consider regular exercise and a balanced diet.";
  } else {
    category = "Obese";
    color = "#ef5350";
    message = "Health alert! Consult a doctor or nutritionist.";
  }
  resultBox.innerHTML = `Your BMI is <strong>${bmi}</strong><br>
                         Category: <strong>${category}</strong><br>
                         <em>${message}</em>`;
  resultBox.style.background = color;
  resultBox.style.color = "white";
}