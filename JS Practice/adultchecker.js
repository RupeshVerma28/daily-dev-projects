function checkAdult(age) {
  if (age >= 18) {
    return "You can Vote";
  } else {
    return "Sorry You Cant Vote";
  }
}
console.log(checkAdult(21));
