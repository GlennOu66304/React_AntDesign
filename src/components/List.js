import React, { Component } from "react";
import axios from "axios";

export default class list extends Component {
  componentWillMount() {
    axios
      .get("http://www.qmtexh.com.login")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>List</div>;
  }
}
