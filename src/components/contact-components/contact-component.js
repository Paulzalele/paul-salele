/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Component } from 'react'
import axios from 'axios';

import "../styles/global.css"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class ContactComponent extends Component {

  state = {
    FirstName: '',
    LastName: '',
    Phone: '',
    Email: '',
    Subject: '',
    Message: ''
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    
    const {FirstName} = this.state
    const {LastName} = this.state
    const {Phone} = this.state
    const {Email} = this.state
    const {Subject} = this.state
    const {Message} = this.state
    
  
    const create_contact_response = await axios({
        method: "post",
        url: "https://newbackend-tj78o.ondigitalocean.app/contacts",
        data: {
          FirstName, LastName, Phone, Email, Subject, Message
        },
        headers: { "Content-Type": "application/json" },
      });
  

  if(create_contact_response.status === 200){
    alert("Your Message was Successfully Sent!!")
    window.location = window.location
  }
}

 render() { 
  
  const {FirstName} = this.state
  const {LastName} = this.state
  const {Phone} = this.state
  const {Email} = this.state
  const {Subject} = this.state
  const {Message} = this.state

  return (
    <div className="bg-purple-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Please feel free to contact or message me on any topic using this form and I will get back to you as soon as possible!!
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={this.handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="FirstName"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  onChange={(event) => this.setState({FirstName: event.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="LastName"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  onChange={(event) => this.setState({LastName: event.target.value})}
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                
                <input
                  type="text"
                  name="phone-number"
                  id="Phone"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="+1 (469) 884-6010"
                  onChange={(event) => this.setState({Phone: event.target.value})}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="paul@paulsalele.com"
                  onChange={(event) => this.setState({Email: event.target.value})}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="Subject"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  onChange={(event) => this.setState({Subject: event.target.value})}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="Message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  onChange={(event) => this.setState({Message: event.target.value})}
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-yellow-300 bg-purple-900 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
}

export default ContactComponent;