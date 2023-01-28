import React, { Component, Fragment } from 'react';
import ProductCardRedux from './ProductCardRedux/ProductCardRedux';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux'


class ProductRedux extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }

  // handleCounterChange(newValue) {
  //   this.setState({
  //     order: newValue,
  //   });
  // }

  render() {
    return (
      <Fragment>
        <div className="Header">
          <p>
            Counter:
            {this.props.counter}
          </p>
        </div>
        <hr />
        <ProductCardRedux />
      </Fragment>
    );
  }
}

// const ProductRedux = () => {
//   const count = useSelector(state => state.counter.state)

//   return (
//     <div>
//       <p>Counter: {count}</p>
//     </div>
//   )
// }

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(ProductRedux);
