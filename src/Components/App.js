
import '../Style/App.css';
import Connection from './Parent/Connection';
import Home from './Parent/Home';
import Accueil from './Parent/Accueil';
import { useState } from "react";

function App() {

  const [connect,setConnect] = useState(false); // pour garder la session ouverte en cas de de succes de connection
  const [page,setPage] = useState("accueil"); // cette etat est utilisé pour faire un vas et vient entre les pages
  return (
    <div className="App">
      {page === 'accueil'     ? <Accueil setPage={setPage} cnx={connect}/> 
      :page === 'connection'  ? <Connection setPage={setPage} setConnect={setConnect}/> 
                              : <Home setPage={setPage} setConnect={setConnect}  cnx={connect}/>}
      
    </div>
  );
}

export default App;
