function correct(string)
{
	string = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (string[i] == '0') {
      string[i] = 'O';
    } else if (string[i] == '1') {
      string[i] = 'I';
    } else if (string[i] == '5') {
      string[i] = 'S';
    }
  }
  return string.join('');
}
