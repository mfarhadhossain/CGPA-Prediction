import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import '../../styles/write.css';

export default function PostStory() {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDesc] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      authorID: user.data.user.id,
      title,
      topic,
      difficulty,
      description,
    };
    const token = user.data.token;
    try {
      //console.log(`before axios post story`);
      //console.log(newPost);
      const instance = axios.create({
        headers: {
          'Acess-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await instance.post('http://127.0.0.1:3005/api/v1/stories', newPost);
      console.log(`printing ` + res);
      window.location.replace('http://localhost:3000/stories/user/' + user.data.user.id);

      //console.log(`after axios post story`);
    } catch (err) {
      //console.log(`something went wrong`);
    }
  };
  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Topic"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Difficulty"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setDifficulty(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="write tutorial here..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
