function pattern(n){
 var output="";
 for (var i = n; i > 0; i--) {
   for (var j = n; j >= i; j--) {
     output += j;
   }
   output += i > 1 ? "\n" : "";
 }
 return output;
}
