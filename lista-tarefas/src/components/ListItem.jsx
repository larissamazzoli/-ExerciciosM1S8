import { useState } from "react";
import "./listItem.css"

function ListItem({ tarefa, removerTarefa }) {

    const [finalizado, setFinalizado] = useState(tarefa.finalizado)

    function finalizarTarefa(evento) {
        evento.preventDefault()

        setFinalizado(!finalizado)
    }

    function handleRemoverTarefa(evento) {
        evento.preventDefault()

        removerTarefa(tarefa)
    }

    return (
        <div>
            {
                finalizado ? (
                    <li key={tarefa.id} className={'list-item finalizado'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                ) : (
                    <li key={tarefa.id} className={'list-item'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                )
            }
        </div>

    );
}

export default ListItem;