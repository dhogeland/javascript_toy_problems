function replaceAll(seq, find, replace) {
  return typeof seq === 'string' ? seq.split('').map((index) => index == find ? replace : index).join('') : seq.map((index) => index == find ? replace : index);
}
