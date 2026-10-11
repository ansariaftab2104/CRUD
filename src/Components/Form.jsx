import React from "react";

const Form = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
        <h3 className="text-zinc-100 font-bold text-2xl">Form</h3>
      <div className="card bg-black p-1 w-80 rounded">
        <form className="p-1 text-zinc-100 flex flex-col gap-3" action="">
            <input className="w-full py-1 text-xl" type="text" placeholder="Enter Your Name " />
            <input className="w-full py-1 text-xl" type="email" placeholder="Enter Your Email " />
            <input className="w-full py-1 text-xl" type="number" placeholder="Enter Your Phone Number " />
            <input className="bg-green-700 text-white rounded p-1 cursor-pointer" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
