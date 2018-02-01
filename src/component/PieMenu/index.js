import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import { Icon, Popconfirm, message, Modal, Form, Input, DatePicker } from 'antd';
import  style from './index.less';
import Sector from '../Sector'

const FormItem = Form.Item;

class PieMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            display: false,
            optionsAngle: 360,
            wait: false,
            value: '',
            label: "toDo",
            visible: false,
            size: 400,
            initAngle: -135,
            insidePercent: 0.4,
            left: 0,
            top: 0,
            behaviorForChild: {},
            behaviorForAfterMenu: {}
        }
    }
    /**
     * 页面渲染之前执行
     */
    componentWillMount() {
        console.log('渲染');
        this.setBehavior(this.props.type);
        this.setState({initAngle: -(180/this.props.options.length)-90});
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
        if(nextProps.options !== this.props.options) {
            this.setState({initAngle: -(180/nextProps.options.length)-90});
        }
        if(nextProps.type !== this.props.type) {
            this.setBehavior(nextProps.type);
        }
    }

    setBehavior = (type) =>{
        if(type === 'click'){
            this.setState({
                behaviorForChild: {onClick: this.start},
                behaviorForAfterMenu: {onMouseUp: null}
            });
        }else if(type === 'contextMenu'){
            this.setState({
                behaviorForChild: {onContextMenu: this.onContextMenu, onMouseDown: this.preventDefault},
                behaviorForAfterMenu: {onMouseDown: this.cancel}
            });
        }else {
            this.setState({
                behaviorForChild: {onMouseDown: this.start},
                behaviorForAfterMenu: {onMouseUp: this.cancel}
            });
        }
    };

    onContextMenu = (e) => {
        e.preventDefault();
        this.start();
    };

    preventDefault = (e) => {
        e.preventDefault()
    };

    start = () =>{
        console.log('start');
        this.setState({display: true});
    };

    cancel = () =>{
        console.log('close');
        this.setState({display: false})
    };

    onSelect = (id) => {
        console.log('select');
        this.setState({display: false});
        this.props.onSelect({id:this.props.id,choose:id});
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const formItemLayoutItem = {
            labelCol: {span: 6},
            wrapperCol: {span: 18},
        };
        let inside = this.state.size*this.state.insidePercent;
        return (
            <div className={style['hull']} onMouseLeave={this.props.dontLeaveClose?null:this.cancel}>
                <div onDragStart={(e)=>{e.preventDefault();return false}} className={style['menu']} style={{display: this.state.display?'block':'none', left: this.props.left, top: this.props.top, width: this.state.size, height: this.state.size, marginLeft: -this.state.size/2, marginTop: -this.state.size/2}}>
                    {
                        this.props.options.map((item,index)=>{
                            return <Sector width={360/this.props.options.length}
                                           size={this.state.size/2}
                                           position={this.state.initAngle+index*360/this.props.options.length}
                                           key={item.id}
                                           label={item.label}
                                           color={item.color}
                                           bgColor={item.bgColor}
                                           labelTop={(9-this.props.options.length)*10+'%'}
                                           onMouseUp={()=>{this.onSelect(item.id)}}
                            />
                        })
                    }
                    <div {...this.state.behaviorForAfterMenu} className={style['menuAfter']} style={{display: this.state.display?'block':'none', width: inside, height: inside, marginLeft: -inside/2, marginTop: -inside/2}}/>
                </div>
                <div className={style['child']+' child'} {...this.state.behaviorForChild}>
                    {this.props.children}
                </div>
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