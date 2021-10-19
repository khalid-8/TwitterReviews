import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"> <img id='twit_revLogo' className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> </div>
      <div className="Entry">
        <h1 className="Title">Twitter Reviews</h1>
        <input className="SearchBar" type="text" placeholder="Search For a product or services" />
        </div>
        <div className='Appear'>
          <b>1000 Tweets</b>
        </div>
    </div>
  );
}

export default App;
