'use client';
import React, { useState } from 'react';
import './Card.css';
import custom from './custome.module.scss';
import clsx from 'clsx';

const Card = () => {
    const [expending, setExpending] = useState(false);
    return (
        <div
            className={clsx('card', {
                [custom.card]: expending, // nếu expending là true thì thêm class custom.card
            })}
        >
            card
        </div>
    );
};

export default Card;
