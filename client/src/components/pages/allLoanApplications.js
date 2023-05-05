import axios from 'axios';
import React, { useContext, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useLocation } from 'react-router-dom';
import approved_img from '../../assets/images/approved.png';
import onereview_img from '../../assets/images/onReview.png';
import declined_img from '../../assets/images/rejected.jpg';
import { Context } from '../../contexts/Context';
import classes from '../../styles/SingleStory.module.css';
import Illustration from '../Illustration';
import './../../styles/LoanStatus.module.css';

export default function SingleStory() {
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  //console.log('path name: ' + path);
  const [post, setPost] = useState({});
  const [USER, setUser] = useState({});

  const { user } = useContext(Context);
  const [declined, setDeclined] = useState(false);
  const [approved, setApproved] = useState(false);
  const [onReview, setOnReview] = useState(false);
  const [Default, setDefault] = useState(true);

  // let authorName, token;
  // if (user) {
  //   authorName = user.data.customer.name;
  //   token = user.data.token;
  // }

  // now we'll fetch the loanStatus using a customer service
  //console.log('before useeffect');
  //useEffect(() => {
  // console.log(user);
  const token = user.data.token;
  try {
    const fetchPosts = async () => {
      const instance = axios.create({
        headers: {
          'Acess-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await instance.get('http://127.0.0.1:3005/api/v1/customers/loan/' + path);
      //const res = await axios.get('http://127.0.0.1:3005/api/v1/customers/loan/' + path);
      console.log(res.data.data);
      const status = res.data.data.status;
      console.log(status);
      if (status === 'OnReview') setOnReview(true);
      if (status === 'approved') setApproved(true);
      if (status === 'declined') setDeclined(true);
    };
    fetchPosts();
  } catch (err) {
    console.log(err);
  }

  //}, [path]);

  //console.log('after useeffect');
  return (
    <>
      <div className={classes.singleStory}>
        {onReview === true ? <Illustration image={onereview_img} /> : ''}
        {approved ? <Illustration image={approved_img} /> : ''}
        {declined ? <Illustration image={declined_img} /> : ''}
      </div>
    </>
  );
}
