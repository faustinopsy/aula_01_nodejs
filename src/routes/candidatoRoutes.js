import { Router } from 'express'
import { candidatos } from '../dados/candidatos.js'
import { Candidato } from '../dominio/Candidato.js'
 
const ana = new Candidato(1, 'Ana Souza', '10')
console.log(ana.nome)   // Ana Souza
try {
  const invalido = new Candidato(2, 'Al', '20')
  console.log('cadastrado:', invalido)
} catch (erro) {
  console.log('falhou:', erro.message)
}

const router = Router()
router.get('/candidatos', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Eleicao</h1>
        <p>Bem vindo</p>
      </body>
    </html>
  `)
})
 
router.get('/candidatos/:numero', (req, res) => {
  const numero = req.params.numero
  const encontrado = candidatos.find((c) => c.numeroUrna === numero)
  if(!encontrado){
    res.json({"mensagem": "não encontrado"})
  }
  res.json(encontrado)
})
 
export default router
