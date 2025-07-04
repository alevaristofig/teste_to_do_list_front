import React, { useEffect, useState, FormEvent } from "react";
import axios from "axios";

//interfaces
import { ITarefas } from "../interfaces/Tarefas";

//css
import styles from './css/Modal.module.css';
import stylesForm from './css/TarefasForm.module.css';

interface Props {
    dados?: ITarefas
}

const Modal = ({dados}: Props) => {

    const [titulo,setTitulo] = useState<string>('');
    const [tempo,setTempo] = useState<string>('');
    const [finalizada,setFinalizada] = useState<string>('');

    const fecharModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("d-none");
    };

    const editarLista = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();       

        let data = {
            'id': dados?.id,
            'titulo': titulo,
            'tempo': tempo,
            'finalizada': finalizada
        }

        axios.put(`http://localhost:8000/api/v1/todo/tarefas/${dados?.id}`,data,{
                headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem('token')}`,                
                }
            })                   
            .then((response) => {               
                alert('Tarefa editada com Sucesso');
                window.location.reload();
            })
            .catch((error) => {                            
                return false;
            });
    }

    return(
        <>
            <div id="modal" className='d-none'>            
                <div className={styles.modal}>
                    <form onSubmit={editarLista} className={stylesForm.form}>
                        <div className={stylesForm.input_container}>
                            <input 
                                type='text' 
                                name='titulo' 
                                placeholder='Título da Lista' 
                                onChange={(e) => setTitulo(e.target.value)} 
                                defaultValue={dados?.titulo}
                            />
                            <input 
                            type='text' 
                            name='tempo' 
                            placeholder='Tempo da Tarefa' 
                            onChange={(e) => setTempo(e.target.value)} 
                            defaultValue={dados?.tempo}
                            />
                            <div className="text-start">
                                <label className="me-2">Finalizada</label>
                                <input 
                                    type='radio' 
                                    name='finalizada'                         
                                    onChange={(e) => setFinalizada(e.target.value)} 
                                    value="S"   
                                    checked={dados?.finalizada === 'S'}                         
                                /> Sim 
                                <input 
                                    className="ms-3"
                                    type='radio' 
                                    name='finalizada'                        
                                    onChange={(e) => setFinalizada(e.target.value)} 
                                    value="N"
                                    checked={dados?.finalizada === 'N'}  
                                /> Não
                        </div>
                        </div>
                        <input type="submit" value='Editar Lista' />
                        <div onClick={fecharModal} className="mt-2 text-danger fs-5" style={{cursor: 'pointer'}}>X</div>
                    </form>                
            </div>
        </div>
        </>
    )
}

export default Modal;