import React from 'react';
import style from '../style.css';

const PicView = ({picture}) =>(
        <div>
            {console.log('picView triggered! showing ' + picture)}
            <img src={picture} className={style.heroImg}/>
        </div>
)

export default PicView;