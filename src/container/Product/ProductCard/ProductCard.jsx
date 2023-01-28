/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.order,
    };
  }

  handleCounterChange = (value) => {
    this.props.onCounterChange(value);
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    }, () => {
      this.handleCounterChange(this.state.order);
      // this.props.onCounterChange(this.state.order);
    });
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      }, () => {
        this.handleCounterChange(this.state.order);
        // this.props.onCounterChange(this.state.order);
      });
    }
  };

  render() {
    return (
      <div className="CardProduct">
        <p>Judul Product</p>
        <p>Deskripsi product</p>
        <div>
          <button onClick={this.handleMinus}>-</button>
          <input type="text" value={this.state.order} />
          <button onClick={this.handlePlus}>+</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
