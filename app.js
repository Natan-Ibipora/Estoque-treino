const express = require("express");
const produto_class = require("./classes/Produto");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/produtos", async (req,res)=>{
       p1 = new produto_class()
       const {nome, preco, descricao} = req.body;

       if (!nome || !preco || !descricao) return res.status(404).json({"mensagem":"Informar todos so parametros !"});

       let produto = await p1.criar_produto(nome, preco, descricao);

       return res.status(200).json({"mensagem":"Criado com sucesso !!!", "Produto":produto});
      
})
app.listen(8081,(error, res)=>{
    console.log("Servidor rodando !!")
});