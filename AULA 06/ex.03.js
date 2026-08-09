app.post('/produtos/produtoNovo', (req, res) => {
    
    console.log(req.body);

    const novoProduto = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto);
})
