import express from 'express'
import { resgistro, login, change_password } from '../controlador/controlador_autenticacao.js'

const rotas = express.Router()

rotas.post('/resgistro', resgistro)
rotas.post('/login', login )
rotas.put('/change-password/:id', change_password)
export {rotas} 