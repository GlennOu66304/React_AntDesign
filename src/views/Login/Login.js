import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './Login.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { setName } from '../../store/actionCreators'

function mapDispatchToProps(dispatch) {
    return {
        setUsername: (name) => {
            dispatch(setName(name))
        }
    }
}

function mapStateToProps(state) {
    return {

    }
}

class Login extends Component {
    constructor(params) {
        super(params);
        this.submitInfo = this.submitInfo.bind(this)
    }
    submitInfo = () => {
        axios('http://www.qmtexh.com.login').then(res => {
            console.log(res)
            this.props.setUsername(res.data.name)
        }).catch(err => {
            console.log(err)
        })

    }
    render() {
        return (
            < div>
                <div className="login">
                    <h4>用户登录</h4>
                    <Form  >
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submitInfo}>
                                Log in
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)