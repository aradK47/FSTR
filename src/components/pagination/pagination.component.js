import React from 'react'
import { Col} from 'react-bootstrap/dist/react-bootstrap'
import FunctionalProductCardComponent from '../product_card.component.js/functional_card_component'

export default class Paginatoin{

    constructor(itemsPerPage, currentPage, listOfItems) {
       
        this.handleClick = this.handleClick.bind(this)    
        
        this.indexOfLastItem = currentPage * itemsPerPage;
        this.indexOfFirstItem = this.indexOfLastItem - itemsPerPage;
        this.currentItem = listOfItems.slice(this.indexOfFirstItem, this.indexOfLastItem)

    }
    

    handleClick(event) {
        return Number(event.target.id)   
    }

    renderItems() {
        return this.currentItem.map( (card, index) => {
                    return <Col key={index}> <FunctionalProductCardComponent product={card} key={card._id}/> </Col>
                } );
    }

        // renderCards = this.currentItem.map( (card, index) => {
        //     return <Col key={index}> <FunctionalProductCardComponent product={card} key={card._id}/> </Col>
        // } );


    renderPageNumbers(listOfItems, itemsPerPage) {
        const pageNumbers = []
        for (let i = 1;  i <= Math.ceil(listOfItems.length / itemsPerPage) ; i++) {
            pageNumbers.push(i)
        }
        console.log(pageNumbers.length)
        return pageNumbers.map( number => {
            return <li key={number} 
                             id={number} 
                             onClick={this.handleClick}>
                                 {number}
                        </li>
        })
    }
}
//     render() {

//         // const {itemsPerPage, currentPage, listOfItems}  =  this.state;

//         // logic for displaying items:
//         // const indexOfLastItem = currentPage * itemsPerPage;
//         // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//         // const currentItem = listOfItems.slice(indexOfFirstItem, indexOfLastItem)

//         // this will render the functional card component, s
        


//         // logic for displaying page numbers
//         // const pageNumbers = []
//         // for (let i = 1;  i < Math.ceil(listOfItems.length / itemsPerPage) ; i++) {
//         //     pageNumbers.push(i)
//         // }

//         // const renderPageNumbers = pageNumbers.map( number => {
//         //     return <li key={number} 
//         //                      id={number} 
//         //                      onClick={this.handleClick}>
//         //                          {number}
//         //                      </li>
//         // })

//         return (
//             <div>
//                {this.renderItems}
//             </div>

// //         )
//     }
// }
