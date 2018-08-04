import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";


class CreateForumForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            slug: "",
            title: ""

        };
    }

    validateForm() {
        return (
            this.state.slug.length > 0 &&
            this.state.title.length > 0
        );
    }

    createForumFetch() {
        let fetchUrl = this.props.url + "/create/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({slug: this.state.slug, title: this.state.title})
        }).then(response => response.json()).then(json => {
            console.log(json);
            window.location = "/";
        }).catch((error) => {
            alert("Please, login")
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
        this.createForumFetch();
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
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Create"
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

export default CreateForumForm;
