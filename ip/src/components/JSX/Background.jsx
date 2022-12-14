import React from 'react';
import '../SCSS/Background.scss';

export default function Background() {
    return (
        <img src={require('../../assets/pattern-bg.png')} alt='background' className='Background'/>
    )
}
