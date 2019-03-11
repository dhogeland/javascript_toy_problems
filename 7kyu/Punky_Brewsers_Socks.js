function getSocks(name, socks) {
  socks.sort();
  return name === 'Punky' ? socks[0] === socks[socks.length -1] ? [] : [socks[0], socks[socks.length -1]] : socks[0] == socks[1] ? [socks[0], socks[1]] : [];
}
