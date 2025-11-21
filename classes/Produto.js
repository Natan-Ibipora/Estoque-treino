const produto_model = require ("../models/Produtos");
class Produtos {
   constructor(){

   }
   async  criar_produto(nome, preco, descricao){
        
        let produto = await produto_model.create({
            nome: nome,
            preco: preco,
            descricao: descricao
    });
       return produto;
    }
}

module.exports = Produtos;