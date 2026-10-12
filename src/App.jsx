import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true); // 1. create useState for Toggle.
  // console.log(toggle); // 4. print to check chaning values.

  const [users, setUsers] = useState([]); // 1. create useState for creating users

  const deleteUser = (id) =>{ // 1. import nanoid
    const newUsers = users.filter((user)=>{user.id !== id}) // 3. filtering user 
    setUsers(newUsers) // set new user
  }
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col gap-5">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flexCards flex flex-wrap gap-5">
          {
            // 4. Card per map laga diya taaki new card bhi show ho.
            users.map((elem) => {
             return <Card users={elem} setToggle={setToggle} deleteUser={deleteUser} />; // 5. elem per props drilling ki. // 2. deleterUser ko propDrilling hui.
            })
          }
        </div>
      ) : (
        <Form setUsers={setUsers} setToggle={setToggle} /> // 8. setToggle form ke liye taaki form new user submit karte he hatt jaaye.
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
