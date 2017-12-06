function solve(a,b){
 let str = '';
 a.split('').map(x => {
   if (!b.includes(x)) {
     str += x;
   }
 })
 b.split('').map(y => {
   if (!a.includes(y)) {
     str += y;
   }
 })
 return str;
};
