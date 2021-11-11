import React from "react";
import { Link } from "react-router-dom";


function BlogCard(props){

    const {_id,title,content}=props.blog;

    return(
        <div className="post">
            <Link to={{pathname:`blog/${_id}`}}>
                <div className="blogDisplay">
                    <div className="postInfo">
                        <span className="postTitle">{title}</span>
                        <hr />
                        <p className="postContent">{content}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;

