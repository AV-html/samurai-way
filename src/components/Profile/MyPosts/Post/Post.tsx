import React from 'react';
import p from './Post.module.css';


export function Post() {
    return (
        <>
            <li className={p.item}>
                <div className={p.avatar}>
                    <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                         alt=""/>
                </div>
                <p className={p.message}>
                    text
                </p>
                <div className={p.like}>
                    like:
                </div>
            </li>

        </>
    );
}