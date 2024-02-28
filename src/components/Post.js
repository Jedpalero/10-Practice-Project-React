import { useEffect, useRef, useState } from "react";

const Post = ({ id }) => {
  const [post, setPost] = useState("");
  const abortControllerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // using javascipt(.then) fetching
  // useEffect(() => {
  //   abortControllerRef.current?.abort();
  //   abortControllerRef.current = new AbortController();

  //   try {
  //     fetch(`https://dummyjson.com/posts/${id}`, {
  //       signal: abortControllerRef.current?.signal,
  //     })
  //       .then((resolve) => resolve.json())
  //       .then((data) => setPost(data.body));
  //   } catch (error) {
  //     if (error.name === "AbortError") {
  //       console.log("Aborted");
  //       return;
  //     }
  //   }
  // }, [id]);

  // using async and await fetching
  useEffect(() => {
    const fetchPosts = async () => {
      // request has been aborted after requesting a next one is fired;
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`, {
          signal: abortControllerRef.current?.signal,
        });
        const posts = await response.json();
        setPost(posts.body);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>{post}</div>;
};

export default Post;
