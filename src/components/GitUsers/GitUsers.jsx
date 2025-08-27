import { useState, useEffect } from "react";
import './gitusers.css'

export default function GitUsers() {
    const [usuarios, setUsuarios] = useState([])

    async function buscarUsuarios() {
        const resposta = await fetch('https://api.github.com/users')
        const dados = await resposta.json()
        setUsuarios(dados)
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista de Usuários (API)</h2>
            <ul className="users_profile">
                {usuarios.map(usuario => (
                    <li key={usuario.id}><img className="avatar_img" src={usuario.avatar_url}/> {usuario.login}</li>
                ))}
            </ul>
        </div>
    )
}