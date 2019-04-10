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
        axios.get(`/product?id=${productId}`)
        .then((res)=>{
            //console.log(res);
            this.setState({
                targetProdut: res.data[0]
            }, ()=>{
                // console.log(exampleData[4])
            })
        })
        .catch(()=>(console.log('404 not found')))
    }

    render() {
        const descriptStr = this.state.targetProdut.description1
        const descriptArr = descriptStr.slice(0,descriptStr.length-1).split('.,')
        const longDescript = this.state.targetProdut.description2
        const productName = this.state.targetProdut.name
        
        return (
            <div className={`${style.font} ${style.center}`}>
                <h3 className={`${style.productName}`}>{productName}</h3>
                <div className={`${style.container} ${style.productContainer}`}>
                    <PicCarousel imgArr={this.state.targetProdut.imageurl.split(', ')} />
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