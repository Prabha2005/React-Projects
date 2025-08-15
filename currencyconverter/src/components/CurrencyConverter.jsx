// src/components/CurrencyConvertor.jsx
import React, { useState } from 'react';

export default function CurrencyConvertor(){
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);
  const RATE = 0.011; // example rate — replace with live API if needed

  function handleSubmit(e){
    e.preventDefault();
    const n = parseFloat(inr) || 0;
    setEuro((n * RATE).toFixed(2));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        INR:
        <input value={inr} onChange={e => setInr(e.target.value)} />
      </label>
      <button type="submit">Convert</button>
      {euro !== null && <div>€ {euro}</div>}
    </form>
  );
}
