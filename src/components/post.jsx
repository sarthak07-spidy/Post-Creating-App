import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card post-card"
      style={{
        width: "21rem",
        minWidth: "16rem",
        minHeight: "10rem",
        maxHeight: "17rem",
      }}
    >
      <div className="card-body">
        <span
          onClick={() => deletePost(post.id)}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          <AiFillDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((item) => (
          <span
            style={{ margin: "0px 3px 10px 3px" }}
            key={item}
            className="badge text-bg-primary"
          >
            {item}
          </span>
        ))}
        <div className="alert alert-info" role="alert">
          This post is reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
}
export default Post;
