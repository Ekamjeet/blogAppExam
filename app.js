const express = require("express");
const mongoose = require("mongoose");
const blogs = require("./routes/blogs");
const admin = require("./routes/admin");
const user = require("./routes/user");
const newUser = require("./routes/newUser");
require("dotenv").config();

const finduser = require('./middleware/finduser');

// const { signUp } = require("./controllers/newUser");

const app = express();

mongoose
    .connect("mongodb://Product:EP8xALKcahLc6Pjw@cluster0-shard-00-00.7b4er.mongodb.net:27017,cluster0-shard-00-01.7b4er.mongodb.net:27017,cluster0-shard-00-02.7b4er.mongodb.net:27017/test?replicaSet=atlas-p9bpfp-shard-0&ssl=true&authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("connected to mongoDB"))
    .catch((e) => {
        console.log(e);
        return process.exit(1);
    });

app.set("view engine", "ejs");

require('./middleware/setup')(app);

app.use("/blogs", blogs);
app.use("/admin", admin, admin);
app.use("/user", user);
app.use("/newUser",newUser);


app.use((_req, res) => {
    res.redirect("/blogs");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));