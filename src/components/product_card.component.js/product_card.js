import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './product_card.scss'
import {Row, Col} from 'react-bootstrap/dist/react-bootstrap'
import axios from 'axios'
import FunctionalProductCardComponent from './functional_card_component'
import Pagination from '../pagination/pagination.component'

/**
 * My Fist Self Doc.
 * Author: Dr.Proffessor. Arad .K.
 * Date: 18.4.2020, weary noon.
 * 
 * This class is the is responsible for getting the product list from the MongoDB data base
 * then sending the props to the functional component that is responsible for drawing the actual card
 * and then returns it to the main App.js
 */
// exporting the class so i can use it in App.js
export default class ProductCardComponent extends Component{
    
    constructor(props) {
        super(props)

        // binding the getProductList to 'this' key word so when i call it with 'this' it will know 
        // where to go.
        // this.getProductList = this.getProductList.bind(this)

        this.handleClick = this.handleClick.bind(this)

        // the empty list of product
        this.state = {
            product:  [],
            // cards: [],
            currentPage: 1,
            cardsPerPage: 9,

        }
        
    }

    


    //react lifecycle method, is called before the page load, 
    // that the reason i chose it to bring data from the database.
    // is that why it's called Data base ??? intersting...
    componentDidMount() {
        // axios.get => sending a 'get' http request to the url i passed it.
        axios.get('http://localhost:4000/products/')
        // getting the response, this is 'Promise'
        .then(response => {
            // setting the product list that in the state to be the list of data i got as response
            this.setState({
                product: response.data,
            })
            this.getProductList()
        })
        // if there's an error i will catch it here
        // Who you gonna call ??? De-Buggers !!!
        .catch(err => {if (err) console.log(err)})
    }

    // getProductList() {
    //     // mapping the state (list of products), passing it callback the currentProduct
    //     this.setState({ cards: this.state.product.map( currentProduct => {
    //         // returning new 'FunctionalProductCardComponent' with the data of the current product
    //         return <FunctionalProductCardComponent product={currentProduct} key={currentProduct._id}/>
    //         })
    //     })
    // }
    
    handleClick(event) {
        this.setState({
            currentPage: event.target.id
        })
    }
    render() {




        
        const {product, currentPage, cardsPerPage}  =  this.state

            // logic for displaying cards
            const indexOfLastCard = currentPage * cardsPerPage
            const indexOfFirstCard = indexOfLastCard - cardsPerPage
            const currentCard = product.slice(indexOfFirstCard, indexOfLastCard);

            const renderCards = currentCard.map( (card, index) => {
                return <Col key={index}> <FunctionalProductCardComponent product={card} key={card._id}/> </Col>
            } );

            // logic for displaying page numbers:
            const pageNumbers = []
            for (let i = 1; i <= Math.ceil(product.length / cardsPerPage); i++  ) {
                pageNumbers.push(i)
            }

            const renderPageNumbers = pageNumbers.map ( number => {
                return (
                    <li key={number}
                        id={number}
                        onClick={this.handleClick}>
                            {number}
                    </li>
                )
            } )
        const pagination = new Pagination(9, 1, this.state.product)
            
            return (
            <div>
                <Row id="RowIdForCentering">
                    {renderCards}
                      {/* {pagination.renderItems()} */}
                </Row>
                <Row>
                    <ul id="page-numbers">
                        {/* {pagination.renderPageNumbers(this.state.product, 9)} */}
                        {renderPageNumbers}
                    </ul>
                </Row> 
            </div>
        )
    }
}