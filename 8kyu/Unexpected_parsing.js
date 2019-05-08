function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  var x = { status: msg };
  return x;
}
