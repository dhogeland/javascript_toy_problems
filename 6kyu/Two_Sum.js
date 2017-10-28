function twoSum(numbers, target) {
  let num;
  if (numbers[0] + numbers[1] == target) {
    return [0, 1];
  }
  for (var i = 0; i < numbers.length; i++) {
    num = numbers.slice((i + 1))
    if (num.includes(target - numbers[i])) {
      return [i, numbers.indexOf(num[num.indexOf(target - numbers[i])])]
    }
  }
}
