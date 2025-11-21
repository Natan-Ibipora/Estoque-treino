const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "1234",
    {
        host: "localhost",
        port: 3307,
        dialect: "mysql",
        logging: false
    }
);

sequelize.authenticate()
    .then(() => console.log("Banco conectado com sucesso!"))
    .catch(err => console.error("Erro ao conectar:", err));

module.exports = sequelize;
