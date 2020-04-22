import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import MyNavbar from './components/navbar/navbar'
import {Container, Row} from 'react-bootstrap/dist/react-bootstrap'
import ProductCardComponent from '../src/components/product_card.component.js/product_card'
import {Route, BrowserRouter as Router} from 'react-router-dom'

// import Pagination from '@material-ui/lab/Pagination';

// import Pagination from 'pagination'
// const pagination = require('pagination')
// var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 1, totalResult: 10020});


function App() {
  return (
    <Router>
      <div>
        <Container fluid className="navContainer sticky-top">
            <MyNavbar className="navContainer"/>
        </Container>
        <Container>
          <Row id="paginationAndCardCentered">
              <Route path='/' exact component={ProductCardComponent}/>
          </Row>
        </Container>
      </div>
      
    </Router>
  );
}

export default App;
