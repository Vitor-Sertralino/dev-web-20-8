import { useState } from 'react'

function NameList() {
    const [nome, setNome] = useState('João')
    
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <button onClick={() => setNome(nome == 'João' ? 'Maria' : 'João')}>Mudar nome</button>
        </div>
    )
}

export default NameList