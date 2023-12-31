import React, { useState } from 'react';
import './Card.scss';

export default function Card(props) {

  const { price, speed, theme, isFiltr } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [isClick, setClick] = useState(0);
  const handleClick = () => {
    setIsSelected(current => !current);
  };
  const onSpeed = (e) => {setClick ({speed:e.target.dataset.speed});}
  return (
    <div className={`tarifcard` + (isSelected ? " selected" : "")} onClick={handleClick}>
      <div className={`card__component header ${theme}`}><span>Безлимитный</span><p className='tarif-price'>{price}</p></div>
      <div className={`card__component item-1 ${theme}` + (isFiltr ? " filtr" : "")}><span className='tarif-cur'>руб</span><div className='tarif-price'>{price}</div><span>/мес</span></div>
      const Div = forwardRef(({ speed, onSpeed }, ref) => (
      <div data-speed={speed} onClick ={onSpeed}
      className={`card__component item-2`}><span>до</span><div className={'tarif-speed' + (isClick ?  setClick : "")}>{speed}</div><span>Мбит/сек</span></div>
      ref={ref}
      ));
      <div className={`card__component footer` + (isFiltr ? " filtr" : "")}><span>Объем ключенного трафика не ограничен</span></div>
    </div>
  );
}
