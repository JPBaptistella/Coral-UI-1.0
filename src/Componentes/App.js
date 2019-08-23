import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts/Index'
import Painel from './Painel/Index'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Painel />
        <Footer />
      </Fragment>
    )
  }
}
