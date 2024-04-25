import React, { useState } from 'react';
import axios from 'axios';
import FormImage from '../../assets/28885.jpg'

const UsersForm = () => {
  const [values, setValues] = useState({
    FullName: '',
    EmailAdress: '',
    Phone: '',
    Address: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('url',{values})
    .then(res => console.log("registered Succesfully"))
    .catch(err => console.log(err))
    
    console.log(values);
  };

  return (
    <div className='ml-6 mt-28 mb-12'>
      
    <div className="flex mt-7">
      <div className="w-1/2 rounded-sm">
        {/* Image Section */}
        <div className="h-full flex items-center justify-center">
          <img
            src={FormImage} // Replace with the path to your image
            alt="Registration Image"
            className=" object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
      
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg -ml-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">TrashApp < br /> User Registration</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 p-2" >
            <div>  
            <label className='p-2 mb-7'>Full Name</label>
              <input
                id="FullName"
                name="FullName"
                type="text"
                autoComplete="FullName"
                required
                value={values.FullName}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                placeholder="FullName"
              />
              <label>
                Email Address
              </label>
              <input
                id="EmailAdress"
                name="EmailAdress"
                type="text"
                autoComplete="EmailAdress"
                required
                value={values.EmailAdress}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                placeholder="EmailAdress"
              />
              <label>
                Phone Number
              </label>
              <input
                id="Phone"
                name="Phone"
                type="text"
                autoComplete="Phone"
                required
                value={values.Phone}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-3"
                placeholder="Phone"
              />
              <label >
                Full Adress
              </label>
              <input
                id="Address"
                name="Address"
                type="text"
                autoComplete="Address"
                required
                value={values.Address}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-3"
                placeholder="Full Adress"
              />
             
              
            </div>
            {/* Other form fields */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UsersForm;
