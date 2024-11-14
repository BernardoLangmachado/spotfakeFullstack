import express from 'express'
import {pegaperfil, update} from 'controlador_usuarios.js'

const rotasUser = express.Router()

rotasUser.get('/pegarperfil/:id',pegaperfil)
rotasUser.patch('/update/:id',update)

export {rotasUser} 