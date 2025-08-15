import './App.css';

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    alert(`Hello Member ${newCount}`);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = () => {
    alert('welcome');
  };

  const handleClick = () => {
    alert('I was clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amtInINR = parseFloat(amount) || 0;

    // INR → currency rates (example values; should be updated with live API)
    const rates = {
      USD: 0.012, EUR: 0.011, JPY: 1.74, GBP: 0.0093, CHF: 0.011,
      CAD: 0.016, AUD: 0.018, CNY: 0.088, INR: 1, RUB: 1.05,
      KRW: 16.0, SGD: 0.016, NZD: 0.019, HKD: 0.093, BRL: 0.066,
      ZAR: 0.21, MXN: 0.21, RON: 0.056,
      KWD: 0.0036, BHD: 0.0045, OMR: 0.0046, JOD: 0.0085,
      LBP: 1063, IRR: 506, VND: 296.5, SLL: 254.2, LAK: 243.6,
      IDR: 185.5, UZS: 146.0
    };

    const code = currency.toUpperCase();
    if (!rates[code]) {
      alert(`Unknown or unsupported currency: ${currency}`);
      return;
    }

    const converted = amtInINR * rates[code]; // convert INR → currency

    try {
      const formatted = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: code
      }).format(converted);

      alert(`Converting to ${code} Amount is ${formatted}`);
    } catch {
      alert(`Unable to format currency: ${currency}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={sayWelcome}>Say welcome</button><br />
      <button onClick={handleClick}>Click on me</button>

      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount (INR):
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label><br />
        <label>
          Currency Code:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="e.g., USD, EUR, JPY"
          />
        </label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
