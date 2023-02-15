const express = require("express");
const router = express.Router();
const con = require("../Connection");

router.get("/", (req, res) => {
  let sql = `select * from banners`;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.json(err);
    }
    res.json(rs);
  });
});

router.post("/", (req, res) => {
  let sql = `insert into banners(url) values(${req.body.url})`;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.json(err);
    }
    res.json(rs);
  });
});

router.delete("/:id", (req, res) => {
  let sql = `delete from banners where id=${req.params.id}`;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.json(err);
    }
    res.json(rs);
  });
});

module.exports = router;
