import './App.css';
import MemoryCard from './components/MemoryCard';
import { useState } from 'react';


let shuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    let tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }

  return deck;
}

let generateDeck = () => {
  const symbols = ["🤮", "😊", "😀", "🙃", "🤔", "😜", "😸", "🧙‍♂️"];
  const generatedDeck = [];
  for (let i = 0; i < 16; i++) {
    const card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    generatedDeck.push(card);
  }
  return shuffle(shuffle(generatedDeck));
}

function App() {
  const [deck, setDeck] = useState(generateDeck());
  const [pickedCards, setPicked] = useState([]);

  let pickCard = (cardIndex) => {
    const cardToFlip = deck[cardIndex];
    cardToFlip.isFlipped = true;

    if (pickedCards.length == 0) {
      setPicked([cardIndex])
      let newDeck = deck.map((card, index) => {
        if (index == cardIndex) {
          card.isFlipped = true;
        }
      });
    } else {
      let previousCardIndex = pickedCards[0];

      if (cardToFlip.symbol == deck[previousCardIndex].symbol) {
        console.log('winner');
      } else {
        console.log('not winner')
        setPicked([]);
        let newDeck = deck.map((card, index) => {
          if (index == previousCardIndex || index == cardIndex) {
            card.isFlipped = false;
          }

          return card
        });

        setDeck(newDeck);
      }
    }
  }

  const cardsJSX = deck.map((card, index) => {
    return <MemoryCard symbol={card.symbol} pickCard={pickCard} index={index} key={index} />
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match cards to win</h3>
      </header>
      <div>
        {cardsJSX.slice(0, 4)}
      </div>
      <div>
        {cardsJSX.slice(4, 8)}
      </div>
      <div>
        {cardsJSX.slice(8, 12)}
      </div>
      <div>
        {cardsJSX.slice(12, 16)}
      </div>
    </div>
  );
}

export default App;