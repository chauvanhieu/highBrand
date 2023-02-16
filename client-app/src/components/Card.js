import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import helper from "../utils/helper";
function Cards(props) {
  let navigate = useNavigate();

  async function addToCart(id) {
    if (!JSON.parse(localStorage.getItem("user"))) {
      alert("Quý khách hàng vui lòng đăng nhập để mua hàng !");
      navigate("/login");
      return;
    }
    const product = await helper.getProductById(id);
    helper.addToCart(product, JSON.parse(localStorage.getItem("user")).id);
    document.getElementById(`product-icon-` + props.id).src =
      "https://media.tenor.com/Ro13gaxiVZAAAAAC/%E6%92%AB%E3%81%A7%E3%82%8B-%E3%83%8F%E3%83%BC%E3%83%88.gif";
    setTimeout(() => {
      document.getElementById(`product-icon-` + props.id).src = "";
    }, 1000);
  }
  return (
    <Card
      className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
      style={{ padding: 20 }}
    >
      <Card.Body>
        <Link to={`/product/${props.id}`}>
          <Card.Img variant="top" src={props.image} />
          <Card.Title className="card-name">{props.name}</Card.Title>
          <Card.Text className="card-description">
            {props.description}
          </Card.Text>
          <Card.Text className="card-price">
            {props.price.toLocaleString()} vnđ
          </Card.Text>
        </Link>
        {JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).isUsing === 9 ? (
          <></>
        ) : (
          <>
            <Button
              onClick={() => {
                addToCart(props.id);
              }}
              variant="primary"
            >
              Add to cart +
            </Button>
            <span>
              <img
                id={`product-icon-` + props.id}
                style={{ width: 40 }}
                src=""
                alt=""
              />
            </span>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cards;
