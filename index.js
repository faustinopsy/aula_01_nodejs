import express from 'express'
import candidatoRoutes from './src/routes/candidatoRoutes.js'
import paginaRoutes from './src/routes/paginaRoutes.js'
import paginaInicial from './src/routes/paginaInicial.js'
import path from 'node:path'
const app = express()
// 1. qual motor de views usar
app.set('view engine', 'ejs')
// 2. em qual pasta estao os arquivos de pagina
app.set('views', path.resolve('src/views'))
// 3. pasta de arquivos publicos: css, imagem, js do navegador
app.use(express.static('public'))

app.use(candidatoRoutes)
app.use(paginaRoutes)
app.use(paginaInicial)
app.listen(3000, () => {
  console.log('Servidor rodando em http://127.0.0.1:3000')
})
