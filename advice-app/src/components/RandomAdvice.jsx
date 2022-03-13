import React, {useState, useEffect} from 'react'
import Card from './Card';
import './RandomAdvice.scss'
import axios from 'axios';
import divider from '../assets/pattern-divider-desktop.svg';
import dice from '../assets/icon-dice.svg';

export default function RandomAdvice() {

    const [advice, setAdvice] = useState('Hit To Get A Random Advice.');
    const [adviceNumber, setAdviceNumber] = useState(0);

    const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

    // fetching advice using axios

    const fetchAdvice = async () => {
        const response = await axios.get(ADVICE_API_URL);
        setAdvice(response.data.slip.advice);
        setAdviceNumber(response.data.slip.id);
    }

    return (
        <>
            <Card className='advice-card'>
                <div className="advice-number">
                    <p className='advice-number'>ADVICE #{adviceNumber}</p>
                </div>
                <div className="advice-div">
                    <p className='advice'>
                        “{advice}”
                    </p>
                </div>
                <div className='divider-image-div'>
                    <img src={divider} alt="desktop-divider" className='divider-image'/>
                </div>
                <div className="dice-container" onClick={fetchAdvice}>
                    <img src={dice} alt="dice" onClick={fetchAdvice}/>
                </div>
            </Card>
        </>
    );
}
