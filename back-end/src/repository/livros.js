const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT *
                FROM livros l
                INNER JOIN autores a ON l.aut_codigo = a.aut_codigo
                INNER JOIN editoras e ON l.edt_codigo = e.edt_codigo;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    const { liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo } = req.body;

    const sql = `INSERT INTO livros
                (liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo, liv_dtcadastro)
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW());`;

    const response = await sequelize.query(sql, {
        replacements: [liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}

exports.atualizar = async (req, res) => {
    const { liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo, liv_codigo } = req.body;

    const sql = `UPDATE livros
                SET liv_titulo = ?, liv_edicao = ?, liv_ano = ?, liv_ativoinativo = ?,
                liv_isbn = ?, edt_codigo = ?, aut_codigo = ?
                WHERE liv_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo, liv_codigo],
        type: sequelize.QueryTypes.UPDATE
    })
    return response;
}

exports.deletar = async (req, res) => {
    const { liv_codigo } = req.body;

    console.log(req.body)

    const sql = `DELETE FROM livros
                WHERE liv_codigo = ?;`;

    const response = await sequelize.query(sql, {
        replacements: [liv_codigo],
        type: sequelize.QueryTypes.DELETE
    })
    return response;
}