import React, { Component, Fragment } from 'react';
import './Header.css';

class Header extends Component{


    render(){
        return (
            <Fragment>
                <div className="header">
                    {this.props.headername}
                </div>

            </Fragment>
        )
    }
}
export default Header;