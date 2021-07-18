import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/authContext/authContext'
import NewBlog from '../Components/NewBlog/NewBlog'
import Disqus from '../Components/Disqus/Disqus';
import { LikeButton } from '@lyket/react';


const BlogsPage = ({ title, content }) => {

const {getUser} = useContext(AuthContext)
  useEffect(() => {
    getUser()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <NewBlog />
      {title}
      <LikeButton
        id="how-to-reduce-footprint"
        namespace="post"
      />
      {content}
      <Disqus />
    </div>
  );
};

export default BlogsPage;