import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import PieMenu from "../../component/PieMenu";
import alipay from "./img/alipay.jpg";

class MyIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            left: 0,
            top: 0,
            type: 'click'
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

    onSelect = (id) => {
        console.log(id)
    };

    mousePosition = (ev) => {
        if(ev.pageX || ev.pageY){
            this.setState({left:ev.pageX, top:ev.pageY});
        }else {
            this.setState({
                left:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                top:ev.clientY + document.body.scrollTop - document.body.clientTop
            });
        }
    };

    typeChange = (e) =>{
        this.setState({type: e.target.value})
    };

    render() {
        const list= [
            {id: 'del', label: '删除', bgColor: 'red'},
            {id: 'watch', label: '观望'},
            {id: 'freeze', label: '冻结', bgColor: 'blue'},
            {id: 'think', label: '分析', color: 'yellow'},
            {id: 'pass', label: '通过', bgColor: 'green'}
        ];
        const itemList = [{id:1, title: '小条目'},{id:2, title: '一个正常长度的条目'},{id:3, title: '一个可能比较长长长长长长长长长长长长长长长的条目'},{id:4, title: '一个可能非常非常非常非常非常非常非常非常非常非常非常长长长长长长长长长长长长长长长的条目'}];
        return (
            <div style={this.props.isPC?{width: 760,margin: '0 auto',textAlign: 'center'}:{width: '90%',margin: '0 auto',padding: '20px 0'}}>
                <Radio.Group value={this.state.type} onChange={this.typeChange} style={{margin: '50px auto'}}>
                    <Radio.Button key={'click'} value={'click'}>单击</Radio.Button>
                    <Radio.Button key={'contextMenu'} value={'contextMenu'}>右键</Radio.Button>
                    <Radio.Button key={'hold'} value={'hold'}>左键拖动</Radio.Button>
                </Radio.Group>
                <div style={{width: 700, margin: '0 auto'}}>
                    {
                        itemList.map((item,index)=>{
                            return <PieMenu options={list} type={this.state.type} onSelect={this.onSelect} key={item.id} id={item.id} left={this.state.left} top={this.state.top}>
                                <a onMouseDown={this.mousePosition} style={{display: 'block',marginBottom: 20,borderBottom: '1px dashed #222222'}}>{item.title}</a>
                            </PieMenu>
                        })
                    }
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