const express = require("express");
const router = express.Router();
const con = require("../Connection");

router.get("/", function (req, res) {
  let sql = `select * from usersd`;
  const keyword = req.query.q;
  const sortColumn = req.query._sort || "id";
  const sortOrder = req.query._order || "asc";
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;
  const offset = (page - 1) * limit;
  if (keyword) {
    sql = `SELECT * FROM users WHERE 
  createdAt LIKE '%${keyword}%'
  or email  LIKE '%${keyword}%'
  or id  LIKE '%${keyword}%'
  or username  LIKE '%${keyword}%'
  or soDienThoai  LIKE '%${keyword}%'`;
  }
  if (req.query.username) {
    sql = `SELECT * FROM users WHERE username = '${req.query.username}'`;
  }
  sql += ` ORDER BY ${sortColumn} ${sortOrder} LIMIT ${offset}, ${limit}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

router.get("/:id", function (req, res) {
  sql = `select * from users where id= ${req.params.id}`;

  con.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    res.json(results);
  });
});

router.delete("/:id", function (req, res) {
  let sql = `update users set isusing=0  where id=${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    res.json(results);
  });
});

router.put("/:id", function (req, res) {
  let sqlGetUser = `select * from users where id=${req.params.id}`;

  con.query(sqlGetUser, function (err, results) {
    if (err) {
      return res.send(err);
    }
    if (results) {
      const newUser = {
        id: results[0].id,
        createdAt: req.body.createdAt || results[0].createdAt,
        email: req.body.email || results[0].email,
        gioHangTam: req.body.gioHangTam || results[0].gioHangTam,
        isusing: req.body.isusing || results[0].isusing,
        password: req.body.password || results[0].password,
        soDienThoai: req.body.soDienThoai || results[0].soDienThoai,
        username: req.body.username || results[0].username,
      };
      let sqlUpdateUser = `UPDATE users SET username='${newUser.username}',password='${newUser.password}', email='${newUser.email}',       gioHangTam=${newUser.gioHangTam},soDienThoai='${newUser.soDienThoai}',createdAt='${newUser.createdAt}',isUsing=${newUser.isusing} WHERE id=${req.params.id}`;
      con.query(sqlUpdateUser, (err, rs) => {
        if (err) {
          return res.send(err);
        }
        res.json(rs);
      });
    }
  });
});

router.post("/", (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    soDienThoai: req.body.soDienThoai,
    address: req.body.address,
  };
  // check trùng email:
  let sqlCheckEmail = `SELECT * from users WHERE email='${newUser.email}'`;
  con.query(sqlCheckEmail, (err, rs) => {
    if (rs.length > 0) {
      return res.json(null);
    }
    let sql =
      `INSERT INTO users( username,address, password, email, gioHangTam, soDienThoai, createdAt, isUsing) VALUES` +
      ` ('${newUser.username}','${newUser.address}','${newUser.password}','${newUser.email}',0,'${newUser.soDienThoai}',now(),1)`;

    con.query(sql, (err, rs) => {
      if (err) {
        return res.json({ message: err.message });
      }

      let sqlGetUser = `select * from users where id= ${rs.insertId}`;

      con.query(sqlGetUser, (error, results) => {
        if (error) {
          return res.status(401).json({ message: "User not found" });
        }
        return res.json(results[0]);
      });
    });
  });
});

module.exports = router;
