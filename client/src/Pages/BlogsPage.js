import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/authContext/authContext'
import NewBlog from '../Components/NewBlog/NewBlog'
import Disqus from '../Components/Disqus/Disqus';


const BlogsPage = () => {

const {getUser} = useContext(AuthContext)
  useEffect(() => {
    getUser()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <NewBlog />
      <Disqus />
    </div>
  );
};

export default BlogsPage;