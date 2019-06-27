function smaller(nums) {
  let x = [];
  for (var i = 0; i < nums.length; i++) {
    x[i] = 0;
    for (var j = i + 1; j < nums.length; j++) {
      x[i] = nums[i] > nums[j] ? x[i] + 1 : x[i];
    }
  }
  return x;
}
