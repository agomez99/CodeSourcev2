import React, { useState, useEffect } from "react";
import butter from "../../butter-client";
import PostSnippet from "../Post/PostSnippet";
import Container from "@material-ui/core/Container";
//import TextField from '@material-ui/core/TextField';
//import SearchIcon from "@material-ui/icons/Search";
//import InputAdornment from "@material-ui/core/InputAdornment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./styles.css";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  console.log("data", data);
  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return (
      <div>
        {data.data.map((post, i) => (
          <PostSnippet {...post} key={i} />
        ))}
      </div>
    );
  };

  const getReverse = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return (
      <div>
        <p>Reverse</p>
        {data.data
          .slice(0)
          .reverse()
          .map((post, i) => (
            <PostSnippet {...post} key={i} />
          ))}
      </div>
    );
  };

  const getAlphabetical = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return (
      <div>
        <p>A-Z</p>
        {data.data
          .slice(0)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((post, i) => (
            <PostSnippet {...post} key={i} />
          ))}
      </div>
    );
  };

  const getReact = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return (
      <div>
        <p>REACT </p>
        {data.data
          .filter((post) => post.tags[2].name === "CSS" || post.tags[1].name === "CSS" || post.tags[0].name.includes("CSS") )
          //.filter((post) => post.tags[0].name.includes("REACTJS") )


          .map((post, i) => (
            <PostSnippet {...post} key={i} />
          ))}
      </div>
    );
  };

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

  return (
    <div>
      <Container>
        <div>
          <div
            style={{ display: "block", float: "center", marginLeft: "100px" }}
          >
            <h1 className="blog-header">Blog Posts</h1>
            <Tabs>
              <TabList>
                <Tab>Blogs</Tab>
                <Tab>Reverse</Tab>
                <Tab>A-Z</Tab>
                <Tab>CSS</Tab>
              </TabList>
              <TabPanel>{getContent()}</TabPanel>
              <TabPanel>{getReverse()}</TabPanel>
              <TabPanel>{getAlphabetical()}</TabPanel>
              <TabPanel>{getReact()}</TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
