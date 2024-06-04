import { useState } from 'react';
import './App.css';

export default function MyForm(){
  const [formInput, setFormInput] = useState({
    name : "",
    PhoneNumber : "",
    age : "",
    isEmployee : false,
    price : "",

  })
    return <form onSubmit={(event)=>{
      event.preventDefault();
      console.log(formInput);
    }}
    >  
    <div style={myBigDivStyle}>
    <div style={myLoanContainerStyle}>
    <div style={{
      height : "70px",
    }}>
    <h2 style={{
      width : "100%",
      height : "60%",
        color: "white",

      }}
      >Requesting a loan</h2>
        <hr style={{
      width : "90%"
    }}
    />
    </div>
  
    <div
    >
      {/* Name */}
      <div style={{  height : "50px", }}>
        <label  style={{color : "white"}}> 
            Name :
      <input value={formInput.name} 
      onChange={(event)=>{
        setFormInput({...formInput, name : event.target.value})
      }} style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
      </div>
      {/* phone NUmber */}
   <div style={{  height : "50px" }}>
        <label  style={{color : "white"}}>
            Phone Number : 
   <input value={formInput.PhoneNumber} 
   onChange={(event)=>{
    setFormInput({...formInput, PhoneNumber : event.target.value})
   }}
   style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
   </div>
   {/* AGE */}
   <div style={{ height : "60px" }}>
        <label  style={{color : "white"}}>
            Age :
   <input value={formInput.age} 
     onChange={(event)=>{
      setFormInput({...formInput, age : event.target.value})
     }}
   style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
   </div>
   {/* EMPLOYE CHECKBOX */}
   <p style={{color : "yellow"}}>Are u an employe ?</p>
   <div>
   <input type="checkbox" checked={formInput.isEmployee} 
   onChange={(event)=>{
    console.log(event.target.checked , " is the value of the checkbox")
    setFormInput({...formInput, isEmployee : event.target.value})
   }}
    className="customCheckboxStyle"/>
   </div>
   <label>Salary</label>
    </div>
   <select value={formInput.price}
    onChange={(event)=>{
      setFormInput({...formInput , price : event.target.value})
    }}
    style={{
    width : "98%",
    marginBottom : "15px",
    marginTop :"10px",
    height : "30px",
   }}>
    <option>1000$</option>
    <option>2000$</option>
    <option>500$</option>
   </select>

   <button>Submitt</button>
    </div>
  </div>
  </form> 
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
  const hrStyle = {
    border: 0,
    height: "1px",
    backgroundColor: "white",
    margin: "20px 0", // Adj
  }
  const customCheckboxStyle = {
    width: "30px", // Adjust width as needed
    height: "30px", // Adjust height as needed
  };