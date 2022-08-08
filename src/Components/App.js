
import '../Style/App.css';
import Connection from './Parent/Connection';
import Home from './Parent/Home';
import Accueil from './Parent/Accueil';
import { useState } from "react";

function App() {

  const [page,setPage] = useState("connection"); // cette etat est utilisé pour faire un vas et vient entre les pages
  return (
    <div className="App">
      {page === 'accueil' ? <Accueil setPage={setPage}/> : page === 'connection' ? <Connection setPage={setPage} /> : <Home setPage={setPage} />}
      
    </div>
  );
}

export default App;
