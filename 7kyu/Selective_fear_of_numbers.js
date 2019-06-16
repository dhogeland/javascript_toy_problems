var AmIAfraid = function(day, num){
  switch(day) {
    case 'Monday':
      return num === 12;
      break;
    case 'Tuesday':
      return num > 95;
      break;
    case 'Wednesday':
      return num === 34;
      break;
    case 'Thursday':
      return num === 0;
      break;
    case 'Friday':
      return num % 2 === 0;
      break;
    case 'Saturday':
      return num === 56;
      break;
    case 'Sunday':
      return num === 666 || num === -666;
      break;
  }
}
