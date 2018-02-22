function solve(st,a,b){
 let mine = [], other = [];
 for (var i = 0; i < st.length; i++) {
   if (i >= a && i <= b) {
     other.push(st[i]);
     if (i == b || i == st.length - 1) {
      mine.push(other.reverse().join(''));
     }
   } else if (i < a) {
     mine.push(st[i]);
   } else {
     mine.push(st[i]);
   }
 }
 return mine.join('');
}
