
import {useState} from 'react';
import './styles/App.css';

function App() {

  const [input, setInput] = useState('');
  const [addedInputs, setAddedInputs] = useState([]);
 
  function handleOnSubmit(e) {
    e.preventDefault();
    if (!input) {
      alert('Enter a job title and company');
      return;
    };
    const inputs = {
      id: Math.floor(Math.random() * 100),
      value: input
    };
    setAddedInputs(list => [...list, inputs]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Add jobs that you want to apply to</h1>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="text" 
          placeholder="job title and company"
          value={input}
          onChange={e => setInput(e.target.value)}
          >
        </input>
        <button type="submit">
          add
        </button>
      </form>
      {addedInputs.map(added => {
        return (
          <li key={added.id}>{added.value}</li>
        )
      })}
    </div>
  );
}

export default App;
