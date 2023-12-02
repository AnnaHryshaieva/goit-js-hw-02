function checkForSpam(message) {
  const spam1 = 'spam';
  const spam2 = 'sale';
  if (
    message.toLowerCase().includes(spam1) ||
    message.toLowerCase().includes(spam2)
  ) {
    return true;
  }
  return false;
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
