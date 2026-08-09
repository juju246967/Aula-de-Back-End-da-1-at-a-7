app.post('/produtos/produtoNovo', (req, res) => {
    
    const novoProduto = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto)
    res.json(produtos)
})
