const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  content: {
    type: String,
    required: true,
    min: 1,
    max: 40
  },
  finished: {
    type: Boolean,
    required: true,
    default: 0
  },
  todoAt: {
    type: Date,
    required: false,
    default: null
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: Date
});

module.exports = mongoose.model("Todo", TodoSchema);
