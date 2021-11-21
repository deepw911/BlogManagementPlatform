import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetails(props) {
    const { id } = useParams();
    const [blog, setBlog] = React.useState({
        title: "",
        content: ""
    });
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/getBlog/" + id)
            .then(res => setBlog(res.data))
            .catch(err => console.error(err));
    }, [])
    console.log(props);

    const handleDelete = () => {

        axios
            .post("http://localhost:5000/api/deleteBlog/" + id)
            .then(res => window.location.href = "http://localhost:3000/")
            .catch(err => console.error(err));
    }
    return (
        <div className="main">
            <div className="fullPost">
                <div className="fullPostWrapper" >
                    <div className="fullPostTitle">
                        {blog && blog.title}

                    </div>
                    <div className="fullPostContent">{blog && blog.content} </div>
                </div>
            </div>

            <div >
                <Link to="/" className="link">
                    <button className="deleteButton" onClick={handleDelete}><i class="fas fa-trash"></i>   Delete Blog</button>
                    <button className="backButton"><i class="fas fa-arrow-circle-left"></i>   Go Back</button>
                </Link>
            </div>

        </div>
    )

}

export default BlogDetails;