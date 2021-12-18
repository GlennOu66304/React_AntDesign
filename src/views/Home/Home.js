import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <p className="home-name">hello qm</p>
                <h1 className="home-title">欢迎重新进入青盟后台管理系统
                </h1>
                <div className="home-wrapper">

                    <img src="/imgs/right.jpeg" alt="" />
                    <img src="/imgs/left.jpeg" alt="" />
                </div>
            </div>
        )
    }
}
