const express = require("express");
const app = express();
require("express-async-errors");
var cors = require("cors");
const con = require("./Connection");
const { json } = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const loginRouter = require("./routes/login");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const postRouter = require("./routes/posts");
const bannerRouter = require("./routes/banner");
const orderForUserRouter = require("./routes/orderForUser");
const categoryRouter = require("./routes/category");
const orderRouter = require("./routes/order");
const forgotPasswordRouter = require("./routes/forgotPassword");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/user", cors(), userRouter);
app.use("/banner", cors(), bannerRouter);
app.use("/product", cors(), productRouter);
app.use("/post", cors(), postRouter);
app.use("/order", cors(), orderRouter);
app.use("/forgot-password", cors(), forgotPasswordRouter);
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

app.get("/total-product", cors(), (req, res) => {
  let sql = `SELECT count(*) as 'total' FROM products`;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send(err);
    }
    res.json(rs[0]);
  });
});

app.put("/statusorder/:id", cors(), (req, res) => {
  let isPay = req.body.isPay;
  let sql = `update orders set isPay = ${isPay} where id = ${req.params.id}`;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send(err);
    }
    res.json(rs);
  });
});

app.listen(4000, () => {
  console.log(
    "SERVER ĐANG CHẠY, CHÚC MAY MẮN................................................................"
  );
});
