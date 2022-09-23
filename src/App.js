import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("")
  const [ageSelecteur, setAgeSelecteur] = useState("")

  let Annee = (new Date()).getFullYear();

  let Age = Annee - input
  let selectYears = []
  let resultSelect = Annee - ageSelecteur

  for (let index = 1980; index <= Annee; index += 1) {
    selectYears.push(index)
  }


  return (
    <div className="App">

      <form className='form'>
        <label>Quelle est votre année de naissance ?</label>
        <input id="age" name="age" required onChange={(e) => setInput(e.target.value)} />
      </form>
      <p> vous avez <h3>{Age}</h3></p>


      <div className='Selector'>
        <select name="nom" id="selector" onChange={(e) => setAgeSelecteur(e.target.value)}>
          <option valeur="">----Selectionnez l'année-----</option>
          {selectYears.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
        <p> vous avez <h3>{resultSelect}</h3></p>
      </div>


    </div>
  );
}

export default App;




