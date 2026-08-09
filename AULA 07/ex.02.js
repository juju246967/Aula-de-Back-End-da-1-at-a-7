app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: "O campo nome é obrigatório"
        });
    }

    if (preco === undefined || isNaN(preco)) {
        return res.status(400).json({
            erro: "O preço deve ser um número"
        });
    }

    if (preco < 0) {
        return res.status(400).json({
            erro: "O preço não pode ser negativo"
        });
    }

    const novoProduto = {
        id: proximoId,
        nome,
        preco
    };

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto);
});