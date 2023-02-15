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
        <Button
          onClick={() => {
            addToCart(props.id);
          }}
          variant="primary"
        >
          Add to cart +
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
