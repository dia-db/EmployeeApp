const mongoose = require('mongoose');
const blogschema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const BlogModel = mongoose.model('BlogModel', blogschema);

module.exports = BlogModel;  