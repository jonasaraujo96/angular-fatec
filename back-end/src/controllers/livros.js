const repository = require('../repository/livros');

exports.criar = async (req, res) => {
    try {
        const resposta = await repository.criar(req, res);
        res.status(200).send(resposta);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.listar = async (req, res) => {
    try {
        const resposta = await repository.listar(req, res);
        res.status(200).send(resposta);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}