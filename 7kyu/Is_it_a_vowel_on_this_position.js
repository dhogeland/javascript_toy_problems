function checkVowel(string, position) {
  let split = string.split('');
  return 'aeiouAEIOU'.includes(split[position]);
};
