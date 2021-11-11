const mongoose = require('mongoose');

const blogSchema = {
    title:String,
    content:String,
  };

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;