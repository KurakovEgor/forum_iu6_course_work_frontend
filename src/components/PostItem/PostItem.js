import React, { Component } from 'react';
import { ListGroupItem, Panel } from 'react-bootstrap';

class PostItem extends Component {
    constructor (props) {
        super(props);
        let header = "#" + props.post.id + " " + props.post.author + " " + props.post.created;
        if (+props.post.parent != 0) {
            header += (" answered #"+props.post.parent);
        }
        this.state = {
            message: props.post.message,
            header: header
        };

    }

    render () {
        return (
            <Panel>
                <Panel.Heading>{ this.state.header }</Panel.Heading>
                <Panel.Body>{ this.state.message }</Panel.Body>
            </Panel>
        );
    }
};

export default PostItem;
