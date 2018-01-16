function pairs(ar){
 let total = 0, i = 0;
 while (ar[i] && ar[i + 1] || ar[i] == 0 || ar[i + 1] == 0) {
   if (ar[i] == ar[i + 1] + 1 || ar[i] == ar[i + 1] - 1) {
     total += 1;
   }
   i += 2;
 }
 return total;
};
