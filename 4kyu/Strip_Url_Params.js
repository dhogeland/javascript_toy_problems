function stripUrlParams(url, paramsToStrip){
  if (!url.includes('?')) {
    return url;
  }
  let split = url.split('?'), query = split[1], good = '';
  query = query.split('&');
  for (var i = 0; i < query.length; i++) {
    query[i] = query[i].split('=');
    if (query[i][0] != paramsToStrip) {
      if (!good.includes(query[i][0])) {
        if (i > 0) {
          good += '&' + query[i].join('=');
        } else {
          good += '?' + query[i].join('=');
        }
      }
    }
  }
  return split[0] + good;
}
