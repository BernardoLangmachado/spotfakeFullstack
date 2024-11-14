import  Express  from "express"
import { criarTabelas } from "./db.js"
import cors from "cors"
import { rotas } from './roteamento/rotas_autenticacao.js'
import { rotasUser } from "./roteamento/rota_users.js"

const app = Express()
app.use(Express.json())
app.use(cors())

// criarTabelas()
app.use('/autenticacao', rotas)
app.user('/usuario', rotasUser)
app.listen(8000)