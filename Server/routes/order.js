const express = require("express");
const router = express.Router();
const con = require("../Connection");

router.get("/", function (req, res) {
  const keyword = req.query.q;
  const sortColumn = req.query._sort || "orders.id";
  const sortOrder = req.query._order || "asc";
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;
  const offset = (page - 1) * limit;

  let sql = `select  (select count(id) from orders) as 'total' ,orders.id, users.username , users.soDienThoai, users.address , orders.createdAt , orders.totalPrice,orders.isPay from orders 
join users on orders.iduser=users.id`;
  if (keyword) {
    sql = `select orders.id as 'idOrder',users.sodienthoai as 'phoneNumber', orders.createdAt as 'createdAt',users.username ,users.gioHangTam,users.address,users.email,orders.totalPrice,orders.isPay from orders 
  join users on users.id=orders.iduser WHERE id LIKE '%${keyword}%' or iduser  LIKE '%${keyword}% or createdAt  LIKE '%${keyword}% or totalPrice  LIKE '%${keyword}% or isPay  LIKE '%${keyword}%'`;
  }
  if (req.query.username) {
    sql = `select orders.id as 'idOrder',users.sodienthoai as 'phoneNumber', orders.createdAt as 'createdAt',users.username ,users.gioHangTam,users.address,users.email,orders.totalPrice,orders.isPay from orders 
    join users on users.id=orders.iduser where iduser = ${req.query.username} `;
  }
  sql += ` ORDER BY ${sortColumn} ${sortOrder} LIMIT ${offset}, ${limit}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err.code);
    }

    res.json(results);
  });
});

router.post("/", function (req, res) {
  const order = {
    idUser: req.body.idUser,
    totalPrice: req.body.totalPrice,
    ArrayProduct: req.body.ArrayProduct,
  };

  let sql = `INSERT INTO orders( iduser, createdAt, totalPrice, isPay) VALUES ('${order.idUser}',now(),${order.totalPrice},0)`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });

  if (order.ArrayProduct) {
    order.ArrayProduct.forEach(function (product) {
      let sqlInsertDetailOrder = `INSERT INTO orderdetail(idorder, idproduct, quantity, status) VALUES (${order.idUser},${product.id},${product.quantity},1)`;
      con.query(sqlInsertDetailOrder, (err, results) => {
        if (err) {
          return res.send(err.code);
        }
      });
    });
  }
});

// get order by id
router.get("/:id", function (req, res) {
  let order = {};
  let idOrder = 0;
  let sql = `SELECT * FROM orders WHERE id=${req.params.id}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err.code);
    }
    if (results.length > 0) {
      idOrder += results[0].id;
      order = {
        id: results[0].id,
        idUser: results[0].iduser,
        createdAt: results[0].createdAt,
        totalPrice: parseInt(results[0].totalPrice),
        isPay: results[0].isPay === 0 ? false : true,
        details: [],
      };

      let sqlGetDetailOrder = `SELECT products.id,products.name,products.price,products.image,orderdetail.quantity from orderdetail join products on products.id=orderdetail.idproduct WHERE orderdetail.status=1 and orderdetail.idorder = ${idOrder}`;
      con.query(sqlGetDetailOrder, (err, results) => {
        if (err) {
          return res.send(err);
        }
        order.details = results;
        res.json(order);
      });
    } else {
      res.send({ Error: "No order found" });
    }
  });
});
// update order
router.put("/:id", function (req, res) {
  const newOrder = req.body.newOrder;

  let sqlUpdateOrder = `UPDATE orders SET iduser=${newOrder.idUser},createdAt='${newOrder.createdAt}',totalPrice=${newOrder.totalPrice},isPay=${newOrder.isPay} WHERE id = ${req.params.id}`;
  con.query(sqlUpdateOrder, (err, results) => {
    if (err) {
      return res.send(err);
    }
    if (!results) {
      res.send({ Error: "No order found" });
    }
  });
  con.query(
    "delete from orderdetail where idorder = " + newOrder.id,
    (err, results) => {
      if (err) {
        return res.send(err);
      }
    }
  );
  // if (newOrder.details) {
  newOrder.details.forEach((item) => {
    let sqlUpdateDetail = `insert into orderdetail values(${req.params.id},${item.id},${item.quantity},1)`;
    con.query(sqlUpdateDetail, (err, results) => {
      if (err) {
        return res.send(err);
      }
    });
  });
  // }
});

router.delete("/:id", (req, res) => {
  // xóa chi tiết đơn hàng
  // xóa hóa đơn
  let sqlXoaChiTiet = `delete from orderdetail where orderdetail.idorder = ${req.params.id} `;
  let sqlXoaHoaDon = `delete from orders where orders.id = ${req.params.id} `;
  con.query(sqlXoaChiTiet, (err) => {
    if (err) {
      return res.send(err);
    }
    con.query(sqlXoaHoaDon, (err) => {
      if (err) {
        return res.send(err);
      }
      res.json(true);
    });
  });
});
module.exports = router;
