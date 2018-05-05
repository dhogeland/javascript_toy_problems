function removeUrlAnchor(url){
  if (url.includes('#')) {
    let x = url.split('#');
    return x[0];
  }
  return url;
}
