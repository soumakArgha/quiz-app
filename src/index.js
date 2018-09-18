import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"
import {Provider} from 'react-redux'
import store from './store'
import './style.css'
const root = document.getElementById('root')

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, root)