function solve(s){
 if (s == s.split('').reverse().join('')) {
   return 'OK';
 } else if (s.slice(1) == s.slice(1).split('').reverse().join('')) {
   return 'remove one';
 }
 let x = s.split('')
 for (var i = 1; i < s.length; i++) {
   if (s.slice(0, i) + s.slice(i + 1) == (s.slice(0, i) + s.slice(i + 1)).split('').reverse().join('')) {
     return 'remove one';
   }
 }
 return 'not possible';
};
