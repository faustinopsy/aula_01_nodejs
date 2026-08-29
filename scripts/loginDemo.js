import { Usuario } from '../src/dominio/Usuario.js'
 
const professor = new Usuario('professor', '1234')
 
console.log(professor.autenticar('1234'))   // true
console.log(professor.autenticar('0000'))   // false
 
// autenticar e um metodo: uma funcao que mora dentro
// da classe e conhece o this daquela instancia.
