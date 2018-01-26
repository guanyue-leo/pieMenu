import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Icon, Popconfirm, message, Modal, Form, Input, DatePicker } from 'antd';
import  style from './index.less';
import Sector from '../Sector'

const FormItem = Form.Item;

class PieMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            optionsAngle: 360,
            wait: false,
            value: '',
            label: "toDo",
            visible: false,
            size: 400,
            initAngle: -135,
            insidePercent: 0.4,
            options: [{id: 1, label: '按钮1', bgColor: 'red'},{id: 2, label: '按钮2', color: 'yellow'},{id: 3, label: '按钮3'},{id: 4, label: '按钮4'},{id: 5, label: '按钮5'},{id: 6, label: '按钮6'}]
        }
    }
    /**
     * 页面渲染之前执行
     */
    componentWillMount() {
        this.setState({initAngle: -(180/this.state.options.length)-90});
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
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const formItemLayoutItem = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        };
        let inside = this.state.size*this.state.insidePercent;
        return (
            <div className={style['child']}>
                <div className={style['menu']} style={{width: this.state.size, height: this.state.size, marginLeft: -this.state.size/2, marginTop: -this.state.size/2}}>
                    {
                        this.state.options.map((item,index)=>{
                            return <Sector width={360/this.state.options.length}
                                           size={this.state.size/2}
                                           position={this.state.initAngle+index*360/this.state.options.length}
                                           key={item.id}
                                           label={item.label}
                                           color={item.color}
                                           bgColor={item.bgColor}
                                           labelTop={(9-this.state.options.length)*10+'%'}
                                   />
                        })
                    }
                </div>
                <div className={style['menuAfter']} style={{width: inside, height: inside, marginLeft: -inside/2, marginTop: -inside/2}}/>
                {this.props.children}
            </div>
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

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(PieMenu));