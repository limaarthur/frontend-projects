// Seleciona os elementos do DOM (campos do formulário e áreas de exibição)

const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

// Função que lida com o envio do formulário
const sendForm = (event) => {
  event.preventDefault() // Evita o comportamento padrão do formulário (recarregar a página)

  // Captura os valores preenchidos pelo usuário
  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value

  console.log({ apiKey, game, question })

  if () {

  }
}
form.addEventListener('submit', sendForm) // Adiciona um ouvinte de evento para interceptar o envio do formulário