import logo from './logo.svg';
import './App.css';

// src/App.js
import React, {useEffect, useState} from 'react';
import GitClient from './GitClient';

export default function App(){
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    GitClient.getRepositories('techiesyed')
      .then(setRepos)
      .catch(e => setErr(e.message || 'Error'))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <div>Loading…</div>;
  if(err) return <div style={{color:'red'}}>Error: {err}</div>;

  return (
    <div style={{padding:20}}>
      <h1>Repos</h1>
      <ul>{repos.map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

