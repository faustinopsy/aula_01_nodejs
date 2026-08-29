import express from 'express'

const app = express()

// função callback
app.get('/busca', (req, res) => {
    console.log(req)
  res.send('olá mundo')
})

app.get('/busca/:id', (req, res) => {
    const numero = req.params.id
    console.log(numero)
    const mensagem = ` O número requisitado é: ${numero} `
  res.send(mensagem)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://127.0.0.1:3000')
})
