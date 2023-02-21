const express = require("express");
const router = express.Router();
const con = require("../Connection");
const nodemailer = require("nodemailer");
const mailer = require("../MailServer");

router.post("/", (req, res) => {
  const email = req.body.email;
  const code = Math.floor(100000 + Math.random() * 900000);
  const mailOptions = {
    from: "chauhieu.nina@gmail.com",
    to: email,
    subject: "Mã code xác nhận quên mật khẩu",
    text: `Mã code xác nhận của bạn là:  ${code}`,
  };

  let sqlGetUser = `select * from users where email='${email}'`;
  con.query(sqlGetUser, (e, r) => {
    if (e) {
      console.log(e);
      res.status(500).send({ message: "Lỗi" });
    }
    if (r.length === 0) {
      res.status(200).send({ message: "Không tìm thấy tài khoản" });
    } else {
      con.execute(`delete from otpcode where iduser = ${r[0].id}`);
      mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send("Đã xảy ra lỗi khi gửi email.");
        } else {
          let sql = `insert into otpcode(code,iduser) values('${code}', ${r[0].id})`;
          con.query(sql, (err, rs) => {
            if (err) {
              console.log(err);
              res.status(500).send("Đã xảy ra lỗi khi gửi email.");
            } else {
              return res.status(200).send({
                message: "Mã code xác nhận đã được gửi đến email của bạn.",
                isSend: true,
                iduser: r[0].id,
              });
            }
          });
        }
      });
    }
  });
});

router.put("/:iduser", (req, res) => {
  const OTPCode = req.body.OTPCode;
  let sqlGetUser = `select * from users where id = ${req.params.iduser}`;
  let sqlCheckOTP = `select * from otpcode where code = '${OTPCode}' and iduser = ${req.params.iduser}`;

  con.query(sqlCheckOTP, (err, results) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Đã sãy ra lỗi khi kiểm tra OTP" });
    } else {
      if (results && results.length > 0) {
        con.query(sqlGetUser, (e, r) => {
          if (e) {
            return res
              .status(500)
              .send({ message: "Đã sãy ra lỗi khi kiểm tra OTP" });
          } else {
            if (r && r.length > 0) {
              const mailOptions = {
                from: "chauhieu.nina@gmail.com",
                to: r[0].email,
                subject: "LẤY LẠI MẬT KHẨU",
                text: `Tài khoản của bạn là
                Email :  ${r[0].email} 
                Password : ${r[0].password}`,
              };

              mailer.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                  res.status(500).send("Đã xảy ra lỗi khi gửi email.");
                }
                con.execute("delete from otpcode where iduser = " + r[0].id);
                return res.status(200).send({ message: "Thành công" });
              });
            }
          }
        });
      } else {
        return res.status(200).send({ message: "Sai OTP" });
      }
    }
  });
});

module.exports = router;
