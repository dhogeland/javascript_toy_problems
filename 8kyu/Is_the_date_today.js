function isToday(date) {
  return (date + '').substring(0,15) == (new Date() + '').substring(0,15);
}
