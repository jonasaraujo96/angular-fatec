const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT *
                FROM livros l
                INNER JOIN autores a ON l.aut_codigo = a.aut_codigo;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    console.log(req.body)
    const { liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo } = req.body;

    const sql = `INSERT INTO livros
                (liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo, NOW())
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW());`;

    const response = await sequelize.query(sql, {
        replacements: [liv_titulo, liv_edicao, liv_ano, liv_ativoinativo, liv_isbn, edt_codigo, aut_codigo],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}