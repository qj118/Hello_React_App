import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

import './comment-item.css';

export default class CommentItem extends Component{

    static propTypes = {
        comment: PropTypes.object.isRequired,
    }

    handleDelete = (event) => {
        const { comment,  index } = this.props;
        if(window.confirm(`确认删除${comment.username}的评论吗？`)){
            PubSub.publish('deleteComment', index);
        }
    }

    render(){
        const {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}