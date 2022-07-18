import React from 'react';
import spinner from '../../../assets/images/spinner.svg';

export function Preloader() {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={spinner} alt=""/>
        </div>
    );
}