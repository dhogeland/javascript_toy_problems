function excludingVatPrice(price){
  return price || price === 0 ? +(price - (((price / 7.6666666)).toFixed(2))).toFixed(2) : -1;
}
