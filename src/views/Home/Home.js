import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.username,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <p className="home-name">hello {this.props.name}</p>
        <h1 className="home-title">欢迎重新进入青盟后台管理系统2</h1>
        <div className="home-wrapper">
          <img src="/imgs/right.jpeg" alt="" />
          <img src="/imgs/left.jpeg" alt="" />
        </div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Home);
