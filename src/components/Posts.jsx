import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";

function Posts() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="box">
      <h2>Posts from API</h2>

      {loading && <p className="loading">Loading posts...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && items.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;