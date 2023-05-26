import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
//variaveis
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = calculateIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notNumber(value) {
  return isNaN(value) || value == ""
}

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

//evento de nome é input
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
