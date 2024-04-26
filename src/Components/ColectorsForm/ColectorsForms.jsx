import React, { useState } from 'react';
import axios from 'axios';
import FormImage from '../../assets/28885.jpg';

const ColectorsForms = () => {
  const [values, setValues] = useState({
    FullName: '',
    EmailAdress: '',
    License: '',
    Equipment: '',
    Phone: '',
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
    axios.post('url', { values })
      .then(res => console.log("registered Succesfully"))
      .catch(err => console.log(err))

    console.log(values);
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-12'>
      <div className="flex flex-col md:flex-row mt-7">
        <div className="w-full md:w-1/2 rounded-sm mb-4 md:mb-0 lg:ml-36 min-[400px]:ml-20">
          {/* Image Section */}
          <div className="h-full flex items-center justify-center -ml-16 mr-24 ">
            <img
              src={FormImage} // Replace with the path to your image
              alt="Registration Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">

          <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg md:-ml-20">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">TrashApp <br /> Pickup Agent Registration</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6 p-2" >
              <div>
                <label className='p-2 mb-3'>Full Name</label>
                <input
                  id="FullName"
                  name="FullName"
                  type="text"
                  autoComplete="FullName"
                  required
                  value={values.FullName}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Full Name"
                />
                <label>Email Address</label>
                <input
                  id="EmailAdress"
                  name="EmailAdress"
                  type="text"
                  autoComplete="EmailAdress"
                  required
                  value={values.EmailAdress}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Email Address"
                />
                <label>Phone Number</label>
                <input
                  id="Phone"
                  name="Phone"
                  type="text"
                  autoComplete="Phone"
                  required
                  value={values.Phone}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Phone"
                />

                <label>Do you have your own equipment?</label>
                <input
                  id="Equipment"
                  name="Equipment"
                  type="text"
                  autoComplete="Equipment"
                  required
                  value={values.Equipment}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Do you have your own equipment?"
                />

                <label>Do you have a valid driver's license?</label>
                <input
                  id="License"
                  name="License"
                  type="text"
                  autoComplete="License"
                  required
                  value={values.License}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Do you have a valid driver's license?"
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

export default ColectorsForms;
