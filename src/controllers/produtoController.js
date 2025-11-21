const produtoService = require("../services/produtoService");

module.exports = {
    criarProduto: async (req, res) => {
        try {
            const { nome, preco, descricao } = req.body;

            if (!nome || !preco || !descricao) {
                return res.status(400).json({ mensagem: "Informe todos os parâmetros!" });
            }

            const produto = await produtoService.criar({ nome, preco, descricao });

            return res.status(201).json({
                mensagem: "Criado com sucesso!",
                produto
            });

        } catch (error) {
            return res.status(500).json({ erro: "Erro ao criar produto", detalhe: error.message });
        }
    }
};
