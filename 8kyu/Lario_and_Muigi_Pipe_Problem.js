function pipeFix(numbers){
  let max = Math.max(...numbers),
      min = Math.min(...numbers);
  for (var i = min; i <= max; i++) {
    if (!numbers.includes(i)) {
      numbers.push(i);
    }
  }
  return numbers.sort((a,b) => a - b);
}
