function reverseIt(data){
  return typeof data === 'string' ? data.split('').reverse().join('') : typeof data === 'number' ? +data.toString().split('').reverse().join('') : data;
}
