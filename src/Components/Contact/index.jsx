import React from 'react'
import Input from '../../ReUseable/Input'


export default function Contact() {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#0c988a]">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#0c988a]">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block border-none  text-[#0c988a] font-bold mb-2 " for="name">Name</label>
                <Input className="appearance-none border rounded w-full py-2 px-3  text-[#0c988a] leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
              </div>
              <div className="mb-4">
                <label className="block  text-[#0c988a] font-bold mb-2" for="email">Email</label>
                <Input className="appearance-none border rounded w-full py-2 px-3  text-[#0c988a] leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
              </div>
              <div className="mb-4">
                <label className="block  text-[#0c988a] font-bold mb-2" for="message">Message</label>
                <textarea className="appearance-none border rounded w-full py-2 px-3  text-[#0c988a] leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#0c988a]">Visit Us</h3>
            <p className="mb-4 text-[#0c988a] font-black">Street 06</p>
            <p className="mb-4 text-[#0c988a] font-black">Malir,Karachi 12345</p>
            <p className="mb-4 text-[#0c988a] font-black">Phone: 555-555-5555</p>
            <p className="mb-4 text-[#0c988a] font-black">Email: info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
