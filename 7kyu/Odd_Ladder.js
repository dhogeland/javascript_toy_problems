function pattern(n){
 var output=[];
   for (var i = 1, j = 0, k = 1; i <= n; i += 2) {
     output[j] = i + '';
     while (k < i) {
       output[j] += i;
       k++;
     }
     j++;
     k = 1;
   }
 return output.join('\n');
}
