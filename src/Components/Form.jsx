import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({setUsers, setToggle}) => { // 2. Destucture setUsers
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {mode: "onChange"} // 10. Giving error on time.
  ); // 1. create useForm hook and useTypes.

  const formSubmit = (data) => {
    reset(); // 5. reaset()
    console.log(data);
    setUsers((prev)=>[...prev, {...data, id:nanoid()}]) // 3. formSubmit per setSubmit chalana // 2. making data and id into object.
    setToggle((prev)=>!prev) // 9. setToggle for changes.
  }; // 3. create formSubmit for clean code

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <h3 className="text-zinc-100 font-bold text-2xl">Form</h3>
      <div className="card bg-black p-1 w-80 rounded">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="p-1 text-zinc-100 flex flex-col gap-3"
          action=""
        >
          <input
            {...register("image",{
                required:"Image Url is required",
            })}
            className="w-full py-1 text-xl"
            type="text"
            placeholder="Enter Image Url"
          />
          {errors.image && (
            <p className="text-red-600 text-base">{errors.image.message}</p>
          )}
          <input
            {...register("name",{
                required:"Name is Required",
                pattern:{
                    value: /^(?!\s).*$/,
                    message: "Blank Space are Not Allowed"
                }
            })}
            className="w-full py-1 text-xl"
            type="text"
            placeholder="Enter Your Name "
          />
          {errors.name && (
            <p className="text-red-600 text-base">{errors.name.message}</p>
          )}
          <input
            {...register("email",{
                required: "Email is Required",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please Enter Valid Email"
                }
            })}
            className="w-full py-1 text-xl"
            type="email"
            placeholder="Enter Your Email "
          />
          {errors.email && (
            <p className="text-red-600 text-base">{errors.email.message}</p>
          )}
          <input
            {...register("phone", {
                required: "Phone Number is Required",
                pattern:{
                    value: /^[6-9]\d{9}$/,
                    message: "Please Enter Valid Mobile Number"

                },
                minLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                },
                maxLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                }
            })}
            className="w-full py-1 text-xl"
            type="number"
            placeholder="Enter Your Phone Number "
          />
          {errors.phone && (
            <p className="text-red-600 text-base">{errors.phone.message}</p>
          )}
          <input
            className="bg-green-700 text-white rounded p-1 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;

// 2. {...register('name')}
// // 3.  const formSubmit = (data) =>{
//     console.log(data);
//   } // 3. create formSubmit for clean code

// 4.  onSubmit={handleSubmit(formSubmit)} // inside form.
// 5.  reset() // 5. reaset() // inside formSubmit


// // 6.{...register("name",{
//                 required:"Name is Required", // Validation
//             })}
//             className="w-full py-1 text-xl"
//             type="text"
//             placeholder="Enter Your Name "
//           />
//           {errors.name && (
//             <p className="text-red-600 text-base">{errors.name.message}</p>
//           )}
// 7. {errors.name && <p className="text-red-600 text-base">Image Url is required</p>}

// 8. for Mobile Validation :- 
{/* <input
            {...register("phone", {
                required: "Phone Number is Required",
                minLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                },
                maxLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                }
            })} */}

// 9. Regex :- partten :-
{/* <input
            {...register("phone", {
                required: "Phone Number is Required",
                pattern:{ // change
                    value: /^[6-9]\d{9}$/,
                    message: "Please Enter Valid Mobile Number"

                },
                minLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                },
                maxLength: {
                    value: 10,
                    message: "Minimum 10 Digits are Required",
                }
            })} */}

// // 10.  useForm(
//     {mode: "onChange"}
//   ); // Giving errors on same time

// Form Validation Complete.