function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let x = dolphin ? sharkDistance / (sharkSpeed / 2) : sharkDistance / sharkSpeed,
      y = pontoonDistance / youSpeed;
  return x > y ? 'Alive!' : 'Shark Bait!';
}
