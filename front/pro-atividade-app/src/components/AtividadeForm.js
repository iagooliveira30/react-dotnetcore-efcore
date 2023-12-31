import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function AtividadeForm(props) {
  const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
  }
  const [atividade, setAtividade] = useState(atividadeAtual());
 

  //é executado quando o componente for construído 
  useEffect(() => {
    if (props.ativSelecionada.id !== 0) {
      setAtividade(props.ativSelecionada);
    }
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    
    setAtividade({ ...atividade, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(props.ativSelecionada.id !== 0) props.atualizarAtividade(atividade);
    else props.addAtividade(atividade);

    setAtividade(atividadeInicial);
    
  }

  const handleCancelar = (e) => {
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  }

  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) 
      return props.ativSelecionada;
     else 
      return atividadeInicial;
  } 

  return (
    <>
    <h1>Atividades {atividade.id !== 0 ? atividade.id : ''}</h1>
    <form className="row g-3" onSubmit={handleSubmit}> 
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input
          name="titulo"
          value={atividade.titulo}
          onChange={inputTextHandler}
          id="titulo"
          type="text"
          className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select
          id="prioridade"
          name="prioridade"
          value={atividade.prioridade}
          onChange={inputTextHandler}
          className="form-select">
          <option defaultValue="0" >Selecionar...</option>
          <option value="1">Baixo</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-md-12">
        <label className="form-label">Descrição</label>
        <textarea
          name="descricao"
          value={atividade.descricao}
          onChange={inputTextHandler}
          id="descricao"
          type="text"
          className="form-control" />
           <hr />
      </div> 
      <div className="col-12 mt-0">
        {
          atividade.id === 0 ?
            <button
              className="btn btn-outline-secondary"
              type="submit" 
              >
              <FontAwesomeIcon className="me-2" icon={faPlus} />
              Atividade
            </button>
           :
            <>
              <button
                className="btn btn-outline-success me-2" type="submit">
                <FontAwesomeIcon className="me-2" icon={faPlus} />
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={handleCancelar}>
                <FontAwesomeIcon className="me-2" icon={faPlus} />
                Cancelar
              </button>
            </>
        }
      </div>
    </form> 
    </>
  )
}
