import React, { useState } from "react";
import axios from "axios";

function AddBlog(props) {

    const [blog, setBlog] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setBlog((prevBlog) => {
            return {
                ...prevBlog,
                [name]: value
            };
        });
    }


    function handleSubmit(event) {

        console.log(blog);
        axios
            .post("http://localhost:5000/api/saveBlog", {
                "title": blog.title,
                "content": blog.content
            }, {
                "headers": {
                    "content-type": "application/json"
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));

        props.addBlogHandler(blog)
        setBlog({
            title: "",
            content: ""
        });
        event.preventDefault();
        props.history.push("/");
    }

    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg " alt="" />
            <form className="writeForm" onSubmit={handleSubmit}>

                <div className="writeFormGroup">

                    <input
                        name="title"
                        onChange={handleChange}
                        value={blog.title}
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeForGroup">
                    <textarea
                        name="content"
                        placeholder="Type here ..."
                        onChange={handleChange}
                        value={blog.content}
                        className="writeInput writeText"
                    />
                </div>
                <button className="writeSubmit" type="submit" >ADD</button>
            </form>
        </div>

    )
}

export default AddBlog;