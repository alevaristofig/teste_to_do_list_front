import React from 'react';

//components
import Header from './components/Header';

//css
import sytles from './App.module.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
       <main className={sytles.main}>
          <div>Menus</div>
       </main>
       <Footer />
    </div>
  );
}

export default App;
