import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import ForumItem from '../ForumItem/ForumItem';


class ForumList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            forums: []
        }
    }

    componentDidMount() {
        this.getForumList();
    }

    getForumList = () => {
        const self = this;
        let fetchUrl = this.props.url;
        console.log(fetchUrl);
        fetch(fetchUrl, {mode: "cors"}).then(response => response.json()).then(json => {
            console.log("Got a json");
            self.setState({forums: json});
        }).catch(() => {
            console.log("UNSTABLE INTERNET CONNECTION");
        });
    }

    render () {
        let forumViews = this.state.forums.map(forum => {
            return <ForumItem forum={forum} />;
            })

        return (
            <ListGroup>
                <ListGroupItem header={ "Create a forum" } href="/create/forum">
                </ListGroupItem>
                {forumViews}
            </ListGroup>
        );
    }
};

export default ForumList;
