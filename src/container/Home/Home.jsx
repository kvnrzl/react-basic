import React, { Component, Fragment } from 'react';
import Product from '../Product/Product';
import StatefullComponent from '../StatefullComponent/StatefullComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardMahasiswaComp from '../../component/CardMahasiswaComp/CardMahasiswaComp';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <Fragment>
        <CardMahasiswaComp nama={"kevin"} nim={"test"} prodi="ilkomp" />
        <p>Halo ini halaman home</p>
      </Fragment>
    );
  }
}

export default Home;
