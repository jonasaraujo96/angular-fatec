const sequelize = require('../db');

exports.listar = async (req, res) => {
    const sql = `SELECT *                 
                 FROM tb_livros;`;

    const response = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
    })
    return response;
}

exports.criar = async (req, res) => {
    const { nome, lancamento, autor } = req.body;

    const sql = `INSERT INTO tb_livros
                (nome, lancamento, autor, createdAt, updatedAt)
                VALUES (?, ?, ?, NOW(), NOW());`;

    const response = await sequelize.query(sql, {
        replacements: [nome, lancamento, autor],
        type: sequelize.QueryTypes.INSERT
    })
    return response;
}