function addLength(str) {
 let x = str.split(' ');
   for (var i = 0; i < x.length; i++) {
     x[i] = x[i] + ' ' + x[i].length;
   }
   return x;
}
