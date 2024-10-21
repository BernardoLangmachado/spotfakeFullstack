import  Express  from "express";

const app = Express()
app.use(Express.json())

app.post('/resgistro', (req,res) => {
    const{nome, sobrenome, email, senha, dataNascimento} =req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve preencher todos os campos')
    } 
    console.log(email)
    res.send('user criado')
})

app.post('/login', (req,res) => {
    const{ email, senha, } =req.body
    if( !email || !senha ){
        res.send('voce deve preencher todos os campos')
        return
    } 
    res.send('Login feito')
})




app.listen(8000)

