function aliasGen(f,l){
  return /[A-Z]/i.test(f[0]) && /[A-Z]/i.test(l[0]) ? firstName[f[0].toUpperCase()] + ' ' + surname[l[0].toUpperCase()] : "Your name must start with a letter from A - Z.";
}
