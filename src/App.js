import './App.css';
import { Row, Col } from 'antd'
import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
// import Home from './views/Home/Home'
import IRouter from './router'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={4} className="app-left">
            <Nav />
          </Col>
          <Col span={20} className="app-right">
            <Header />
            <IRouter />
          </Col>
        </Row>
      </div>
    )
  }
}

