import React from 'react';
import image from "../assets/nitish_photo.jpeg";

const Forms = () => {
  return (
    <div className="flex items-center bg-slate-800 justify-center min-h-screen bg-cover bg-center bg-blur-10" >
      <div className="bg-white bg-opacity-30 w-full md:w-[50%] p-8 rounded-md">
        <div className="flex items-center justify-center mb-6">
          <img src={image} alt="Image" className="w-16 h-16 rounded-full" />
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="text-white block mb-1">First Name:</label>
              <input type="text" id="firstName" placeholder="Enter your first name" className="w-full p-2 rounded-md bg-transparent border border-white" />
            </div>
            <div>
              <label htmlFor="lastName" className="text-white block mb-1">Last Name:</label>
              <input type="text" id="lastName" placeholder="Enter your last name" className="w-full p-2 rounded-md bg-transparent border border-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="text-white block mb-1">Phone:</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="w-full p-2 rounded-md bg-transparent border border-white" />
            </div>
            <div>
              <label htmlFor="email" className="text-white block mb-1">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" className="w-full p-2 rounded-md bg-transparent border border-white" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-white block mb-1">Message:</label>
            <textarea id="message" placeholder="Enter your message" rows="3" className="w-full p-2 rounded-md bg-transparent border border-white"></textarea>
          </div>

          <button type="submit" className="mt-4 bg-cyan-500 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
