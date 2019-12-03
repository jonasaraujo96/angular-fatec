const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT *
                FROM autores;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    const { aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email } = req.body;

    const sql = `INSERT INTO autores
                (aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email)
                VALUES (?, ?, ?, ?, ?);`;

    const response = await sequelize.query(sql, {
        replacements: [aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email, aut_codigo } = req.body;

    const sql = `UPDATE autores
                SET aut_nome = ?, aut_apelido = ?, aut_sexo = ?, aut_telefone = ?, aut_email = ?
                WHERE aut_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email, aut_codigo],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { aut_codigo } = req.body;

    const sql = `DELETE FROM autores
                WHERE aut_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [aut_codigo],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}