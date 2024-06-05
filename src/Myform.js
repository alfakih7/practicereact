import { useState } from 'react';
import './App.css';

export default function MyForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    PhoneNumber: "",
    age: "",
    isEmployee: false,
    price: "",
  });

  const handleSubmission = (event) => {
    event.preventDefault();
    // Validation
    if (!isNaN(formInput.age)) {
      if (!isNaN(formInput.PhoneNumber)) {
        if (typeof formInput.name === 'string') {
          // If all inputs are valid, call the onSubmit function passed as a prop
          onSubmit(formInput);
        } else {
          alert("Name must be a string!");
        }
      } else {
        alert("Phone Number must be a number!");
      }
    } else {
      alert("Age must be a number!");
    }
  };

  return (
    <form onSubmit={handleSubmission}>
      <div style={myBigDivStyle}>
        <div style={myLoanContainerStyle}>
          <div style={{ height: "70px" }}>
            <h2 style={{ width: "100%", height: "60%", color: "white" }}>Requesting a loan</h2>
            <hr style={{ width: "90%" }} />
          </div>
  
          {/* Your form inputs */}
          <div style={{ height: "50px" }}>
            <label style={{ color: "white" }}>Name:</label>
            <input
              value={formInput.name}
              onChange={(event) => {
                setFormInput({ ...formInput, name: event.target.value });
              }}
              style={{ width: "99%", height: "25px", boxSizing: 'border-box' }}
            />
          </div>
          {/* Phone Number */}
          <div style={{ height: "50px" }}>
            <label style={{ color: "white" }}>Phone Number:</label>
            <input
              value={formInput.PhoneNumber}
              onChange={(event) => {
                setFormInput({ ...formInput, PhoneNumber: event.target.value });
              }}
              style={{ width: "99%", height: "25px", boxSizing: 'border-box' }}
            />
          </div>
          {/* Age */}
          <div style={{ height: "60px" }}>
            <label style={{ color: "white" }}>Age:</label>
            <input
              value={formInput.age}
              onChange={(event) => {
                setFormInput({ ...formInput, age: event.target.value });
              }}
              style={{ width: "99%", height: "25px", boxSizing: 'border-box' }}
            />
          </div>
          {/* Employee Checkbox */}
          <p style={{ color: "yellow" }}>Are you an employee?</p>
          <div>
            <input
              type="checkbox"
              checked={formInput.isEmployee}
              onChange={(event) => {
                setFormInput({ ...formInput, isEmployee: event.target.checked });
              }}
              className="customCheckboxStyle"
            />
          </div>
          <label>Salary</label>

          <select
            value={formInput.price}
            onChange={(event) => {
              setFormInput({ ...formInput, price: event.target.value });
            }}
            style={{ width: "98%", marginBottom: "15px", marginTop: "10px", height: "30px" }}>
            <option>1000$</option>
            <option>2000$</option>
            <option>500$</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

const myBigDivStyle = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  height: "100vh",
  width: "100vh",
  color: 'blue',
  border: "2px solid black",
  backgroundColor: "rgb(2, 0, 59)"
};

const myLoanContainerStyle = {
  boxSizing: 'border-box',
  height: "600px",
  width: "800px",
  border: "4px solid rgb(2, 0, 115)",
  borderRadius: "5%",
  backgroundColor: "rgb(2, 0, 115)",
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};
