function pattern(n){
 var output="";
 for (var i = 1; i <= n; i++) {
   for (var j = n; j >= i; j--) {
     output += j;
   }
   if (i != n) output += '\n';
 }
 return output;
}
