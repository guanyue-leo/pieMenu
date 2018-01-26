import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Anchor,Collapse } from 'antd';
import PieMenu from "../../component/PieMenu";
import alipay from "./img/alipay.jpg";

const { Link } = Anchor;
const Panel = Collapse.Panel;

class MyIndex extends Component {
    constructor(props) {
        super(props);
        this.state={

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

    render() {
        return (
            <div style={this.props.isPC?{width: 760,margin: '0 auto',padding: '300px 0'}:{width: '90%',margin: '0 auto',padding: '20px 0'}}>
                <div style={{width: 30, margin: '0 auto'}}>
                    <PieMenu>
                        <span>123</span>
                    </PieMenu>
                </div>
                <div style={{position: "absolute", right: 100,bottom: 300}}>
                    <img src={alipay} width={200} height={300}/>
                    <p style={{textAlign: 'center'}}><h3><a>请我喝杯咖啡</a></h3></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPC: state.Common.isPC,
    }
};
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyIndex);