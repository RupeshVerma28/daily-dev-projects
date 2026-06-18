function loanChecker(score) {
  if (score >= 500) {
    return "Your Are Eligible For Loan ";
  } else {
    return "sorry You Are not eligible for loan ";
  }
}
console.log(loanChecker(500));
