// Return an array
function buzzy(n)
{  let arr = [];
  for (var i = 1; i <= n; i++) {
    i % 15 == 0 ? arr.push('FizzBuzz') : i % 3 == 0 ? arr.push('Fizz') : i % 5 == 0 ? arr.push('Buzz') : arr.push(i);
  } return arr;
}
