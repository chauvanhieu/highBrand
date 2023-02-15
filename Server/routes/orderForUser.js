const express = require("express");
const con = require("../Connection");
const router = express.Router();

router.get("/:userid", function (req, res) {
  let sql = `SELECT products.*, orderdetail.quantity from orderdetail  join users on users.id=orderdetail.idorder join products on products.id = orderdetail.idproduct WHERE users.id=${req.params.userid} and orderdetail.status=0`;
  con.query(sql, function (err, rusults) {
    if (err) {
      return res.send(err);
    }
    res.json(rusults);
  });
});

router.put("/:id", (req, res) => {
  let id = req.body.id;
  let gioHang = req.body.gioHang;

  let sqlDeleteDetail = `DELETE FROM orderdetail WHERE idorder=${id}`;

  con.query(sqlDeleteDetail, (err, rs) => {
    if (err) {
      return res.status(401).json(err);
    }
    if (gioHang && gioHang.length > 0) {
      gioHang.forEach((item) => {
        let sqlSetDetail = `insert into orderdetail values(${id}, ${item.id},${item.quantity},0)`;
        con.query(sqlSetDetail, (err, rs) => {
          if (err) {
            return res.status(401).json(err);
          }
        });
      });
    }
  });
});

module.exports = router;
