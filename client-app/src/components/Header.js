import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
function Header(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    getCategory();
  }, []);
  async function getCategory() {
    const res = await axios.get("http://localhost:4000/category");
    setCategory(res.data);
  }
  if (user !== null && user.isUsing === 9) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            VENUS-SNEAKER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Trang chủ</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/news">Bài viết</Link>
              </Nav.Link>
              <NavDropdown title="Danh mục sản phẩm" id="basic-nav-dropdown">
                {category?.map((item) => {
                  return (
                    <div key={item.id}>
                      <NavDropdown.Item>
                        <Link
                          style={{ color: "black" }}
                          to={`/category/${item.id}`}
                        >
                          {item.name}
                        </Link>
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>

              <Nav.Link
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("shoppingCart");
                }}
              >
                <Link to="/login">Đăng xuất</Link>
              </Nav.Link>

              <NavDropdown
                style={{ fontWeight: "bold" }}
                title="ADMIN"
                className="ml-4"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link style={{ color: "black" }} to={`/admin/product`}>
                    Sản phẩm
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={{ color: "black" }} to={`/admin/category`}>
                    Danh mục sản phẩm
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={{ color: "black" }} to={`/admin/orders`}>
                    Đơn hàng
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={{ color: "black" }} to={`/admin/users`}>
                    Khách hàng
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={{ color: "black" }} to={`/admin/news`}>
                    Bài viết
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontWeight: "bold" }}>
          VENUS-SNEAKER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Trang chủ</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/news">Bài viết</Link>
            </Nav.Link>

            <NavDropdown title="Danh mục sản phẩm" id="basic-nav-dropdown">
              {category?.map((item) => {
                return (
                  <div key={item.id}>
                    <NavDropdown.Item>
                      <Link
                        style={{ color: "black" }}
                        to={`/category/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </NavDropdown.Item>
                  </div>
                );
              })}
            </NavDropdown>
            {!user ? (
              <Nav.Link>
                <Link to="/login">Đăng nhập</Link>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/profile">Hồ sơ</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/cart">Giỏ hàng</Link>
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("shoppingCart");
                  }}
                >
                  <Link to="/login">Đăng xuất</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
