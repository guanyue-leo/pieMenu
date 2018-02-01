import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Icon } from 'antd';
import  style from './index.less';


class Sector extends Component {
    constructor(props) {
        super(props);
        this.state={
            optionsAngle: 360,
            wait: false,
            value: '',
            label: "toDo",
            visible: false
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
        const sectorStyle = {
            width: this.props.size,
            height: this.props.size,
            transform:  `rotate(${this.props.position}deg) skew(${90 - this.props.width}deg)`
        };
        const labelStyle = {
            left: this.props.labelLeft !== undefined ? this.props.labelLeft : 0+"%",
            top: this.props.labelTop !== undefined ? this.props.labelTop : 50+"%",
            width: Math.floor(this.props.size*(Math.sin(this.props.width/180*Math.PI))),
            transform:  `skew(${Math.floor(-(90 - this.props.width))}deg) rotate(${Math.floor(-this.props.position)}deg)`,
            color: this.props.color?this.props.color:"#FFFFFF"
        };
        const colorDivStyle = {
            left: -Math.floor(this.props.size*Math.tan((90-this.props.width)/180*Math.PI))/2,
            transform:  `skew(${Math.floor(-(90 - this.props.width))}deg)`,
            background: `radial-gradient(circle farthest-side at 0 0, transparent 30%, ${this.props.bgColor?this.props.bgColor:"#222"} 30%)`
        };

        return (
            <div className={style['sector']+' primary'} style={sectorStyle} onMouseUp={this.props.onMouseUp} onClick={this.props.onClick}>
                <div className={style['label']} style={labelStyle} onDragStart={(e)=>{e.preventDefault();return false}}>
                    {this.props.label}
                </div>
                <div className={style['colorDiv']} style={colorDivStyle}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sector);