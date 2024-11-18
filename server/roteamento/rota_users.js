import express from 'express'
import {pegaperfil, update, trocaSenha} from 'controlador_usuarios.js'

const rotasUser = express.Router()

rotasUser.get('/pegarperfil/:id',pegaperfil)
rotasUser.patch('/update/:id',update)
rotasUser.post('/senha',trocaSenha)

export {rotasUser} 