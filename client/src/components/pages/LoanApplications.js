import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';
import Stories from '../Stories';

export default function LoanApplications() {
  const { user } = useContext(Context);

  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(500);

  const token = user.data.token;

  useEffect(() => {
    const fetchLoanApplications = async () => {
      setloading(true);
      const instance = axios.create({
        headers: {
          'Acess-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await instance.get('http://127.0.0.1:3005/api/v1/employees/loan/');
      setPosts(res.data.data);
      setloading(false);
    };
    fetchLoanApplications();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Stories posts={currentPosts} loading={loading} />
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
    </>
  );
}
