import React ,{useState} from "react";
import Navbar from "./App/Components/navbar/Navbar";
import Routing from "./App/Components/Router/Routing";
import "./App/stylesheets/base.scss";



const App=(props)=> {
  const [searchItem,setSearchItem]=useState('')
  return (
    <>
      <div >
        {/* <Navbar setSearchItem={setSearchItem} /> */}
        <Routing searchItem={searchItem} />
      </div>
    </>
  );
}

export default App;
