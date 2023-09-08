import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughSquint } from '@fortawesome/free-regular-svg-icons'; // baixa
import { faFaceGrimace } from '@fortawesome/free-regular-svg-icons'; // normal
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'; // alta
import { faFaceMehBlank } from '@fortawesome/free-regular-svg-icons'; // nada
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Atividade(props) {
  function prioridadeLabel(param){
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não Definido';
      }
  }

  function propriedadeStyle(param, icone){
    switch(param){
      case '1':
        return icone ? faFaceLaughSquint : 'success' ;
      case '2':
        return icone ? faFaceGrimace : 'warning';
      case '3':
        return icone ? faFaceSadCry : 'danger';
      default:
        return icone ? faFaceMehBlank : 'secondary';
    }
  } 

  return (
    <div id="cardColor" className={"card mb-2 shadow-sm border-" + propriedadeStyle(props.ativ.prioridade) } >
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                <span className="badge text-bg-secondary me-2">{props.ativ.id}</span> - {props.ativ.titulo}</h5>
                <h6>Prioridade:
                  <span className={"ms-1 me-1 text-" + propriedadeStyle(props.ativ.prioridade)} >
                    <FontAwesomeIcon 
                    className="me-1" icon={propriedadeStyle(props.ativ.prioridade, true )}/>{prioridadeLabel(props.ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{props.ativ.descricao}</p>
              <div className="col-12 border-top pt-2 m-0 d-flex justify-content-end">
                <button 
                 onClick={() => props.editarAtividade(props.ativ.id)}
                className="btn btn-outline-primary me-2 btn-sm">
                <FontAwesomeIcon className="me-2" icon={faPen} />
                  Editar
                  </button>
                <button 
                  onClick={() => props.deletarAtividade(props.ativ.id)}
                  className="btn btn-outline-danger btn-sm">
                  <FontAwesomeIcon className="me-2" icon={faTrash} />
                  Excluir
                  </button>
              </div>
            </div>
        </div>
  )
}
