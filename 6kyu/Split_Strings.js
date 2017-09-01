function solution(str){
   if (str.length % 2 != 0) {
     str = str + '_'
   }
   let split = str.split('');
   let myArray = []
   for (var i = 0; i < split.length; i += 2) {
     myArray.push(split[i] + split[i + 1])
   }
   return myArray;
}
