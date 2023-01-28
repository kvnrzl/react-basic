import React, { Component } from "react";
import { connect } from "react-redux";

class ProductCardRedux extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     order: this.props.order,
  //   };
  // }

  // handleCounterChange = (value) => {
  //   this.props.onCounterChange(value);
  // };

  // handlePlus = () => {
  //   this.setState({
  //     order: this.state.order + 1,
  //   }, () => {
  //     this.handleCounterChange(this.state.order);
  //     // this.props.onCounterChange(this.state.order);
  //   });
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState({
  //       order: this.state.order - 1,
  //     }, () => {
  //       this.handleCounterChange(this.state.order);
  //       // this.props.onCounterChange(this.state.order);
  //     });
  //   }
  // };

  render() {
    return (
      <div className="CardProduct">
        <p>Judul Product</p>
        <p>Deskripsi product</p>
        <div>
          <button onClick={this.props.handleMinus}>-</button>
          <input type="text" value={this.props.counter} />
          <button onClick={this.props.handlePlus}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "ADD_COUNTER" }),
    handleMinus: () => dispatch({ type: "MINUS_COUNTER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardRedux);
