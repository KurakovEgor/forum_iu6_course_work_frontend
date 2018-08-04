import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";


class CreateThreadForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            slug: "",
            title: "",
            message: ""
        };
    }

    validateForm() {
        return (
            this.state.slug.length > 0 &&
            this.state.title.length > 0 &&
            this.state.message.length > 0
        );
    }

    createThreadFetch() {
        console.log(this.props.match);
        let fetchUrl = this.props.url + this.props.match.params.forum_slug + "/create/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({slug: this.state.slug, title: this.state.title, message: this.state.message, forum: this.props.match.params.forum_slug})
        }).then(response => response.json()).then(json => {
            console.log(json);
            window.location = "/forum/" + this.props.match.params.forum_slug;
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
        this.createThreadFetch();
        this.setState({ isLoading: false });
    }


    renderForm () {
        return(
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="slug" bsSize="large">
              <ControlLabel>Slug</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.slug}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="title" bsSize="large">
              <ControlLabel>Title</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.title}
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
              text="Create"
              loadingText="Signing up…">
              Create
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

export default CreateThreadForm;
