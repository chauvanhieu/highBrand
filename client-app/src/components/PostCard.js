import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
function PostCard() {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.vietnambiz.vn/2020/3/20/doi-giay-tay-nam-dep-cuon-hut-15847012628691523520455.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PostCard;
