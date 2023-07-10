
import style from './App.css';
import Card from './components/Card';
import cards from './components/cards.json';

export default function App (){
  return ( 
    <div className={style.App}>
      <p>вы выбрали тариф </p>
      {
          cards.map((card) =>
            <Card key={card.id} price={card.price} onClick={card.isSelected + card.isClick }
            speed={card.speed} 
            theme={card.theme} isFiltr={card.isFiltr}></Card>
          )
        }
    </div>
  );
}
