app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    produtos = produtos.filter(p => p.id !== id);

    res.json({
        mensagem: "Produto removido com sucesso"
    });
});