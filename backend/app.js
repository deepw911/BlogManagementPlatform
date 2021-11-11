const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const mongoose = require('mongoose');
app.use(express.json({
    extended: false
}));
app.use(cors());
require('dotenv').config();
ObjectId = require('mongodb').ObjectID;

const Blog = require('./blogModel.js')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/api/getBlog/:id',(req, res) => {
  Blog.findById(req.params.id, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/api/getAllBlogs/',(req, res) => {
  Blog.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/api/saveBlog',(req, res) => {
  
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });
  newBlog.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/api/deleteBlog/:id', (req,res) => {
  // 618c16408b5901ccfe6688a
  Blog.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      //data.delete();
      //res.send({"message":"sumcessfuml"})
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})