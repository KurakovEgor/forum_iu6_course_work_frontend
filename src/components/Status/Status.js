import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Table
} from "react-bootstrap";


class Status extends Component {
    constructor (props) {
        super(props);
        this.state = {
            forum: 0,
            thread: 0,
            post: 0,
            user: 0
        };
    }
    componentDidMount() {
        console.log("log");
        this.statusFetch();
    }

    statusFetch() {
        let fetchUrl = this.props.url+"status/"
        console.log(fetchUrl);
        fetch(fetchUrl, {
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            this.setState({
                forum: +json.forum,
                thread: +json.thread,
                post: +json.post,
                user: +json.user
             });
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
    return (

        <Table striped bordered condensed hover>
        <thead>
            <tr>
              <th colSpan="2">Status Report</th>
            </tr>
        </thead>
        <tbody>
        <tr><td>Forums:</td><td>{this.state.forum}</td></tr>
        <tr><td>Threads:</td><td>{this.state.thread}</td></tr>
        <tr><td>Posts:</td><td>{this.state.post}</td></tr>
        <tr><td>Users:</td><td>{this.state.user}</td></tr>
        </tbody>
        </Table>
    );
  }
};

export default Status;
