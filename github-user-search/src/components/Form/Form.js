import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { Reps } from '../Reps/Reps';
import { Error } from '../Error';
import s from './Form.module.scss';

const API_URL = 'https://api.github.com/users/';
const ERROR_MESSAGE = 'There no user with this name';
const MAX_REPS = 5;

export function Form() {
  const [text, setText] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setIsError(false);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}${text}`)
      .then((res) => {
        if (res.ok) {
          setIsError(false);
          return res.json();
        }
        throw new Error(`There are no user ${text}`);
      })
      .then((json) => setUserInfo(json))
      .catch(() => setIsError(true));
  };

  useEffect(() => {
    userInfo &&
      fetch(userInfo.repos_url)
        .then((res) => res.json())
        .then((json) => setUserRepos(json));
  }, [userInfo]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className={s.title}>Github user</h1>
          <input
            className={s.input}
            value={text}
            onChange={handleChange}
            placeholder="Enter profile name"
          />
          {isError && <Error errorMessage={ERROR_MESSAGE} />}
        </form>
      </div>
      {userInfo && <Card userInfo={userInfo} />}
      {userRepos && (
        <Reps userRepos={userRepos} reposQuantity={MAX_REPS} />
      )}
    </>
  );
}
