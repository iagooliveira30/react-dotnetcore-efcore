import { useEffect, useState } from 'react';
import './App.css';

import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
  {
    "id": 1,
    "prioridade": '1',
    "titulo": "Título 1",
    "descricao": "Primeira Atividade",
  },
  {
    "id": 2,
    "prioridade": '2',
    "titulo": "Título 2",
    "descricao": "Segunda Atividade",
  }
];

function App() {
  const [index, setIndex] =  useState(0);
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({id:0});

    useEffect(()=>{
      if(atividades.length <= 0)
      setIndex(1);
      else
      setIndex(Math.max.apply(Math, atividades.map(item => item.id)) + 1,);
    }, [atividades])

  function addAtividade(ativ) { 
    setAtividades([...atividades, { ...ativ, id: index }]); 
  }

  function cancelarAtividade(){
    setAtividade({id: 0})
  }

  function atualizarAtividade(ativ){
    setAtividades(
      atividades.map(item =>(item.id === atividade.id ? ativ : item))
    );
    setAtividade({id: 0});
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  function editarAtividade(id) {
    // const atividade = atividades.filter((atividade) => atividade.id === id)
    // setAtividade([...atividade]);

    const atividadeSelecionada = atividades.find(atividade => atividade.id === id);

    if (atividadeSelecionada) {
      setAtividade(atividadeSelecionada);
    }
  }

  return (
    //fragment
    <>
      <AtividadeForm
        addAtividade={addAtividade}  
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        ativSelecionada={atividade}
        atividades={atividades}

      />
      <AtividadeLista
      atividades={atividades}
      deletarAtividade={deletarAtividade}
      editarAtividade={editarAtividade}
      />
    </>
  );
}

export default App;
