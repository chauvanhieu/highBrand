const express = require("express");
const router = express.Router();
const con = require("../Connection");

router.post("/", (req, res, next) => {
  const account = {
    email: req.body.email,
    password: req.body.password,
  };
  // let sql = `select * from users where email='${account.email}' and password='${account.password}' and (isUsing = 1 or isUsing = 9)`;
  let sql = `select * from users where email=? and password=? and (isUsing = 1 or isUsing = 9) `;
  let user = null;
  con.query(sql, [account.email, account.password], (err, results) => {
    if (err) {
      res.status(500).json({ message: "error" });
    }
    if (results) {
      user = results[0];
    }
    if (user === null) {
      res.status(401).json({ message: "not found" });
    }
    res.json(user);
  });
});

module.exports = router;
