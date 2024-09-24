import React from 'react';

const Contact = () => {
  return (
    <section className="contact py-20 bg-[#F8AC8C]" id="contact">
      <h2 className="text-4xl font-bold my-8 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <form action="#" className="max-w-4xl mx-auto text-center space-y-6">
        <div className='flex justify-between gap-5'>
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full  p-2 text-lg bg-gray-700  text-gray-300 rounded-md"
          />
           
        </div>
        <div className="flex flex-wrap justify-between gap-4">
        <input
            type="number"
            min="0"
            placeholder="Mobile Number"
            required
            className="w-full  p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
          />
        </div>
        </div>
        <textarea
          cols="30"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-2 text-lg bg-gray-700 text-gray-300 rounded-md"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="btn bg-gray-500 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-green-600"
        />
      </form>

      <div className="arrow-top m-6 flex justify-end">
        <a href="#home" className="p-2 bg-blue-500 rounded-md">
          <i className="bx bx-up-arrow-alt text-4xl text-white"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
