import { User, criarTabelas } from "../db.js";
import bcryptjs from "bcryptjs"
import  jsonwebtoken from "jsonwebtoken"



const resgistro = async (req,res) => {
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

}

const login = async (req,res) => {
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

    const token = jsonwebtoken.sign(
        {"nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
        "email": userExiste.email,
        "status": userExiste.status
    },
    'chavecriptografiajwt',
    {expiresIn: 1000*60*60*24*30}
    )

    console.log(token)

    res.send({
        msg: "ok usuario logado",
        tokenJWT: token
    })
}

export {resgistro, login}