const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
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

export 