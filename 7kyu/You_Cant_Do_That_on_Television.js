function bucketOf(str) {
  str = str.toLowerCase();
  return (str.includes('water') || str.includes('wet') || str.includes('wash')) && (str.includes("i don't know") || str.includes('slime')) ? 'sludge' : str.includes('water') || str.includes('wet') || str.includes('wash') ? 'water' : str.includes("i don't know") || str.includes('slime') ? 'slime' : 'air';
}
