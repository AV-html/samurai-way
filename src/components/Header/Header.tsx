import React from 'react';
import h from './Header.module.css';

export function Header() {
    return (
        <header className={h.header}>
            <div className={h.row}>
                <a href={'./index.html'} className={h.logo}>
                    <img
                        src="https://www.envirolink.me/wp-content/uploads/2020/02/kindpng_636633.png"
                        alt="logo"/>
                </a>
            </div>
        </header>
    );
}
