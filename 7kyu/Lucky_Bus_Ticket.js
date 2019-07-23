function isLucky(ticket) {
  return ticket.length === 6 ? typeof +ticket === 'number' ? +ticket[0] + +ticket[1] + +ticket[2] === +ticket[3] + +ticket[4] + +ticket[5] : false : false;
}
