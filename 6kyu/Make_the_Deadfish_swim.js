// Return the output array, and ignore all non-op characters
function parse( data )
{
  let x = [], y = data.split(''), z = 0;
  for (var i = 0; i < y.length; i++) {
    if (y[i] == 'i') z++;
    if (y[i] == 's') z = z * z;
    if (y[i] == 'd') z--;
    if (y[i] == 'o') x.push(z);
  }
  return x;
}
