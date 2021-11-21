import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddBlog from "./AddBlog";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer"
import axios from "axios";


function App() {
    const [blogs, setBlogs] = useState([]);

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



    function addBlogHandler(blog) {

        setBlogs((prevBlogs) => {
            return [...prevBlogs, { id: uuid(), ...blog }];
        });
        console.log(blog);
        console.log(blogs);
    }

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <BlogList
                                {...props}
                                blogs={blogs}
                            />
                        )}

                    />
                    <Route
                        path="/add"
                        render={(props) => (
                            <AddBlog
                                {...props}
                                addBlogHandler={addBlogHandler}
                            />
                        )}
                    />

                    <Route
                        path="/blog/:id"
                        render={(props) => (
                            <BlogDetails />
                        )}
                    />

                </Switch>
            </Router>

            <Footer />

        </div>
    );
}

export default App;