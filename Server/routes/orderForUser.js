const express = require("express");
const con = require("../Connection");
const router = express.Router();

router.get("/:userid", function (req, res) {
  /**
   * createdAt
   * description
   * id
   *
   */
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
  let isCart = req.body.isCart;
  let gioHang = req.body.gioHang;

  let sql = `UPDATE users SET gioHangTam= ${
    isCart ? Number(1) : Number(0)
  } where id=${id}`;

  let sqlDeleteDetail = `DELETE FROM orderdetail WHERE idorder=${id}`;

  con.query(sql, (err, rs) => {
    if (err) {
      return res.status(401).json(err);
    }
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
});

module.exports = router;
