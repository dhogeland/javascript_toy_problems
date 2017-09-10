function validPhoneNumber(phoneNumber){
  return (phoneNumber[0] === '(' && phoneNumber[4] === ')' && phoneNumber[9] === '-' && phoneNumber.length === 14)
}
