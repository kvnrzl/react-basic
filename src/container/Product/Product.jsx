/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import ProductCard from './ProductCard/ProductCard';

class Product extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor() {
    super();
    this.state = {
      order: 0,
    };
  }

  handleCounterChange(newValue) {
    this.setState({
      order: newValue,
    });
  }

  render() {
    return (
      <>
        <div className="Header">
          <p>
            Counter:
            {this.state.order}
          </p>
        </div>
        <hr />
        <ProductCard order={this.state.order} onCounterChange={(value) => this.handleCounterChange(value)} />
      </>
    );
  }
}

export default Product;
