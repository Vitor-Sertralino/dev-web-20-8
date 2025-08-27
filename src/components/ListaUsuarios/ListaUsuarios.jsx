import { useState, useEffect } from "react";

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    async function buscarUsuarios() {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
        const dados = await resposta.json()
        setUsuarios(dados)
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista de Usuários (API)</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    )
}