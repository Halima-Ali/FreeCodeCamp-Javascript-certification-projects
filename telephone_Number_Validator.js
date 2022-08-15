function telephoneCheck(str) {
  // the regex- 4digits at the end, a space before it
  const myRegex=/^(1 ?)?(\d{3}|\(\d{3}\))[ -]?(\d{3})[ -]?(\d{4}$)/g;
  return myRegex.test(str);

}

console.log(telephoneCheck("(555) 555-5555"));