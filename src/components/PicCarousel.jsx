import React from 'react';
import PicView from './PicView.jsx';
import style from '../style.css';
import { removePropertiesDeep } from '@babel/types';

class PicCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArr: this.props.imgArr,
            heroImg: this.props.imgArr[0],
            highLight: 'thumbnail000'
        };
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleHightLight = this.handleHightLight.bind(this);
    }

    handleImgChange (event){
        // console.log("clicked")
        // console.log(event.target.classList)
        this.setState({
            heroImg: event.target.currentSrc,
            highLight: event.target.id
        })

    }

    static getDerivedStateFromProps(props, state){
        return {
            ...state, 
            imageArr: props.imgArr,
            heroImg: props.imgArr[0]
        }
    }

    handleHightLight (index) {
        if(this.state.highLight === `thumbnail00${index}`){
            return style["thumbnail-high-light"];
        }
    }

    render () {
        return(
            <div className={style.autoMargin}>
                {/* {console.log(`picCarousel state: !!!!!!!!!! ${this.state.imageArr}`)} */}
                {console.log(this.props.imgArr)}
                <div className={style.heroImgHeight}>
                    <PicView picture={this.state.heroImg}/>
                </div>
                <div className={style.carousel}>
                    {this.state.imageArr.map((url,index)=>(
                            <img 
                                src={url} 
                                height="42" 
                                width="42" 
                                key={index}
                                id={`thumbnail00${index}`}
                                className={`imageThumbnails ${this.handleHightLight(index)} ${style.tmpad}`}
                                onMouseOver={(event)=>{
                                    this.handleImgChange(event);
                                }}
                                />
                    ))}
                </div>


            </div>
        )
    }
}

export default PicCarousel;