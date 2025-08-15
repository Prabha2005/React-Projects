import logo from './logo.svg';
import './App.css';


import React from "react";

const sampleOffices = [
  {
    id: 1,
    name: "Alpha Workspaces",
    rent: 55000,
    address: "12 High St, Bangalore",
    image: "https://via.placeholder.com/200x120?text=Alpha"
  },
  {
    id: 2,
    name: "Beta Suites",
    rent: 75000,
    address: "99 Market Rd, Mumbai",
    image: "https://via.placeholder.com/200x120?text=Beta"
  },
  {
    id: 3,
    name: "Gamma Offices",
    rent: 60000,
    address: "7 Lakeview Ave, Chennai",
    image: "https://via.placeholder.com/200x120?text=Gamma"
  }
];

function OfficeCard({ office }) {
  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green", // inline CSS conditional
    fontWeight: "700"
  };

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: 8,
    width: 260,
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    margin: 8
  };

  return (
    <div style={cardStyle}>
      <img src={"https://img.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg"} alt={office.name} style={{ width: "100%", borderRadius: 6 }} />
      <h3>{office.name}</h3>
      <p style={{ margin: "6px 0" }}>{office.address}</p>
      <p style={rentStyle}>₹ {office.rent.toLocaleString()}</p>
    </div>
  );
}

function App() {
  const container = { display: "flex", flexWrap: "wrap", gap: 12, padding: 16 };

  return (
    <div>
      <header style={{ padding: 16 }}>
        <h1>Office Space Rental</h1>
        <p>List of offices (rent &gt;= 60000 shows green; &lt;60000 shows red)</p>
      </header>

      <section style={container}>
        {sampleOffices.map((office) => (
          <OfficeCard office={office} key={office.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
