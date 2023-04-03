const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const url = "mongodb+srv://alumni:alumni@cluster0.yol4t5s.mongodb.net/test";
const {config} = require("dotenv");
const ErrorMiddleware = require("./middlewares/Error.js")
config({ path: "./config/config.env" });

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open", ()=> {
    console.log("connected");
})

//middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const authRouter = require("./routes/Auth");
app.use("/auth",authRouter);
const postRouter = require("./routes/Posts");
app.use("/home",postRouter);
const userRouter = require("./routes/Users");
app.use("/profile",userRouter);


app.use(ErrorMiddleware);

app.listen("3001",()=> {
    
});
