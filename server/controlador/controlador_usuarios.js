import { User } from "../db.js";


const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    const confereuser = await User.findOne({ where: { id: id } });
    if (!confereuser) {
        return res.status(400).send({ "erro": "Usuario n existe", });
    }

    if (data.senha) {
        const salt = await bcrypt.genSalt();
        data.senha = await bcrypt.hash(data.senha, salt);
    }

    const atualizeUser = await User.update(
        data,
        { where: { id: id, } },
    );
    return res.status(200).json({ "status": "foi" });
}

const pegaperfil = async (req, res) => {
    const id = parseInt(req.params.id);

    const Usario = await User.findOne({
        where: { id: id },
        attributes: { exclude: ['senha'] },
    });

    if (!Usario) {
        return res.status(400).send({ "erro": "User n existe", });
    }

    return res.status(200).send({
        "status": "foi", "data": Usuario
    });
}

const trocaSenha = async (req, res) => {
    const info = req.body;
    const receba = await User.findOne({ where: { email: info.email } });
    if (!receba) {
        return res.send('este Usuario nao existe')
    }
    const senhacrypt = bcryptjs.hashSync(info.senha, 10)
    const atualiza = await User.update({ senha: senhacrypt }, { where: { email: info.email } })
    res.send('Atualizou')
}

const pegar_usuario = async (req, res) => {
    const user_id = req.params.id
    const user = await User.findOne({where:{id: user_id}})
    res.send(user)
}

const deletar_usuario = async (req, res) => {
    const user_id = req.params.id
    const user = await User.findOne({where:{id: user_id}})
    user.destroy()
    res.send('usuario deletado com sucesso')
}

const trocar_img = async (req, res) => {
    const user_id = req.params.id
    const nova_img_url = req.body.url
    if (!nova_img_url) {
        res.status(400).send('img nao encontrada')
        return
    }
    const user = await User.findOne({where:{id: user_id}})
    if(!user){
        res.status(404).send('User Not Found')
        return
    }
    user.profile_image = nova_img_url
    await user.save()
    res.status(200).send(user)
}


export { pegaperfil, update, trocaSenha , pegar_usuario, deletar_usuario, trocar_img}