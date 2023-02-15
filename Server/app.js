const express = require("express");
const app = express();
require("express-async-errors");

var cors = require("cors");
// import router
const bodyParser = require("body-parser");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const postRouter = require("./routes/posts");
const orderForUserRouter = require("./routes/orderForUser");
const categoryRouter = require("./routes/category");
const orderRouter = require("./routes/order");
const con = require("./Connection");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//setup router

app.use("/user", cors(), userRouter);
app.use("/product", cors(), productRouter);
app.use("/post", cors(), postRouter);
app.use("/order", cors(), orderRouter);
app.use("/orderForUser", cors(), orderForUserRouter);
app.use("/login", cors(), loginRouter);
app.use("/category", cors(), categoryRouter);

app.post("/signin", cors(), (req, res) => {
  const user = req.body.user;
  let sql = `INSERT INTO users(username, password, email, gioHangTam, soDienThoai, address, createdAt, isUsing) VALUES ('${user.username}','${user.password}','${user.email}',0,'${user.soDienThoai}','${user.address}',now(),1) `;
  con.query(sql, (err) => {
    if (err) {
      return res.send(err);
    }
    res.json(user);
  });
});

app.listen(4000, () => {
  console.log(
    "SERVER ĐANG CHẠY, CHÚC MAY MẮN................................................................"
  );
});
