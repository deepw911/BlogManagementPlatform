import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router-dom";

function BlogDetails(props){
    const {id} = useParams();
    const [blog, setBlog] = React.useState({
        title: "",
        content: ""
    });
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/getBlog/"+id)
          .then(res => setBlog(res.data))
          .catch(err => console.error(err));
    }, [])
    console.log(props);

    const handleDelete = () => {

        axios
        .post("http://localhost:5000/api/deleteBlog/"+id)
        .then(res => window.location.href="http://localhost:3000/")
        .catch(err => console.error(err));
    }
    // console.log(props.location.state);
    // const {title,content}=props.location.state.blog;
    const title="Hello!";
    const content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    return(
        <div className="main">
            <div className="fullPost">
                <div className="fullPostWrapper" >
                    <div className="fullPostTitle">
                        {blog  && blog.title}
                        
                    </div>
                    <div className="fullPostContent">{ blog  && blog.content} </div>
                </div>
            </div>

            <div>
                <Link to="/">
                    {/* <button className="backButton" type="submit" >Delete</button> */}
                    <button className="backButton" onClick={handleDelete}>Delete</button>
                    <br/><br/><br/><br/>
                    <button className="backButton">BACK</button>
                </Link>
            </div>
        </div>
    )

}

export default BlogDetails; 