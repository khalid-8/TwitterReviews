import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"> <img className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> </div>
      <div className="Entry">
        <b className="Title">Twitter Reviews</b>
        <input className="SearchBar" type="text" placeholder="Search For a product or services" />
      </div>
    </div>
  );
}

export default App;
