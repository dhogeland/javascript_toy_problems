function tripledouble(num1, num2) {
  let threes = 0,
      theNumber = 0,
      nums1 = (num1 + '').split(''),
      nums2 = (num2 + '').split('');
  for (var i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums1[i + 1]) {
      threes++;
      if (threes == 2) {
        theNumber = nums1[i];
        for (var j = 0; j < nums2.length; j++) {
          if (nums2[j] === nums2[j +1]) {
            if (nums2[j] === theNumber) {
              return 1;
            }
          }
        }
      }
    } else {
      threes = 0;
    }
  }
  return 0;
}
