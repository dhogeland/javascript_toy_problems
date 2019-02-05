function searchNames( logins ){
  return logins.filter(a => a[0][a[0].length - 1] == '_');
}
