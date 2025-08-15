import React, { useState } from 'react';

const generateRef = () => {
  const timePart = Date.now().toString(36).toUpperCase();
  const randPart = Math.random().toString(36).slice(2,8).toUpperCase();
  return `REF-${timePart.slice(-6)}-${randPart}`;
};

export default function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [refNumber, setRefNumber] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!name.trim() || !complaint.trim()) {
    alert('Please enter both employee name and complaint.');
    return;
  }
  const ref = generateRef();
  
  // Browser alert with multiple lines
  alert(
    `Thanks ${name}!\nYour Complaint was Submitted.\nTransaction ID is: ${ref}`
  );

  setRefNumber(ref);  // still storing if needed for below display
  setName('');
  setComplaint('');
};


  return (
    <div style={{maxWidth:600, margin:'0 auto'}}>
      <form onSubmit={handleSubmit} className="complaint-form">
        <div style={{marginBottom:12}}>
          <label htmlFor="employeeName" style={{display:'block', marginBottom:6}}>Employee Name</label>
          <input
            id="employeeName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
            style={{width:'100%', padding:8, boxSizing:'border-box'}}
          />
        </div>

        <div style={{marginBottom:12}}>
          <label htmlFor="complaint" style={{display:'block', marginBottom:6}}>Complaint</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe the complaint..."
            rows={5}
            style={{width:'100%', padding:8, boxSizing:'border-box'}}
          />
        </div>

        <button type="submit" style={{padding:'10px 16px'}}>Submit Complaint</button>
      </form>

    
    </div>
  );
}
