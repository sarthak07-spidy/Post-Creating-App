import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function Createpost() {
  const userId = useRef();
  const posttitle = useRef();
  const postContent = useRef();
  const reactions = useRef();
  const tags = useRef();

  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const Id = userId.current.value;
    userId.current.value = "";
    const title = posttitle.current.value;
    posttitle.current.value = "";
    const Content = postContent.current.value;
    postContent.current.value = "";
    const reaction = reactions.current.value;
    reactions.current.value = "";
    const tag = tags.current.value.split(" ");
    tags.current.value = "";
    addPost(Id, title, Content, reaction, tag);
  };
  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            ref={userId}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your UserId..."
          />
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={posttitle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your post's title..."
          />
          <label htmlFor="title" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postContent}
            rows="4"
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about your post..."
          />
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            ref={reactions}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Enter Number of reactions..."
          />
          <label htmlFor="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please enter your hashtags with spaces.."
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Post
        </button>
      </form>
    </>
  );
}
export default Createpost;
