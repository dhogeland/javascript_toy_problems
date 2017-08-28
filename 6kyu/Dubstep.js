function songDecoder(song){
 song = song.split("WUB");
 let myArray = [];
  for (var i = 0; i < song.length; i++) {
    if (song[i] !== '') {
      myArray.push(song[i]);
    }
  }
  return myArray.join(" ");
}
