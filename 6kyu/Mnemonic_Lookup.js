function mnemonicLookup(group, word) {
if (global[group] && global[group][word]) {
  return global[group][word];
 } if (global[group]) {
   return "You're onto something, but still quite far off.";
 }
 return 'There is no mnemonic for this.';
}
