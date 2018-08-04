import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";


class Signup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "",
            nickname: "",
            fullname: "",
            password: "",
            confirmPassword: "",
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    signupFetch() {
        let fetchUrl = this.props.url+this.state.nickname+"/create/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, fullname: this.state.fullname, password: this.state.password})
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
        this.signupFetch();
        this.setState({ isLoading: false });
    }





    renderForm () {
        return(
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="nickname" bsSize="large">
              <ControlLabel>Nickname</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.nickname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="fullname" bsSize="large">
              <ControlLabel>Full Name</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.fullname}
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
            <FormGroup controlId="confirmPassword" bsSize="large">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                value={this.state.confirmPassword}
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
              Signup
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

export default Signup;
