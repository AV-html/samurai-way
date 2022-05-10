import m from './Message.module.css';
import React from 'react';

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return <li className={m.message}>{props.message}</li>
}