import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'

function App() {

  const [listaDeTarefas, setListaDeTarefas] = useState([
    {id: 1, texto: "Tarefa 1", finalizado: false}
  ])
  
  function adicionarTarefa(tarefa){
    const novaTarefa = {id: listaDeTarefas.length + 1, texto: tarefa, finalizado: false}

    setListaDeTarefas([...listaDeTarefas, novaTarefa])
  }

  function removerTarefa(tarefa){

    const novaLista = listaDeTarefas.filter(item => item.id != tarefa.id)

    setListaDeTarefas(novaLista)
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {
        listaDeTarefas.map(tarefa => (
          <ListItem tarefa={tarefa} removerTarefa={removerTarefa}/>
        ))
      }
    </div>
  )
}

export default App