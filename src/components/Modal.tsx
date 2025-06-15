import React, { useEffect, useState, FormEvent } from "react";

//css
import styles from './css/Modal.module.css';
import stylesForm from './css/ListasForm.module.css';

interface Props {
    id?: number
}

const Modal = ({id}: Props) => {

    const [titulo,setTitulo] = useState<string>('');

    useEffect(() => {
        
    },[])

    const fecharModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("d-none");
    };

    const editarLista = (e: FormEvent<HTMLFormElement>) => {}

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
                            value={titulo}
                        />
                    </div>
                    <input type="submit" value='Editar Lista' />
                    <button onClick={fecharModal}>Fechar</button>
                </form>
                
            </div>
        </div>
        </>
    )
}

export default Modal;