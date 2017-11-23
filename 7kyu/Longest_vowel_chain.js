function solve(s){
 let longest = 0, test = 0, i = 0;
 while (i < s.length) {
   if (s[i].match(/[aeiou]/)) {
     test += 1;
   } else {
     if (test > longest) {
       longest = test;
     }
     test = 0;
   }
   i++;
 }
 return longest;
}
