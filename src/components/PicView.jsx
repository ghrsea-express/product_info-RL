import React from 'react';
import style from '../style.css';

const PicView = ({picture}) =>(
        <div>
            <img src={picture} className={style.heroImg}/>
        </div>
)

export default PicView;