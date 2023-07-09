
import './App.css';
import Card from './components/Card';
import cards from './components/cards.json';

export default function App (){
  return ( 
    <div className={`App`}>
      {
          cards.map((card) =>
            <Card key={card.id} price={card.price} onClick={card.isSelected}
            speed={card.speed}  
            theme={card.theme} isFiltr={card.isFiltr}></Card>
          )
        }
    </div>
  );
}
