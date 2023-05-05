import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from '../../assets/images/loan1.jpg';
import Illustration from '../Illustration';
import './home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories');
      setPosts(res.data.data);
      setloading(false);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost.postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="columnn">
        <Illustration image={img} className="cell" />
        <div>
          <div className="cell">
            <article className="article">
              <h1 className="article-title">Ready to Loan?</h1>
              <div className="article-body">
                <p>
                  Whatever the occasion or requirement, make smart financial choice with ABC Bank
                  Personal Loan to fulfill all your dreams, reach to new heights and make your day
                  to day journey of life joyful.
                </p>
                <blockquote>
                  Be it your marriage expenditure, house or office renovation, vacations abroad or
                  emergency medical needs – our Personal Loan is there to help you meet all your
                  financial needs.
                </blockquote>
                <br />
                <div>
                  <h3>Features</h3>
                  <li>Loan amount from BDT 1 lac to BDT 20 lac</li>
                  <li>Loan tenure 12 to 60 months</li>
                  <li>No hidden charges</li>
                  <li>Competitive interest rate</li>
                </div>
                <br />
                <h3>Convenienve</h3>
                <p>
                  We prioritise your time & urgency. That is why we have a wide range of channels
                  where you can apply for a Personal Loan. Just visit any of our branches or simply
                  call our Client Centre.
                </p>
                <br />
                <h3>Peace of mind</h3>
                <p>
                  You have the option to avail insurance coverage for your Personal Loan and leave
                  your loved ones at peace. Leading Insurance providers will take care of your
                  repayment in the event of un-foreseeable incidents.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
