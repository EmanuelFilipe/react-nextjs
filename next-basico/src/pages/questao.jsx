import { useEffect, useState } from "react";

export default function questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/456')
            .then(resp => resp.json())
            .then(data => setQuestao(data))
    }, [])

    function rendereizarRespostas() {
        if(questao){
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <h3>{questao?.enunciado}</h3>
                <ul>{rendereizarRespostas()}</ul>
            </div>
        </div>
    )
}