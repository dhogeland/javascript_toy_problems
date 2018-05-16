// reverse the letters in the sentence
function reverser(sentence) {
	let x = sentence.split(' ');
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i].split('').reverse().join('');
  }
  return x.join(' ');
}
