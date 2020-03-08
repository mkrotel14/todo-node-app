const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const LoginRouter = require('./routes/login')
const UserRouter = require('./routes/users')
const TodoRouter = require('./routes/todo')

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/login", LoginRouter);
app.use("/users", UserRouter);
app.use("/todo", TodoRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
