import './App.css';
import { Row, Col } from 'antd'
import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={4} className="app-left">
            <Nav />
          </Col>
          <Col span={20} className="app-right">
            Right
          </Col>
        </Row>
      </div>
    )
  }
}

