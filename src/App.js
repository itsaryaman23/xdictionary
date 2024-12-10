import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let word = e.target.inp.value;
    for(const d of dictionary)
    {
      if(word.toLowerCase() == d.word.toLowerCase())
      {
        console.log(word, d.meaning);
        document.getElementById('def').innerText = d.meaning;
        break;
      }
      else
      {
        document.getElementById('def').innerText = "Word not found in the dictionary.";
      }
    }
    
  } 

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit= {handleSubmit}>

      <input placeholder="Search for a word..." name="inp"></input>
      <button type="submit">Search</button>
      </form>
      <h5>Definition:</h5>
      <p id = "def"></p>
    </div>
  );
}

export default App;
