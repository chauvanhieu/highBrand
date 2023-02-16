const express = require("express");
const router = express.Router();
const con = require("../Connection");

// domain/product
//GET BY ID
router.get("/:id", function (req, res) {
  let sql = `select * from products where id = ${req.params.id}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    res.json(results[0]);
  });
});

// GET products
router.get("/", function (req, res) {
  let sql = `select *,(select count(*) from products) as total from products`;
  const keyword = req.query.q;
  const sortColumn = req.query._sort || "id";
  const sortOrder = req.query._order || "asc";
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;
  const offset = (page - 1) * limit;
  if (keyword) {
    sql = `SELECT * FROM products WHERE 
    id LIKE '%${keyword}%' 
    or name  LIKE '%${keyword}%' 
    or createdAt  LIKE '%${keyword}%' 
    or idCategory  LIKE '%${keyword}%' 
    or price  LIKE '%${keyword}%' `;
  }
  if (req.query._categoryId) {
    sql = `select products.*,categoryproduct.id as 'idCategory',categoryproduct.name as 'nameCategory' from products join categoryproduct on categoryproduct.id=products.idCategory where idCategory = ${req.query._categoryId}`;
  }
  sql += ` ORDER BY ${sortColumn} ${sortOrder} LIMIT ${offset}, ${limit}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

router.post("/", function (req, res) {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    desciption: req.body.description,
    idCategory: req.body.idCategory,
    image: req.body.image,
  };
  let sql = `INSERT INTO products( name, price, idCategory,image,createdAt,description, isUsing) VALUES( '${newProduct.name}', ${newProduct.price}, ${newProduct.idCategory},'${newProduct.image}', now(),'${newProduct.desciption}', 1)`;

  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

router.delete("/:id", function (req, res) {
  let sql = `update products set isusing=0  where id=${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

router.put("/:id", function (req, res) {
  let oldProduct = {};
  let sqlGetOldProduct = `SELECT * from products where id=${req.params.id}`;
  con.query(sqlGetOldProduct, function (err, results) {
    if (err) {
      return res.send(err);
    }
    oldProduct = results[0];
  });
  const newProduct = {
    name: req.body.name || oldProduct.name,
    price: req.body.price || oldProduct.price,
    description: req.body.description || oldProduct.description,
    isUsing: req.body.isUsing || oldProduct.isUsing,
    idCategory: req.body.idCategory || oldProduct.idCategory,
    image: req.body.image || oldProduct.image,
  };

  let sql = `UPDATE products SET name='${newProduct.name}',price=${
    newProduct.price
  },image='${newProduct.image}',idCategory=${
    newProduct.idCategory
  },description='${newProduct.description}',isUsing=${Number(
    newProduct.isUsing
  )} WHERE id=${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

module.exports = router;
