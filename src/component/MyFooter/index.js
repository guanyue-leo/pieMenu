import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Row } from 'antd';

class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state={
            now:false
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
    render() {
        return (
            <div>
                <Row style={{textAlign: 'center'}}><a href="https://github.com/guanyue-leo/pieMenu">GitHub</a> | 友情链接：<a href="http://react-china.org/" target="_blank">React</a><a style={{marginLeft: 10}} href="https://ant.design/index-cn" target="_blank">Ant design</a></Row>
                {/*<p style={{textAlign: 'center'}}>Copyright ©2017 keepsolo.com Powered By React Version 1.0.0 </p>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyFooter));