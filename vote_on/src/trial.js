import logo from './logo.svg';
import React from 'react';
import './App.css';






function Product() {
  return (
    <div>
    <p>I am a Product</p>
    </div>
  )
}

class ProductList extends React.Component {
  render() {
    return(
    <div>
    <p>Hello Product List</p>
    <Product/>
    </div>
    
    )

  }
}

























function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
export default ProductList;
// export Product;
