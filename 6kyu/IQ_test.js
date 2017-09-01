function iqTest(numbers){
  let split = numbers.split(' ');
  let odd = [];
  let even = [];
  for (var i = 0; i < split.length; i++) {
    if (split[i] % 2 == 0) {
      even.push(split[i])
    } else {
      odd.push(split[i])
    }
  }
  if (odd.length < even.length) {
    return (split.indexOf(odd[0]) + 1 )
  } else {
    return (split.indexOf(even[0]) + 1)
    }
}
