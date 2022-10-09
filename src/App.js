import './App.css';
import React from "react"
import TravelCard from "./components/TravelCard.js"
import data from "./data"
import Navbar from './components/Navbar.js';


function App() {
  console.log(data)
  const travelData = data.map(item=>{
    console.log("...item",{...item})

    return(
      
      <TravelCard {...item}/>
      
    )
  })
  return (
    <div className="App">
      <Navbar />
      {travelData}
    </div>
  );
}

export default App;
