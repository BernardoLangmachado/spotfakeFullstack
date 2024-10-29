import express from 'express'
import { resgistro, login } from '../controlador/controlador_autenticacao.js'

const rotas = express.Router()

rotas.post('/resgistro', resgistro)
rotas.post('/login', login )
export {rotas} 