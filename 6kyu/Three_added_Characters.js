// Average runtime: 0.557ms
function addedChar(s1, s2){
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  let i = 0;
  while(s1[i] == s2[i]) {
    i++;
  }
  return s2[i];
}
