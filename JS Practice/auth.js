function userVerification(userid, userPass) {
  if (userid === 1234 && userPass === "admin") {
    return "Login Verify";
  } else {
    return "Login Fail ! (Wrong Password)";
  }
}
console.log(userVerification(1234, "admin"));
