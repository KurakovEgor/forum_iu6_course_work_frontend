import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

import { ListGroup } from 'react-bootstrap';

import ThreadItem from '../ThreadItem/ThreadItem';

class ThreadList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            threads: []
        }
    }

    componentDidMount() {
        this.getThreadList();
    }

    getThreadList = () => {
        console.log(this.props.match);
        let fetchUrl = this.props.url + this.props.match.params.slug + "/threads/";
        fetch(fetchUrl, {mode: "cors"}).then(response => response.json()).then(json => {
            console.log("Got a json");
            this.setState({threads: json});
        }).catch(() => {
            console.log("UNSTABLE INTERNET CONNECTION");
        });
    }

    render () {
        let threadViews = this.state.threads.map(thread => {
            return <ThreadItem thread={thread} />;
            })

        return (
            <ListGroup>
                <ListGroupItem header={ "Create a thread" } href={"/create/thread/"+this.props.match.params.slug}>
                </ListGroupItem>
                {threadViews}
            </ListGroup>
        );
    }
};

export default ThreadList;
