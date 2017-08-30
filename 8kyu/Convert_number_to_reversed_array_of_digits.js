function digitize(n) {
  n =  n.toString().split('').reverse()
   for (var i = 0; i < n.length; i++) {
     n[i] = parseInt(n[i])
   }
   return n;
}
