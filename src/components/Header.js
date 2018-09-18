import React, { Component, Fragment } from 'react'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'
class Header extends Component {
    render() {
        return (
        <Fragment>
            <AppBar style={{
                backgroundColor: '#fff',
                color: '#1d2126',
                boxShadow: '0 0 0 #fff',
                borderBottom: '1px solid #e5e5e5'
            }}>
                <Toolbar style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif'
                    }}>Quiz App</Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
        )
    }
}

export default Header