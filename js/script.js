// genaratePin
function genaratePin() {
  const pin = Math.round(Math.random() * 10000)
  const pinTostring = pin.toString().length
  if (pinTostring == 4) {
    return pin
  } else {
    return genaratePin()
  }
}

// displayPin
displayPin.value = genaratePin()
generatePinButton.addEventListener('click', () => {
  displayPin.value = genaratePin()
})

// calculator
calculator.addEventListener('click', (e) => {
  const number = e.target.innerText
  const previousNum = typedNumber.value
  if (!isNaN(number)) {
    const newNum = previousNum + number
    typedNumber.value = newNum
  } else if (number == 'C') {
    typedNumber.value = ''
  }
  if (number == '<') {
    const arrofNum = previousNum.split('')
    arrofNum.pop()
    const removeNum = arrofNum.join('')
    typedNumber.value = removeNum
  }
})

// veryfi pin
verifyPin.addEventListener('click', () => {
  const actionLefts = parseInt(actionLeft.innerText) - 1
  actionLeft.innerText = actionLefts
  if (actionLefts >= 0) {
    const genetatepin = displayPin.value
    const typedPin = typedNumber.value
    if (genetatepin == typedPin) {
      verifyPin.setAttribute('disabled', true)
      correct.style.display = 'block'
      incorrect.style.display = 'none'
    } else {
      incorrect.style.display = 'block'
      correct.style.display = 'none'
    }
  } else {
    alert('Try 15 minute leter')
    verifyPin.setAttribute('disabled', true)
  }
})
