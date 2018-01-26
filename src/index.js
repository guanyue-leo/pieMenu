import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import store from './store/index';

import App from './views/App';
import MyIndex from './views/MyIndex';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <App>
                    <Switch>
                        <Route path="/" component={MyIndex} />
                    </Switch>
                </App>
            </Switch>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));