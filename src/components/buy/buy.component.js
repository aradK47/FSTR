import React, { Component } from 'react'
import './buy.component.scss'

export default class BuyComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div id="buyComponentTesting">
                <ul id="productDetailsList">
                    <li className="productDetails">Name: {this.props.product.name}</li>
                    <li className="productDetails">Price: {this.props.product.price}</li>
                    <li className="productDetails">Size: {this.props.product.size}</li>
                    <li className="productDetails">Color: {this.props.product.color}</li>
                    <li className="productDetails">Serial: {this.props.product.serial}</li>
                    <li className="productDetails">ID: {this.props.product.id}</li>
                </ul>

                {console.log(this.props.product.id)}
                {console.log(this.props.product.name)}
                {console.log(this.props.product.serial)}
                {console.log(this.props.product.price)}
                {console.log(this.props.product.size)}
                {console.log(this.props.product.color)}
            </div>
        )
    }
}