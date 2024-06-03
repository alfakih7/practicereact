import './App.css';
export default function MyForm(){
    return   <div style={myBigDivStyle}>
    <div style={myLoanContainerStyle}>
    <div style={{
      height : "70px",
    }}>
    <h2 style={{
      width : "100%",
      height : "60%",
        color: "white",
        // position :"relative",
        // bottom : "0px",
      }}
      >Requesting a loan</h2>
        <hr style={{
      width : "90%"
    }}
    />
    </div>
  
    <div
    >
      <div style={{  height : "50px", }}>
        <label  style={{color : "white"}}> 
            Name :
      <input style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
      </div>
   <div style={{  height : "50px" }}>
        <label  style={{color : "white"}}>
            Phone Number : 
   <input style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
   </div>
   <div style={{ height : "60px" }}>
        <label  style={{color : "white"}}>
            Age :
   <input style={{
        width : "99%",
        height : "25px",
        boxSizing: 'border-box',
      }}
      />
      </label>
   </div>
   <p style={{color : "yellow"}}>Are u an employe ?</p>
   <div>
   <input type="checkbox"  className="customCheckboxStyle"/>
   </div>
   <lable>Salary</lable>
    </div>
   <select style={{
    width : "98%",
   }}>
    <option>1000$</option>
    <option>2000$</option>
    <option>500$</option>
   </select>
    </div>
  </div>
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