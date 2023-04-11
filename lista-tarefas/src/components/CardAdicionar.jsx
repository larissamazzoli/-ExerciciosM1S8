import { useState } from "react";
function CardAdicionar({adicionarTarefa}) {

    const [tarefa, setTarefa] = useState("");

    const handleAdicionar = (evento) => {
        evento.preventDefault()

        if(tarefa != ""){

            adicionarTarefa(tarefa)

            setTarefa("")
        }
    }
    
    return (
        <div>
            
        <input
            placeholder="adicionar tarefa"
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        
        <button onClick={handleAdicionar}>Adicionar</button>
    
        </div>
    );
}   

export default CardAdicionar;