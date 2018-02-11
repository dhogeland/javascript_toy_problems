function solution(nums){
  if (!nums || nums.length < 1) {
    return [];
  }
  let arr = [], count = nums.length;
  for (var i = 0; i < count; i++) {
    arr.push(Math.min(...nums));
    nums.splice(nums.indexOf(Math.min(...nums)), 1);
  }
  return arr;
}
