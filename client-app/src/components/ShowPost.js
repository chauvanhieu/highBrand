import PostCard from "./PostCard";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";
function ShowPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const res = await axios.get(`http://localhost:4000/post`);
    setPost(res.data);
  }
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
