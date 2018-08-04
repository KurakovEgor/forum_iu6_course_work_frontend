import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";


class CreatePostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            slug: "",
            message: "",
            parent: 0
        };
    }

    validateForm() {
        return (
            this.state.message.length > 0
        );
    }

    sendMessage() {
        console.log(this.props.match);
        let fetchUrl = this.props.url + this.props.match.params.thread_slug + "/create/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{parent: this.state.parent, thread: this.props.match.params.thread_slug, message: this.state.message}])
        }).then(response => response.json()).then(json => {
            console.log(json);
            window.location = "/thread/" + this.props.match.params.thread_slug;
        }).catch((error) => {
            console.error(error);
            alert("Please, login");
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
        this.sendMessage();
        this.setState({ isLoading: false });
    }


    renderForm () {
        return(
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="parent" bsSize="large">
              <ControlLabel>Parent</ControlLabel>
              <FormControl
                autoFocus
                type="number"
                value={this.state.parent}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="message" bsSize="large">
              <ControlLabel>Message</ControlLabel>
              <FormControl componentClass="textarea" autoFocus type="text"
              value={this.state.message}
              onChange={this.handleChange}/>
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Send"
              loadingText="Signing up…">
              Send
          </Button>
          </form>
        )
    }

    render() {
    return (
      <div className="CreateThreadForm">
        {this.renderForm()}
      </div>
    );
  }
};

export default CreatePostForm;
