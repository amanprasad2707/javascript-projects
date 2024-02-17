let passwdLength = 8;
const passwdRangeInputEl = document.getElementById('passwdRangeInput')
const passwdRangeValueEl = document.getElementById('passwdRangeValue')
const genBtn = document.getElementById('genBtn')
const passwdEl = document.getElementById('password')


let isUpperCase = false
let isNumbers = false
let isSymbols = false

passwdRangeInputEl.addEventListener('input', (e) => {
  passwdLength = +e.target.value
  passwdRangeValueEl.innerText = passwdLength;
})

const generatePasswd = (passwdLength) => {
  const lowercaseChars = 'qwertyuiopasdfghjklzxcvbnm'
  const uppercaseChars = isUpperCase ? 'QWERTYUIOPASDFGHJKLZXCVBNM' : '';
  const symbols = isSymbols ? '~!@#$%^&*()_+{}[]`<>?/.,' : '';
  const numbers = isNumbers ? '1234567890' : '';
  const passwdChars = lowercaseChars + uppercaseChars + numbers + symbols
  let passwd = ''
  for (let i = 0; i < passwdLength; i++) {
    const charIndex = Math.floor(Math.random() * passwdChars.length)
    passwd += passwdChars[charIndex]
  }
  return passwd;
}

genBtn.addEventListener('click', () => {
  const uppercaseCheckEl = document.getElementById('uppercase')
  const numbersCheckEl = document.getElementById('numbers')
  const symbolsCheckEl = document.getElementById('symbols')

  isUpperCase = uppercaseCheckEl.checked;
  isNumbers = numbersCheckEl.checked;
  isSymbols = symbolsCheckEl.checked;

  const passwd = generatePasswd(passwdLength)
  passwdEl.innerHTML = passwd;
})

passwdEl.addEventListener("click", (e) => {
  if (e.target.innerText.length > 0) {
    navigator.clipboard.writeText(passwdEl.innerText).then(() => {
      alert("Password Copied Successfully");
    }).catch((err) => {
      alert("Unable to copy password")
    })
  }
})