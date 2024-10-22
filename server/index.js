import  Express  from "express";
import { User, criarTabelas } from "./db.js";
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())
// criarTabelas()


app.post('/resgistro', async (req,res) => {
    const{nome, sobrenome, email, senha, dataNascimento} =req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve preencher todos os campos')
        return
    } 
    console.log(email)
    const userExiste = await User.findOne( {where: {email:email}})
    if(userExiste){
        res.send('Usuaruo ja existe')
        return
    }
    const senhaCripotografada = bcryptjs.hashSync(senha, 10)
    
    const teste = await User. create ({nome, sobrenome, email, senha, dataNascimento, senha:senhaCripotografada})
    res.send('user criado')

})

app.post('/login', async (req,res) => {
    const{ email, senha } = req.body
    if( !email || !senha ){
        res.send('voce deve preencher todos os campos')
        return
    } 
    const userExiste = await User.findOne( {where: {email:email}})
    if(!userExiste){
        res.send('este usuario não exeite')
        return
    }   
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if(!senhaValida){
        res.send('senha invalida')
        return
    }

    res.send('ok usuario logado')
})

app.listen(8000)

