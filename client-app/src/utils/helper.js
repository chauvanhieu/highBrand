import axios from "axios";

class helper {
  static removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }
  static isName(string) {
    var re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;
    return re.test(this.removeAscent(string));
  }

  static isEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  static isPhoneNumber(number) {
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    return number.match(regexPhoneNumber) ? true : false;
  }

  static isPassword(password) {
    const regex = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/g;

    return password.match(regex) ? true : false;
  }

  static async setGioHangTam(id) {
    const res = await axios.put("http://localhost:4000/orderForUser/" + id, {
      id: id,
      isCart:
        JSON.parse(localStorage.getItem("shoppingCart")).length > 0
          ? true
          : false,
      gioHang: JSON.parse(localStorage.getItem("shoppingCart")),
    });
  }

  static getGioHang() {
    let arr = [];
    if (JSON.parse(localStorage.getItem("shoppingCart"))) {
      arr = JSON.parse(localStorage.getItem("shoppingCart"));
    }
    return arr;
  }
  static async getGioHangDTB(id) {
    const res = await axios.get("http://localhost:4000/orderForUser/" + id);
    return res.data;
  }

  static addToCart(product, iduser) {
    let shoppingCart = helper.getGioHang();
    let newProduct = { ...product, quantity: 1 };
    let alive = false;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id === newProduct.id) {
        alive = true;
        shoppingCart[i].quantity++;
        break;
      }
    }
    if (!alive) {
      shoppingCart.push(newProduct);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    helper.setGioHangTam(iduser);
    /*
    tạo biến mới là mảng của giỏ hàng lấy từ localstorage
    tạo 1 biến product copy từ product tham số và cộng thêm key quantity bằng 1
    tạo alive (biến check tồn tại)
    quét mảng giỏ hàng kiếm tra sản phẩm mới tồn tại hay chưa. nếu tồn tại thì set alive = true
    và break vòng lặp
    sử dụng if : nếu alive == false thì giỏ hàng push sản phẩm mới vào
     sau đó set lại localStorage

    */
  }

  static async getProductById(id) {
    try {
      const res = await axios.get("http://localhost:4000/product/" + id);
      if (res.status === 200 && res) {
        return res.data;
      }
    } catch (err) {
      throw err;
    }
    return null;
  }

  static async upLoadGioHangTamThoi(idUser) {
    const res = await axios.put(
      "http://localhost:4000/orderForUser/" + idUser,
      {}
    );
  }
}
export default helper;
