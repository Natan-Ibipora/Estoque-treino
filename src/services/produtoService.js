const Produto = require("../models/produtoModel");

module.exports = {
    criar: async (dados) => {
        return await Produto.create(dados);
    }
};
