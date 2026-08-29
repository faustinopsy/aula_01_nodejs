import { Router } from 'express'
import { candidatos } from '../dados/candidatos.js'
 
const router = Router()
 
router.get('/pagina/candidatos', (req, res) => {
  const linhas = candidatos.map((c) => `<li>${c.numeroUrna} - ${c.nome}</li>`).join('')
 
  res.send(`
    <html>
      <body>
        <h1>Candidatos</h1>
        <ul>${linhas}</ul>
      </body>
    </html>
  `)
})
 
export default router
