function pattern(n){
 var output="";
   for (var i = 1; i <= n; i++) {
     output += (i +'').repeat(i);
     if (i != n) {
       output += '\n';
     }
   }
 return output;
}
