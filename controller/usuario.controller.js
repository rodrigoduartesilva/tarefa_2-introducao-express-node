const usuarios = [
    {
        id: 1,
        nome: 'Rodrigo',
        sobrenome: 'Duarte',
        idade: 42
    },
    {
        id: 2,
        nome: 'Samira',
        sobrenome: 'Silva',
        idade: 12
    },
    {
        id: 3,
        nome: 'Mauricio',
        sobrenome: 'Silva',
        idade: 60
    }
];

const find = (req, res) => {
    const id = req.params.id;
    res.send(usuarios[id]);
}

const findAllUsuarios = (req, res) => {
    res.send(usuarios);
}

const createUsuario = (req, res) => {
    const usuario = req.body;
    if (req.body.nome == null) {
        return res.send({ message: "Corpo da mensagem está vazio." });
    }
    usuarios.push(usuario);
    res.send(usuarios);
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario
}