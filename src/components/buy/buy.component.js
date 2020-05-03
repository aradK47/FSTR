import React, { Component } from 'react'
import './buy.component.scss'

export default class BuyComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div id="buyComponentTesting">
                
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