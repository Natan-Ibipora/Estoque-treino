const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Produto = sequelize.define("produtos", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Produto.sync({ force: false });

module.exports = Produto;
