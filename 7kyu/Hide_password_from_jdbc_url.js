function hidePasswordFromConnection(urlString){
  let split = urlString.split('password='), x = '';
  if (split[1].includes('user=')) {
    let again = split[1].split('&user=');
    for (var i = 0; i < again[0].length; i++) {
      x += '*';
    }
    again[0] = x;
    again = again.join('&user=');
    return split[0] + 'password=' + again;
  }
  for (var i = 0; i < split[1].length; i++) {
    x += '*'
  }
  return split[0] + 'password=' + x;
}
