import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stories from '../Stories';

import Pagination from '../Pagination';

export default function StoryByUser() {
  console.log(`story by user a asi`);
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories/user/' + id);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(`stories a dicchi`);
  return (
    <>
      <h1>This is a profile page</h1>
      <Stories posts={posts} />;
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </>
  );
}
