import React, { Component } from 'react';
import {
    Navbar as BootstrapNavbar,
    Nav, NavItem, NavDropdown, MenuItem, Button
} from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap'

class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user_nickname: ""
        };

        this.touched = this.touched.bind(this);
    }
    handleLogoutClick = () => {
        let fetchUrl = this.props.url + "logout/";
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then(() => {
                    this.setState({user_nickname: ""});
            }).catch((error) => {
                console.error(error);
            });
    }

    checkLogin = () => {
        let fetchUrl = this.props.url;
        console.log(fetchUrl);
        fetch(fetchUrl, {
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then(response => response.json()).then(json => {
                if (json != undefined && json.nickname != undefined) {
                    console.log(json);
                    this.setState({user_nickname: json.nickname});
                } else {
                    this.setState({user_nickname: ""});
                }
                console.log(this.state.user_nickname);
            }).catch(() => {
                this.setState({user_nickname: ""});
                console.log(this.state.user_nickname);
            });
    }

    componentDidMount() {
        this.checkLogin();
    }

    clearPage = () => {
        this.setState({msg: "Don't touch me!"});
        return false;
    }

    touched () {
        this.setState({msg: "You are bad!"});
        return false;
    }

    render () {
        return (
            <div className="Navbar" >
                <BootstrapNavbar>
                    <BootstrapNavbar.Header>

                       <BootstrapNavbar.Brand>
                         <a href="/" >Forum of Egor Kurakov</a>
                       </BootstrapNavbar.Brand>
                     </BootstrapNavbar.Header>

                         {this.state.user_nickname === "" ? (
                             <Nav>
                             <IndexLinkContainer to="/login/" activeClassName="active">
                                 <NavItem eventKey={1} >
                                     Login
                                 </NavItem>
                             </IndexLinkContainer>
                             <IndexLinkContainer to="/signup/" activeClassName="active">
                                 <NavItem eventKey={2} >
                                     Sign Up
                                 </NavItem>
                             </IndexLinkContainer>
                             </Nav>
                     ) : (
                         <Nav>
                                 <NavItem eventKey={3} >
                                     {this.state.user_nickname}
                                 </NavItem>
                                 <NavItem eventKey={4} >
                                     <a onClick={this.handleLogoutClick}>Logout </a>
                                 </NavItem>
                        </Nav>)
                     }

                </BootstrapNavbar>
            </div>
        );
    }
};

export default Navbar;
