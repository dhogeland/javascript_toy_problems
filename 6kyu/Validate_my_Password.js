function validPass(password){
  if (password.length >= 3 && password.length <= 20) {
    if (!password.match(/[^a-z0-9]/gi) && password.match(/[a-z]/gi) && password.match(/[0-9]/g)) {
      return 'VALID';
    }
  }
  return 'INVALID';
}
