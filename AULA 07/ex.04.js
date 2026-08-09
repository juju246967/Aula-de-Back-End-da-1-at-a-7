app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    const erros = [];

    if (!nome) {
        erros.push("Nome é obrigatório");
    }

    if (preco === undefined) {
        erros.push("Preço é obrigatório");
    } else {
        if (isNaN(preco)) {
            erros.push("Preço deve ser um número");
        }

        if (preco < 0) {
            erros.push("Preço não pode ser negativo");
        }
    }

    if (erros.length > 0) {
        return res.status(400).json({
            erros
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