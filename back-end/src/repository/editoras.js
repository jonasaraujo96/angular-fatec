const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT *
                FROM editoras;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    const { edt_nome, edt_cidade, edt_cep, edt_telefone, edt_email, edt_estado } = req.body;

    const sql = `INSERT INTO editoras
                (edt_nome, edt_cidade, edt_cep, edt_telefone, edt_email, edt_estado)
                VALUES (?, ?, ?, ?, ?, ?);`;

    const response = await sequelize.query(sql, {
        replacements: [edt_nome, edt_cidade, edt_cep, edt_telefone, edt_email, edt_estado],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { edt_nome, edt_cidade, edt_cep, edt_telefone, edt_email, edt_estado, edt_codigo } = req.body;

    const sql = `UPDATE editoras
                SET edt_nome = ?, edt_cidade = ?, edt_cep = ?, edt_telefone = ?, edt_email = ?, edt_estado = ?
                WHERE edt_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [edt_nome, edt_cidade, edt_cep, edt_telefone, edt_email, edt_estado, edt_codigo],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { edt_codigo } = req.body;

    const sql = `DELETE FROM editoras
                WHERE edt_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [edt_codigo],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}