import React, { useState } from 'react'

function ListaCompras() {
    const [produtos, setProdutos] = useState([])
    const [novoProduto, setNovoProduto] = useState("")
    
    const adicionarProduto = () => {
        if (novoProduto.trim() === "") return
        setProdutos([...produtos, novoProduto])
        setNovoProduto("")
    }

    return (
        <div>
            <h2>Lista de Compras</h2>

            <input
            type="text"
            value={novoProduto}
            onChange={(e) => setNovoProduto(e.target.value)}
            placeholder='Insira um produto'
            />
            <button onClick={adicionarProduto}>Adicionar</button>

            <ul>
                <li>Número de itens: {produtos.length}</li>
                {produtos.map((p, index) => (
                    <li key={index}>{p}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaCompras