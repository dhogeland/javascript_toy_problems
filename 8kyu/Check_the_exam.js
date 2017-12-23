function checkExam(array1, array2) {
  let total = 0;
 for (var i = 0; i < array1.length; i++) {
   if (array1[i] == array2[i]) {
     total += 4;
   } else if (array2[i] == '') {
     total += 0;
   } else {
     total -= 1;
   }
 }
 return total > 0 ? total : 0;
}
