const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "1234",
    {
        host:"localhost",
        port:3307,
        dialect:"mysql"
    }
)

sequelize.authenticate().then(()=>{
    console.log("Bando de dados conectado com sucesso !!!")
}).catch((error)=>{
    console.log("Erro ao se conectar com o banco de dados !!! " + error);
})

module.exports={
    Sequelize,
    sequelize
}