const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title : {
    type: String,
    trim: true,
    required: "Title is required"
  },
  authors : [
    {
      type: String,
      trim: true,
      required: "Author is required"
    }
  ],
  description : {
    type: String,
    trim: true,
    required: "Description is required"
  },
  image : {
    type: String,
    trim: true,
    required: "Image is required"
  },
  link : {
    type: String,
    trim: true,
    required: "Link is required"
  },
})

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;