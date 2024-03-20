import { useState } from 'react';
import './AnimalShow.css';

import bird from './images/svg/bird.svg'
import cow from './images/svg/cow.svg'
import cat from './images/svg/cat.svg'
import horse from './images/svg/horse.svg'
import heart from './images/svg/heart.svg'
import gator from './images/svg/gator.svg'
import dog from './images/svg/dog.svg'

const svgMap = {
    bird,
    cat,
    cow,
    horse,
    gator,
    dog,
}

function AnimalShow({ type }){

    const [clicks, setClicks] = useState(0);

    const handleClick = () =>{
        setClicks(clicks + 1);
    }

    return(
        <div className='animal-show'>
            <img className='animal' onClick={handleClick} alt='animal' src={svgMap[type]}/>
            <img className='heart' 
            alt='heart' 
            src={heart} 
            style={{width: 10 + 10 * clicks + 'px'}}
            />
        </div>
    ); 
}

export default AnimalShow;