import './App.css';
import { useState } from 'react';
import { useContext } from 'react';
import ServiceContext from './common/ServiceContext';

function App() {

  const context = useContext(ServiceContext);
  const [searchText, setSearchText] = useState('');
  const [entries, setEntries] = useState([]);

  const transferToEntries = (data) =>{
      // data = json dc objet
      let nouveauTableau = data.map(x => Object.values(x).join(' - '));      
      setEntries(nouveauTableau);
  }

  const handleList = () => {
    // on appelle la fonction getData de l'apiService, qui attend en paramètre une fonction. donc on doit lui donner une fonction
    context.apiService.getDataFromList( (data) => {
      // setEntries(data);
      transferToEntries(data);
    }) 
  }

  // console.log(entries);

  const handleSearch = () => {
    context.apiService.getDataFromSearch(searchText, (data) => {
      transferToEntries(data);
    });
  }

  return (
    <div>
        <h1>Annuaire</h1>
        <input type="text" value={searchText} onChange = {e => setSearchText(e.target.value)} />
        <button onClick = {handleSearch}> Chercher </button>
        <button onClick = {handleList}>Tout</button>
        <div>{entries.map(e => <div>{e}</div>)}</div>
        {/* <ul>{transferToEntries(entries).map(e=><li>{e}</li>)}</ul> */}
    </div>
  );
}

export default App;
