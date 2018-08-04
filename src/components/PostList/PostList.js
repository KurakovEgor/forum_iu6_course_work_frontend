import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

import { ListGroup, Panel, Button, ButtonToolbar } from 'react-bootstrap';

import PostItem from '../PostItem/PostItem';

class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            message: [],
            votes: 0,
            author: "",
            created: ""
        }
    }

    componentDidMount() {
        this.getPostList();
    }

    like = () => {
        console.log(this.props);
        let fetchUrl = this.props.url + this.props.match.params.thread_slug + "/vote/";
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({voice: 1})
        }).then(() =>  {
            this.getPostList();
        }).catch((error) => {
            console.error(error);
        });
    }

    dislike = () => {
        let fetchUrl = this.props.url + this.props.match.params.thread_slug + "/vote/";
        console.log(fetchUrl);
        fetch(fetchUrl, {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({voice: -1})
        }).then(() =>  {
            this.getPostList();
        }).catch((error) => {
            console.error(error);
        });
    }

    getPostList = () => {
        console.log(this.props);
        let fetchUrl = this.props.url + this.props.match.params.thread_slug + "/posts/";
        console.log(fetchUrl);
        fetch(fetchUrl, {mode: "cors"}).then(response => response.json()).then(json => {
            console.log("Got a json");
            this.setState({posts: json});
        }).catch(() => {
            console.log("UNSTABLE INTERNET CONNECTION");
        });
        fetchUrl = this.props.url + this.props.match.params.thread_slug + "/details/";
        console.log(fetchUrl);
        fetch(fetchUrl, {mode: "cors"}).then(response => response.json()).then(json => {
            console.log("Got a json");
            this.setState({
                message: json.message,
                votes: json.votes,
                author: json.author
            });
        }).catch(() => {
            console.log("UNSTABLE INTERNET CONNECTION");
        });
    }

    render () {
        let postViews = this.state.posts.map(post => {
            return <PostItem post={post} />;
            })

        return (
            <div>
                <ListGroupItem header={ "Create a post" } href={"/create/post/"+this.props.match.params.thread_slug}>
                </ListGroupItem>
                <Panel>
                    <Panel.Heading>{ this.state.author }</Panel.Heading>
                    <Panel.Body>{ this.state.message }</Panel.Body>
                    <Panel.Footer>
                    <p>Current rating: {this.state.votes}</p>
                    </Panel.Footer>
                    <Panel.Footer>
                        <ButtonToolbar>
                          <Button onClick={this.like}>Like</Button>
                          <Button onClick={this.dislike}>Dislike</Button>
                        </ButtonToolbar>
                    </Panel.Footer>
                </Panel>
                {postViews}
            </div>
        );
    }
};

export default PostList;
