import React, { Component } from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';
import { THREADS_LIST_NOT_API } from '../../constants';

class ThreadItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            header: props.thread.title,
            about: props.thread.author,
            url: "/thread/"+props.thread.slug,
            votes: props.thread.votes
        };

    }

    render () {
        return (
            <ListGroupItem header={ this.state.header } href={this.state.url}>
                <div>{this.state.about}</div>
                <Badge color="primary" pill>{ this.state.votes }</Badge>
            </ListGroupItem>
        );
    }
};

export default ThreadItem;
