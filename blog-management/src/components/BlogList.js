import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import axios from "axios";

function BlogList(props){
    const [blogs,setBlogs]=useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/getAllBlogs/")
          .then(res => {
              setBlogs(res.data)
              console.log(blogs)
            }
            )
          .catch(err => console.error(err));
    }, [])

    const renderBlogList = blogs.map((blog) => {
        return (
            <BlogCard
				blog={blog}
				key={blog.id}
			/>
        )
    });

    return(
        <div>
            <div>
                <h2 className="heading">BLOGS
                    <Link to="/add">
                        <button className="Submit ui button blue right">Add Blog</button>
                    </Link>
                </h2>
            </div>
            <div>
                {renderBlogList}
            </div>
        </div>
        
    )

}

export default BlogList;