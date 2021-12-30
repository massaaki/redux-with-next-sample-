import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchposts } from "store/actions/postAction";




export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchposts())
  }, []);


  return (
    <>
      <h1>Posts list</h1>
      {posts && posts.map(post => (
        <h2 key={post}>{post}</h2>
      ))}
    </>
  )
}