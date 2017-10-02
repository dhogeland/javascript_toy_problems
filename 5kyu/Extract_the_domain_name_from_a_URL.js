function domainName(url){
  if (url.includes('//') && !url.includes('www')) {
    let firstSplit = url.split('//');
    let secondSplit = firstSplit[1].split('.')
    return secondSplit[0];
  }
  if (url.includes('www.')) {
    let firstSplit = url.split('.');
    return firstSplit[1];
  } else {
    let firstSplit = url.split('.');
    return firstSplit[0];
  }
}
