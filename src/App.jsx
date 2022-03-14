import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const[visible,setVisible]=useState(true)
  return (
    <div className="App">

    {visible?<Rentals/>:<AddHouse/>}
      <button className="toggleForm" onClick={() => {
        setVisible(visible ? false : true);
      }}>
       
       
        {/* Show text Add House or Show Rentals based on state */}
       {visible?"AddHouse":"Show Rentals"}
        
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;