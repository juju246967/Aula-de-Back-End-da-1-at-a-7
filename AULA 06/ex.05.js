app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(a => a.id === id);

    if(!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(a => a.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" })
    }

    produtos = produtos.filter(a => a.id !==id)

    res.json({ mensagem: "Produto removido com êxito!"})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});