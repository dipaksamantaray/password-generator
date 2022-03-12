let pwEl = document.getElementById("pw");
let copyEl = document.getElementById("copy");
let lenEl = document.getElementById("len");
let upperEl = document.getElementById("upper");
let lowerEl = document.getElementById("lower");
let numberEl = document.getElementById("number");
let symbolEl = document.getElementById("symbol");
let generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;
  let password = "";
  if (upperEl.checked) {
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }
  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }
  pwEl.innerText = password;
}
function generateX() {
  const xs = [];

  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});
