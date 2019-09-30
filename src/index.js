import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginForm from '../src/components/LoginForm/LoginForm';

ReactDOM.render(
<Provider  store={store}>
    <LoginForm />
</Provider>,
 document.getElementById('root'));

