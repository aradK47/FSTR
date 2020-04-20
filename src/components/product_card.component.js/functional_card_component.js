import React, { createRef } from 'react'
import {Accordion, Card, Button} from  'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './product_card.scss'
import {Col} from 'react-bootstrap/dist/react-bootstrap'
import imageUrl from '../../images/rfm.png'

/**
 * Author: Dr.Proffessor. Arad .K.
 * Date: 18.4.2020, weary noon.
 * 
 * This is the functional component of the product card.
 * In this method the actual card that will be displayed is made, 
 * rendered and will be brought back to 'product_card.js', so i can display it.
 * 
 * This Functional component is mixing of two react-boot strap component
 * 1. Card component : https://react-bootstrap.github.io/components/cards/#kitchen-sink
 * 2. Accordion component: https://react-bootstrap.github.io/components/accordion/#basic-example
 * 
 * Inside the 'Card.Body' i inserted the 'Accordion' component.
 */
const myRef = createRef()

const FunctionalProductCardComponent = props => (
    // giving the div id only for design pourpse
    <div id="ProductCard">
        <Col>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={imageUrl} id='ringImgId'/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                {// this is the data that will be displayed in the card text}
                 // this is divided to row for each prop so it will be displayed like this:
                 // - name
                 // - price
                 // - gender
                 // - serial
                }
                <tr><td>Name:    {props.product.name}</td></tr>
                <tr><td>Price: {props.product.price}</td></tr>
                <tr><td>Gender:  {props.product.gender}</td></tr>
                <tr><td>Serial:  {props.product.serial}</td></tr>
            </Card.Text>
        </Card.Body>

            {/* this is accordion i took from react-bootstrap
              * for more info about this accordion, please visit: 
              * https://react-bootstrap.github.io/components/accordion/ 
              * :) 
              * */}
            {/*to make accordion option open as default: defaultActiveKey="0" */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className="accordionToggleButton" as={Button} variant="link" eventKey="0">
                        Size :
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <select ref={myRef} required className="form-control">
                        {Array.from(props.product.size).map((size) => {
                            return <option key={size} value={size}>{size}</option>
                        })}
                    </select>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className="accordionToggleButton" as={Button} variant="link" eventKey="1">
                        Color : 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                            <select ref={myRef} required className='form-control'>    
                                {Array.from(props.product.color).map((color) => {
                                return (
                                    <option key={color} value={color} >
                                        {color}
                                    </option>
                                );
                            })}
                            </select>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        <Card.Body>
            <Card.Link href="#">Buy</Card.Link>
            <Card.Link id="addToCartBtn" href="#">Add To Cart</Card.Link>
        </Card.Body>
        </Card>
        </Col>
    </div>
)

export default FunctionalProductCardComponent