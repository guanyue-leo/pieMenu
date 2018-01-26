import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Menu, Icon, Row, Col } from 'antd';
import  style from './index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            now:false,
            collapsed: false,
            current: 'mail'
        }
    }
    /**
     * 页面渲染之前执行
     */
    componentWillMount() {

    }
    /**
     * 页面渲染完之后执行
     */
    componentDidMount(){

    }
    /**
     * 页面值变化之后执行
     */
    componentWillReceiveProps(nextProps){

    }
    go = (path) =>{
        this.props.history.push(path)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleClick = (e) => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Row className={style["header-row"]}>
                <Col sm={8} xs={24}>
                    <h1 style={{lineHeight: '170%', width: 'auto',textAlign: 'center'}}><Link to={'/'}>环形菜单</Link><small style={{fontSize: 'small',marginLeft: 5,color: '#ccc'}}>在目录/src/component/PieMenu下</small></h1>
                </Col>
                <Col sm={16} xs={24}>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPC: state.Common.isPC
    }
};
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyHeader));