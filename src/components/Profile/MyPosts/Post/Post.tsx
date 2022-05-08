import React from 'react';
import p from './Post.module.css';


type PropsType = {
    message: string
    likesCount: number
}

export function Post(props: PropsType) {
    return (
        <>
            <li className={p.item}>
                <div className={p.avatar}>
                    <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                         alt=""/>
                </div>
                <p className={p.message}>
                    {props.message}
                </p>
                <div className={p.like}>
                    <img src="https://www.kindpng.com/picc/b/568/5680047.png" alt="Like counts"/>{props.likesCount}
                </div>
            </li>


            {/*<li className={p.item}>*/}
            {/*    <div className={p.avatar}>*/}
            {/*        <img src="https://litolan.ua/templates/europlast/resource/img/ceo.svg"*/}
            {/*             alt=""/>*/}
            {/*    </div>*/}
            {/*    <p className={p.message}>*/}
            {/*        Consectetur adipisicing elit. Alias distinctio eius est*/}
            {/*        laborum magni rerum!*/}
            {/*    </p>*/}
            {/*    <div className={p.like}>*/}
            {/*        like*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className={p.item}>*/}
            {/*    <div className={p.avatar}>*/}
            {/*        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"*/}
            {/*             alt=""/>*/}
            {/*    </div>*/}
            {/*    <p className={p.message}>*/}
            {/*        Adipisci aut culpa doloremque*/}
            {/*        dolorum, exercitationem libero nam odit porro quaerat, sequi*/}
            {/*    </p>*/}
            {/*    <div className={p.like}>*/}
            {/*        like*/}
            {/*    </div>*/}
            {/*</li>*/}
        </>
    );
}