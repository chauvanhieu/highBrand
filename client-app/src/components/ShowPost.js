import PostCard from "./PostCard";
import Row from "react-bootstrap/Row";

function ShowPost() {
  return (
    <div className="post">
      <h1 className="text-center">BÀI VIẾT NỔI BẬT</h1>
      <Row xs={1} md={2} className="g-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Row>
    </div>
  );
}

export default ShowPost;
