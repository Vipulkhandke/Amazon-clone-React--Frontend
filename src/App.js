import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage, NavBar, Checkout, SearchResults, ProductPage, } from './components';

const App = () => {
  return (
  <BrowserRouter>
  <NavBar />
    <Routes>
    <Route exact path="/" element={<HomePage />}/>
    <Route path="/SearchResults" element={<SearchResults />}/>
    <Route path="/Product/:id" element={<ProductPage />}/>
    <Route path="/Checkout" element={<Checkout />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
