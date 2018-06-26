function bmi(weight, height) {
  let x = weight / (height * height);
  return x <= 18.5 ? 'Underweight' : x <= 25 ? 'Normal' : x <= 30 ? 'Overweight' : 'Obese';
}
