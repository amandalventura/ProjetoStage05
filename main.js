// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown')

//Funções
//Desafio I (refatoração)
function enter () {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
function handleTryClick(event) {
  event.preventDefault() //Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  //Desafio II (validação de números: 0 a 10) Fazendo com "if" e colocando alert
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
  alert("Por favor insira um número de 0 a 10!")
}
//Desafio III (validar obrigatóriedade de inserir um número)
if (Number(inputNumber.value) == '' ) {
  alert("O campo não pode ficar vazio. Por favor coloque algum número de 0 a 10.")
}
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""

  xAttempts++
  
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
