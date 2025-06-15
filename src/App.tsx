import React, { useState } from 'react';

//interfaces
import { IListas } from './interfaces/Listas'; 

//components
import Header from './components/Header';

//css
import sytles from './App.module.css';
import Footer from './components/Footer';

//paginas
import LoginForm from './components/LoginForm';
import ListasForms from './components/ListasForms';
import ListasTable from './components/ListasTable';

//modal
import Modal from './components/Modal';

function App() {

  const [listas,setListas] = useState<IListas[]>([]);
  const [dados, setDados] = useState<IListas>();

  const mostrarOuEsconderModal = (dados: IListas) => {
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
              <ListasForms />
              <ListasTable 
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
