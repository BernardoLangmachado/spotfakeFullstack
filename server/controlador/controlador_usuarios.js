const contarUser = await User.findAll( {where: {email:email}})


const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    const confereuser = await User.findOne({where: {id: id}});
    if(!confereuser){
        return res.status(400).send({"erro": "Usuario n existe",});
    }

    if(data.senha) {
        const salt = await bcrypt.genSalt();
        data.senha = await bcrypt.hash(data.senha, salt);
    }

    const atualizeusaer = await User.update(
        data,
        {where: {id: id,}},
            );
    return res.status(200).json({ "status": "foi" });
}

const pegaperfil = async (req, res) => {
            const id = parseInt(req.params.id);
    
            const Usario = await User.findOne({
                     where: {id: id},
                    attributes: {exclude: ['senha']},});
                
            if(!Usurio){
                return res.status(400).send({"erro": "User n existe",});
            }
    
            return res.status(200).send({
                "status": "foi","data": Usuario});
}

export {pegaperfil, update}