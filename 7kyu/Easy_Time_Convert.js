function timeConvert(num) {
  if (num <= 0) {
    return '00:00';
  } if (num < 10) {
    return '00:0' + num;
  } if (num < 60) {
    return '00:' + num;
  } if ((num % 60).toString().length < 2) {
    if (Math.floor(num / 60).toString().length < 2) {
      return '0' + Math.floor(num / 60) + ':0' + num % 60;
    } return Math.floor(num / 60) + ':0' + num % 60;
  } if (Math.floor(num / 60).toString().length < 2) {
    return '0' + Math.floor(num / 60) + ':' + num % 60;
  } return Math.floor(num / 60) + ':' + num % 60;
}
