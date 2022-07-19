import React from 'react';
import h from './Header.module.css';
import {Link} from 'react-router-dom';
import {HeaderPropsType} from './HeaderContainer';


export function Header(props: HeaderPropsType) {
    return (
        <header className={h.header}>
            <div className={h.row}>
                <Link to={'/profile'} className={h.logo}>
                    <img
                        src="https://www.envirolink.me/wp-content/uploads/2020/02/kindpng_636633.png"
                        alt="logo"/>
                </Link>

                {
                    props.isAuth ? <span className={h.login}>{props.login}</span> :
                        <div className={h.loginBlock}>
                            <Link to={'/login'}>Login In</Link>
                        </div>
                }
            </div>
        </header>
    );
}
