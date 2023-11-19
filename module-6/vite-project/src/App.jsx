import './App.css';
import React from 'react';
//import Address from './Address.jsx';
//import MoviesList from './MoviesList.jsx';
//import BigCats from './BigCats.jsx';
import Emoji from './Emoji.jsx';
//import Calculator from './Calculator';
//import BitcoinRates from './BitcoinRates';
import { EmojiProvider } from './EmojiContext';

{/*const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: 'lightblue', color: 'black', padding: '10px' }}>My Address Book</h1>
      <Address
        streetName="123 Lee Dr."
        state="Lousiana"
        country="United States"
        zipCode="70363"
      />
    </div>
  );
};*/}


{/*const App = () => {
  return (
    <div>
      <MoviesList />
      {/* <h1 style={{ backgroundColor: 'lightblue', color: 'black', padding: '10px' }}>My Address Book</h1>
      <Address
        streetName="123 Lee Dr."
        state="Louisiana"
        country="United States"
        zipCode="70363"
      /> 
    </div>
  );
};*/}



{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Big Cats Encyclopedia</h1>
      </header>
      <main>
        <BigCats />
      </main>
    </div>
  );
};*/}


const App = () => {
  return (
    <EmojiProvider>
      <div>
        <h1>Emoji Mood Changer</h1>
        <Emoji />
      </div>
    </EmojiProvider>
  );
};



{/*function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Simple Calculator App</h1>
            </header>
            <main className="App-main">
                <Calculator />
            </main>
            <footer className="App-footer">
                <p>&copy; 2023 Simple Calculator App</p>
            </footer>
        </div>
    );
}*/}



{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bitcoin Exchange Rate App</h1>
      </header>
      <main>
        <BitcoinRates />
      </main>
    </div>
  );
}*/}




export default App
