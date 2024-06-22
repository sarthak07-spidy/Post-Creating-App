import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";

function Postlist() {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.length == 0 ? (
        <div
          className="initial"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Add some posts</h1>
        </div>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}
export default Postlist;
