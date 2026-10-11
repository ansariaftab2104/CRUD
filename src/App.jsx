import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true); // 1. create useState for Toggle.
  // console.log(toggle); // 4. print to check chaning values.

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col gap-5">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flexCards flex flex-wrap gap-5">
          <Card />
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
};

export default App;


// 5. Display changes :- {toggle ? (
//         <div className="flexCards flex flex-wrap gap-5">
//           <Card />
//         </div>
//       ) : (
//         <Form />
//       )}