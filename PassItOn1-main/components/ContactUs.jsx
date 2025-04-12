import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        { }
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md shadow-sm" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full mt-1 p-2 border rounded-md shadow-sm" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="w-full mt-1 p-2 border rounded-md shadow-sm" required></textarea>
          </div>

          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* Google Map Embed */}
        <div className="w-full h-80 md:h-full">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7505270128146!2d72.8787264751665!3d19.119676550121523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f21b1adbbb%3A0x31218c2e6f749e04!2sMulund%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645267688085!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
