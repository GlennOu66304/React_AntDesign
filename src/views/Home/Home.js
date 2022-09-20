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
        <h1 className="home-name">hello {this.props.name}</h1>
        <h1 className="home-title">欢迎重新进入青盟后台管理系统3</h1>
        <div className="home-wrapper">
          <img src="https://glennou66304.github.io/React_AntDesign/imgs/left.jpeg" alt="" />
          <img src="https://glennou66304.github.io/React_AntDesign/imgs/right.jpeg" alt="" />
        </div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Home);
