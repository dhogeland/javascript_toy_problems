function insertDash(num) {
   let split = (num + '').split('');
   var myArray = [];
   for (var i = 0; i <= split.length; i++) {
     if (+split[i] % 2 != 0 && +split[i + 1] % 2 != 0 && +split[i + 1] && +split[i] != 0) {
      myArray.push(split[i], '-');
     } else {
      myArray.push(split[i])
     }
   }
   return myArray.join('');
}
