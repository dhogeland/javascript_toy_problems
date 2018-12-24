function groupCheck(s){
 let x = s.length;
 while (x > 0 && s) {
   s = s.split('[]').join('').split('{}').join('').split('()').join('')
   x--;
 }
  return s == '';
}
