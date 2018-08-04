import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            nickname: "",
            password: ""
        };
    }

    validateForm() {
        return (
            this.state.nickname.length > 0 &&
            this.state.password.length > 0
        );
    }

    loginFetch() {
        let fetchUrl = this.props.url + "signin/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nickname: this.state.nickname, password: this.state.password})
        }).then(response => response.json()).then(json => {
            console.log(json);
            window.location = "/";
        }).catch((error) => {
            console.error(error);
        });
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }


    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        this.loginFetch();
        this.setState({ isLoading: false });
    }





    renderForm () {
        return(
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="nickname" bsSize="large">
              <ControlLabel>Nickname</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.nickname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Signup"
              loadingText="Signing up…">
              Login
          </Button>
          </form>
        )
    }

    render() {
    return (
      <div className="Signup">
        {this.renderForm()}
      </div>
    );
  }
};

export default Login;
