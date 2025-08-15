//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight AI101 - Delhi → New York</li>
        <li>Flight BA202 - London → Mumbai</li>
      </ul>
      <p>Please login to book tickets.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <h2>Flight Booking</h2>
      <form>
        <label>
          Select Flight:
          <select>
            <option>AI101 - Delhi → New York</option>
            <option>BA202 - London → Mumbai</option>
          </select>
        </label><br />
        <label>
          Passenger Name:
          <input type="text" />
        </label><br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? <UserPage /> : <GuestPage />}

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
