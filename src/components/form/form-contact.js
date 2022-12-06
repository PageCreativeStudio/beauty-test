import React, {useRef, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import gsap from 'gsap';
import { navigate } from "gatsby";


// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

const FormContact = ({loaded}) => {
  const form = useRef(null)
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
    // On success, redirect to the custom success page using Gatsby's `navigate` helper function
    .then(() => navigate("/thank-you/"))
    // On error, show the error in an alert
    .catch(error => alert(error));
  };

  useEffect(() => {
    if (loaded) {
      gsap.to(form.current.children, {
        scrollTrigger: {
          trigger: form.current,
        },
        opacity: 1, 
        y: 0,
        duration: 1,
        stagger: { // wrap advanced options in an object
          each: .25,
          ease: "power3.easeOut",
        }
      })
    }
  }, [loaded])
  return (
    <form ref={form} data-netlify="true" action="/" name="contact-form" method="post" onSubmit={handleSubmit} className="mx-auto max-w-3xl py-10">
      <input type="hidden" name="form-name" value="contact-form" />
      <p className="fade__text--upSoft opacity-0 serif-font mb-5 md:mb-8 leading-tight uppercase text-base md:text-5xl lg:text-4/5xl 2xl:text-max-4/5xl">
      FILL OUT OUR FORM BELOW, EMAIL <br class="hidden md:block"/>OR GIVE US A CALL.
      </p>

      <input
        onChange={handleChange}
        className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
        id="company-name"
        placeholder="COMPANY NAME"
        name="company"
        type="text"
        required
      />

      <input
        onChange={handleChange}
        className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
        id="your-name"
        placeholder="YOUR NAME"
        name="name"
        required
        type="text"
      />


      <input
        onChange={handleChange}
        className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
        id="phone-number"
        placeholder="PHONE NUMBER"
        name="phone"
        type="tel"
      />

      <input
        onChange={handleChange}
        className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
        id="email"
        placeholder="EMAIL ADDRESS"
        name="eamil"
        required
        type="email"
      />

      <textarea
        onChange={handleChange}
        className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
        id="message"
        name="message"
        placeholder="TELL US ABOUT YOUR PROJECT"
        rows="8"
        required
      />

      <button className="px-6 md:px-12 tracking-widest py-4 md:text-lg font-bold text-white bg-pink duration-300 hover:opacity-50 uppercase">
        SEND
      </button>
    </form>
  )
}

export default FormContact;