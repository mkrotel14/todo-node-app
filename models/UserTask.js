const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const TodoShcema = require("../models/TodoTask");

const { Schema } = mongoose;
const { isEmail } = require("validator");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [isEmail, "Invalid Email"]
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 12
  },
  todo: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo"
    }
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: Date
});

UserSchema.pre("save", async function save(next) {
  try {
    if (this.isModified("password")) {
      let passValidator = new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/
      );
      if (passValidator.test(this.password)) {
        this.password = await this.encryptPassword(this.password);
        next();
      } else {
        throw new Error(
          "The password must contain 6 digits with at least one number and one letter"
        );
      }
    }
  } catch (e) {
    throw e;
  }
});

UserSchema.pre("deleteOne", async function remove(next) {
  try {
    const id = this.getQuery()["_id"];
    await TodoShcema.deleteMany({ user: id }).exec();
    next();
  } catch (e) {
    throw e;
  }
});

UserSchema.methods.validatePassword = async function validatePassword(
  password
) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.encryptPassword = async function encryptPassword(password) {
  if (!password) throw new Error("Failed to Encrypt Password");

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

module.exports = mongoose.model("User", UserSchema);
