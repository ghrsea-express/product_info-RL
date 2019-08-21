import React from 'react';

import PicCarousel from './components/PicCarousel.jsx';
import StDescipt from './components/StDescript.jsx';
import AboutProduct from './components/AboutProduct.jsx';
import {exampleData} from '../example.js';
import style from './style.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetProdut: exampleData[0]
        }
    }

    componentDidMount(){
        this.fetchProduct(3)
    }

    fetchProduct(productId){
        axios.get(`/${productId}`)
        .then((res)=>{
            // console.log(res.data[0])
            return res.data[0]
        }).then((productInfo)=>{
            this.setState({
                targetProdut:productInfo
            })
        })
        .catch(()=>(console.log('404 not found')))
    }

    render() {
        const descriptStr = this.state.targetProdut.description1
        const descriptArr = descriptStr.slice(0,descriptStr.length-1).split('.,')
        const longDescript = this.state.targetProdut.description2
        const productName = this.state.targetProdut.name
        const imgArrUrl = this.state.targetProdut.imageurl.split(', ')
        return (
            <div className={`${style.font} ${style.center}`}>
                <h3 className={`${style.productName}`}>{productName}</h3>
                <div className={`${style.container} ${style.productContainer}`}>
                    <PicCarousel imgArr={imgArrUrl} />
                    <StDescipt descriptArr = {descriptArr}/>
                </div>
                <div>
                    <AboutProduct paragraph={longDescript}/>
                </div>
            </div>
        )
    }
}

export default App;