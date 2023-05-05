import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../contexts/Context';
import classes2 from '../../styles/Modal.module.css';
import classes from '../../styles/SingleStory.module.css';
import TextInput from '../TextInput';
import Button from './../Button';

export default function SingleStory() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [USER, setUser] = useState({});

  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  let authorName, token;
  if (user) {
    authorName = user.data.user.name;
    token = user.data.token;
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories/' + path);
      setPost(res.data.data);
      setTitle(res.data.data.title);
      setDesc(res.data.data.description);
    };
    fetchPosts();
  }, [path]);
  const path2 = post.authorID;
  useEffect(() => {
    const fetchUsername = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/users/' + path2);
      setUser(res.data.data);
    };
    fetchUsername();
  }, [path2]);

  const navigate = useNavigate();
  const showAllStory = () => {
    navigate('/stories/user/' + post.authorID);
  };
  const handleDelete = async () => {
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      await instance.delete(`http://127.0.0.1:3005/api/v1/stories/${post.id}`);
      window.location.replace('/');
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    const token = user.data.token;
    console.log(token);
    const headers = {
      'Acess-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.put(
        `http://127.0.0.1:3005/api/v1/stories/${post.id}`,
        { title, description: desc },
        { headers }
      );
      setUpdateMode(false);
      //window.location.reload();
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };
  // handling delete popup

  const [openModal, setModalOpen] = useState(false);
  return (
    <>
      <div className={classes.singleStory}>
        <div className={classes.singleStoryWrapper}>
          {updateMode ? (
            <TextInput
              type="text"
              value={title}
              className={classes.singleStoryTitleInput}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className={classes.singleStoryTitle}>
              {title}
              {authorName === USER.name && (
                <div>
                  <span>
                    <Button onClick={() => setUpdateMode(true)}>Edit</Button>
                  </span>
                  <Button
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Delete
                  </Button>
                  {openModal && (
                    <div className={classes2.modalBackground}>
                      <div className={classes2.modalContainer}>
                        <div className={classes2.titleCloseBtn}>
                          <button
                            onClick={() => {
                              setModalOpen(false);
                            }}
                          >
                            X
                          </button>
                        </div>

                        <div className={classes2.title}>
                          <h3>Are you sure you wanna delete this?</h3>
                        </div>
                        {/* <div className={classes2.body}>
                          <Illustration image={img} />
                        </div> */}
                        <div className={classes2.footer}>
                          <Button onClick={() => setModalOpen(false)} id={classes2.cancelBtn}>
                            Cancel
                          </Button>
                          <Button onClick={handleDelete}>Delete</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </h1>
          )}

          <div className={classes.singleStoryInfo}>
            <span
              title="Click to see all blogs of this user"
              className={classes.singleStoryAuthor}
              onClick={showAllStory}
            >
              Author: {USER.name}
            </span>
            <div>
              <span className={classes.singleStoryDate}>
                Created At: {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>
          {updateMode ? (
            <textarea
              className={classes.singleStoryDescInput}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <div>
              <p className={classes.singleStoryDesc}>{desc}</p>
            </div>
          )}
          {updateMode && (
            <Button className={classes.singleStoryButton} onClick={handleUpdate}>
              Update
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
