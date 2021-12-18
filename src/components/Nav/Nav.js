import React, { Component } from 'react'
import { Menu, Icon, } from 'antd';
import menuList from '../../config/menuConfig';
import './Nav.css'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
class Nav extends Component {


    constructor(params) {
        super(params);
        this.state = {
            list: [],
        };
        this.createMenu = this.createMenu.bind(this);
    }

    createMenu(_config) {
        let _list = _config.map((item, index) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.createMenu(item.children)}
                    </SubMenu>)
            } else {
                return (
                    <Menu.Item key={item.path} >
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }

        })

        return _list


    }

    componentWillMount() {
        let list = this.createMenu(menuList);
        console.log(list);
        this.setState({
            list

        })
    }

    render() {
        return (
            <div >

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"

                >
                    {this.state.list}

                    {/* <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}

export default Nav