app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: "O campo nome é obrigatório"
        });
    }

    if (preco === undefined) {
        return res.status(400).json({
            erro: "O campo preco é obrigatório"
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