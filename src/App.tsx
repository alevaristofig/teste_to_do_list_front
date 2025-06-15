import React, { useState } from 'react';

//interfaces
import { ITarefas } from './interfaces/Tarefas'; 

//components
import Header from './components/Header';

//css
import sytles from './App.module.css';
import Footer from './components/Footer';

//paginas
import LoginForm from './components/LoginForm';
import TarefasForm from './components/TarefasForm'; 
import TarefasLista from './components/TarefasLista';

//modal
import Modal from './components/Modal';

function App() {

  const [listas,setListas] = useState<ITarefas[]>([]);
  const [dados, setDados] = useState<ITarefas>();

  const mostrarOuEsconderModal = (dados: ITarefas) => {
     const modal = document.querySelector("#modal");

     modal!.classList.remove('d-none')     
     setDados(dados);
  } 

  return (
    <div>
      <Modal dados={dados}/>
      <Header />
       <main className={sytles.main}>
          <div>
              <LoginForm />
              <TarefasForm />
              <TarefasLista 
                  listas={listas} 
                  setListas={setListas}
                  mostrarOuEsconderModal={mostrarOuEsconderModal} />
          </div>
       </main>
       <Footer />
    </div>
  );
}

export default App;
