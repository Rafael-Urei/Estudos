import './App.css';
import { IMaskInput } from "react-imask";
import bgimg from '../src/bg-main-desktop.png'
import fcard from '../src/bg-card-front.png'
import bcard from '../src/bg-card-back.png'
import cardimg from '../src/card-logo.svg'
import { useReducer, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

function Form(){
  const [cardNumber, setValue] = useState('0000 0000 0000 0000');
  const [cardName, setName] = useState('JANNE APPLESEED');
  const [cardMonth, setMonth] = useState('mm');
  const [cardYear, setYear] = useState('yy');
  const [cardCvv, setCvv] = useState('cvv');
  const [button, setButton] = useState();

  const handleAddNum = event => setValue(event.target.value);

  const handleAddName = event => setName(event.target.value);

  const handleAddMonth = event => setMonth(event.target.value);

  const handleAddYear = event => setYear(event.target.value);

  const handleAddCvc = event => setCvv(event.target.value);

  const handleSubmit = event => {
    setButton(event.preventDefault());
  }

  return (
    <div className='Form'>
      <div className='card'>
        <div className='front-card'>
          <div className='card-data'>
            <img src={cardimg} className='card-img-white'></img>
            <p className='cd-1'>{cardNumber}</p>
            <p className='cd-2'>{cardName}</p>
            <p className='cd-3'>{cardMonth}/{cardYear}</p>
          </div>
          <img src={fcard} className='fcard'></img>
        </div>
        <div className='back-card'>
          <p>{cardCvv}</p>
          <img src={bcard} className='bcard'></img>
        </div>
      </div>
      <picture>
        <img src={bgimg}></img>
      </picture>
      <form className='formulary'>
          <label>CARDHOLDER NAME</label>
          <IMaskInput 
            type='text' 
            placeholder='e.g. Jane Appleseed' 
            className='cardholder-name-input'
            onChange={handleAddName}
          />
          <label htmlFor='card-number-input'>CARD NUMBER</label>
          <IMaskInput
            mask={"0000 0000 0000 0000"}
            placeholder = 'e.g. 1234 5678 9123 0000'
            type='text' maxLength='20'
            onChange={handleAddNum}
            className='card-input'
          />
          <div className='exp-cvc'>
            <div className='first-child-exp'>
              <label>EXP. DATE (MM/YY)</label>
              <IMaskInput mask={"00"} type='text' className='month-number-input' maxLength={'2'} placeholder='MM' onChange={handleAddMonth}
              />
              <IMaskInput mask={"00"} type='text' className='year-number-input' maxLength={'2'} placeholder='YY' onChange={handleAddYear}
              />
            </div>
            <div className='second-child-cvc'>
              <label>CVC</label>
              <IMaskInput mask={"000"} type='text' className='cvc-input' maxLength={'3'} placeholder='e.g. 123' onChange={handleAddCvc}
              />
            </div>
          </div>
          <button type='submit' className='button' onClick={handleSubmit}>Confirm</button>
      </form>
    </div>
  );
}

export default Form;
