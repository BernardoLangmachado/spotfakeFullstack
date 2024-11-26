import express from 'express'
import {pegaperfil, update, trocaSenha, trocar_img} from '../controlador/controlador_usuarios.js'


const rotasUser = express.Router()

rotasUser.get('/pegarperfil/:id',pegaperfil)
rotasUser.patch('/update/:id',update)
rotasUser.post('/senha',trocaSenha)
rotasUser.post('/trocar-img/:id', trocar_img)

export {rotasUser} 