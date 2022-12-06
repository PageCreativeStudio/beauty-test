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

const Form = ({loaded, pinkBG}) => {
  const title = useRef(null)
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
      gsap.to(title.current, {
        scrollTrigger: {
          trigger: title.current,
        },
        opacity: 1, 
        y: 0,
        duration: 1
      })
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
    <div className={`${pinkBG ? 'bg-pink-100' : 'bg-offWhite'} py-10 lg:py-24  md:mb-24`}>
    <section className="max-w-screen-xl mx-auto px-8">
      <h3 ref={title} className="fade__text--upSoft opacity-0 tracking-wide titleText splitAnimation text-xl leading-tight md:text-7xl lg:text-6xl 2xl:text-max-6xl serif-font-light text-center mb-5 md:mb-10">Find out how our bespoke and <br/>
        personal approach can help you. <br/>Say <span className="serif-font-light-italic">‘Hello Beautiful!’</span> today
      </h3>
      <form ref={form} data-netlify="true" action="/" name="contact-form" method="post" onSubmit={handleSubmit} className="w-full">
        <input type="hidden" name="form-name" value="contact-form" />
        <input
          className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
          id="company-name"
          onChange={handleChange}
          placeholder="COMPANY NAME"
          name="company"
          type="text"
          required
        />

        <input
          className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
          id="your-name"
          placeholder="YOUR NAME"
          onChange={handleChange}
          name="name"
          required
          type="text"
        />


        <input
          className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
          id="phone-number"
          placeholder="PHONE NUMBER"
          onChange={handleChange}
          name="phone"
          type="tel"
        />

        <input
          className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
          id="email"
          placeholder="EMAIL ADDRESS"
          onChange={handleChange}
          name="eamil"
          required
          type="email"
        />

        <textarea
          className="fade__text--upSoft opacity-0 outline-none w-full mb-3 md:mb-6 p-3 md:p-6 rounded-none bg-white border-none text-black tracking-widest md:text-lg"
          id="message"
          onChange={handleChange}
          name="message"
          placeholder="TELL US ABOUT YOUR PROJECT"
          rows="8"
          required
        />

        <button className="fade__text--upSoft opacity-0 px-6 md:px-12 tracking-widest py-4 md:text-lg font-bold text-white bg-pink duration-300 hover:opacity-50 uppercase">
          SEND
        </button>
      </form>
    </section>
  </div>
  )
}


Form.propTypes = {
  loaded: PropTypes.bool,
  pinkBG: PropTypes.bool,
};


export default Form;