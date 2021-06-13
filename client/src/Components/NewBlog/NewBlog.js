import React, { useState, useEffect } from "react";
import butter from "../../butter-client";
import PostSnippet from "../Post/PostSnippet";
import Container from "@material-ui/core/Container";
//import TextField from '@material-ui/core/TextField';
//import SearchIcon from "@material-ui/icons/Search";
//import InputAdornment from "@material-ui/core/InputAdornment";

import "./styles.css";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 20,
      });
      setData(response.data);
    } catch (e) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  );

  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return getPosts();
  };

  
  return (
    <div>
      <Container >
        <div>
          <h1 className="blog-header">Blog Posts</h1>
          {getContent()}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
