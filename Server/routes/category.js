const express = require("express");
const router = express.Router();
const con = require("../Connection");

//get full
router.get("/", (req, res) => {
  const keyword = req.query.q;

  const sortColumn = req.query._sort || "id";
  const sortOrder = req.query._order || "asc";
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;

  const offset = (page - 1) * limit;

  let sql = `SELECT categoryproduct.*,(select count(id) from categoryproduct) as 'total' FROM categoryproduct `;
  if (keyword) {
    sql = `SELECT * FROM categoryproduct WHERE id LIKE '%${keyword}%' or name  LIKE '%${keyword}%'`;
  }
  sql += ` ORDER BY ${sortColumn} ${sortOrder} LIMIT ${offset}, ${limit}`;

  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err.code);
    }
    res.json(results);
  });
});

// get by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM categoryproduct where id = " + id;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err.code);
    }
    res.json(results);
  });
});

// POST
router.post("/", (req, res) => {
  const item = {
    name: req.body.name,
    isusing: req.body.isusing,
  };
  let sql = `INSERT INTO categoryproduct(name, isusing) VALUES('${
    item.name
  }',${Number(item.isusing)})`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err.code);
    }
    res.json(results);
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  let sql = `update categoryproduct set isusing = 0 where id = ${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err.code);
    }
    res.json(results);
  });
});

//PUT
router.put("/:id", (req, res) => {
  const item = {
    id: req.params.id,
    name: req.body.name,
    isusing: req.body.isusing,
  };
  let sql = `update categoryproduct set name='${item.name}' , isusing=${item.isusing} where id=${item.id} `;
  con.query(sql, function (err, results) {
    if (err) {
      console.log(err);
      return res.send(err.code);
    }
    res.json(results);
  });
});
module.exports = router;
