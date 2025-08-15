// src/components/Getuser.js
import React, { Component } from 'react';
//import './Getuser.css'; // optional - create if you want styles

class Getuser extends Component {
  state = {
    loading: true,
    error: null,
    user: null,
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.randomuser.me/');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const user = data.results && data.results[0];
      this.setState({ user, loading: false });
    } catch (err) {
      this.setState({ error: err.message || 'Fetch error', loading: false });
    }
  }

  render() {
    const { loading, error, user } = this.state;

    if (loading) return <div>Loading user…</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
    if (!user) return <div>No user returned</div>;

    const title = user.name?.title || '';
    const first = user.name?.first || '';
    const img = user.picture?.large || user.picture?.medium || user.picture?.thumbnail || '';

    return (
      <div className="getuser" style={{ textAlign: 'center', marginTop: 40 }}>
        <h2>{title} {first}</h2>
        <img src={img} alt={`${title} ${first}`} style={{ borderRadius: '50%', width: 150, height: 150, objectFit: 'cover' }} />
      </div>
    );
  }
}

export default Getuser;
