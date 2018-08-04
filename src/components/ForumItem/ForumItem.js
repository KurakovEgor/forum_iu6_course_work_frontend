import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { THREADS_LIST_NOT_API } from '../../constants';

class ForumItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            header: props.forum.title,
            about: props.forum.user,
            url: "/forum/"+props.forum.slug
        };

    }

    render () {
        return (
            <ListGroupItem header={ this.state.header } href={this.state.url}>
                {this.state.about}
            </ListGroupItem>
        );
    }
};

export default ForumItem;
