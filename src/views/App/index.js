import React, { Component } from 'react';
import './index.css';
import MyHeader from '../../component/MyHeader';
import MyFooter from '../../component/MyFooter';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {

    }
    render() {
        return (
            <Layout className="layout" style={{height: '100%'}}>
                <Layout style={{height: '100%'}}>
                    <MyHeader/>
                    <Content style={{background: '#fff',height: '100%'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{background: '#FCFFFE',borderTop: '1px solid #f0f0f0'}}>
                        <MyFooter/>
                    </Footer>
                </Layout>
            </Layout>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
