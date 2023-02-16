const express = require("express");
const router = express.Router();
const con = require("../Connection");

// domain/post

//GET
router.get("/", function (req, res) {
  const keyword = req.query.q;
  const sortColumn = req.query._sort || "id";
  const sortOrder = req.query._order || "asc";
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || 10;
  const offset = (page - 1) * limit;

  let sql = "SELECT * from posts ";
  if (keyword) {
    sql = `SELECT * FROM posts WHERE id like '%${keyword}%' 
    or content like '%${keyword}%'or createAt like '%${keyword}%' or title like '%${keyword}%' `;
  }
  sql += ` ORDER BY ${sortColumn} ${sortOrder} LIMIT ${offset}, ${limit}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.status();
    }
    res.json(results);
  });
});

router.get("/:id", function (req, res) {
  const id = req.params.id;

  let sql = "SELECT * from posts where id = " + id;
  con.query(sql, function (err, results) {
    if (err) {
      return res.status();
    }
    res.json(results);
  });
});

// DELETE
router.delete("/:id", function (req, res) {
  let sql = `update  posts set isusing = 0 where id = ${req.params.id}`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.status();
    }
    res.json(results);
  });
});

router.post("/", function (req, res) {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  const sql = `insert into posts (title, content,image, createdAt,isusing) values ('${newPost.title}', '${newPost.content}',${newPost.image}, now() , 1)`;
  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

router.put("/:id", (req, res) => {
  let sql = `update posts set content='${req.body.content}'
     ,isusing = ${req.body.isusing},  title='${req.body.title}' 
     where id=${req.params.id}`;

  con.query(sql, function (err, results) {
    if (err) {
      return res.send(err);
    }
    res.json(results);
  });
});

module.exports = router;
