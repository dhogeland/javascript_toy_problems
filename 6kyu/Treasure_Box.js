function findNum(x){
  x = x.split(',').join('').split(' ').join('').toLowerCase();
  if (x.includes('one')) { return 1};
  if (x.includes('two')) { return 2};
  if (x.includes('three')) { return 3};
  if (x.includes('four')) { return 4};
  if (x.includes('five')) { return 5};
  if (x.includes('six')) { return 6};
  if (x.includes('seven')) { return 7};
  if (x.includes('eight')) { return 8};
  if (x.includes('nine')) { return 9};
  if (x.includes('ten')) { return 10};
  return 0;
}
