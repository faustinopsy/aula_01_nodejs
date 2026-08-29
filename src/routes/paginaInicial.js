import { Router } from 'express'
import { candidatos } from '../dados/candidatos.js'
 
const router = Router()
 
router.get('/', (req, res) => {
  res.render('home', { titulo: 'Eleicao', candidatos })
})
 
export default router
