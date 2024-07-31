"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactForm() {
  const [activeInputBoxes, setActiveInputBoxes] = useState([])
  const form = useRef();

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // use Email js for recive messages
  const sendEmail = (e) => {
    e.preventDefault();

    // Capitalize the first letter of each word in the name
    const capitalizedName = form.current.name?.value
      ? capitalizeWords(form.current.name.value.trim())
      : '';

    // Send email to me
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_OWNER,
      {
        reply_to: form.current.email?.value,
        user_name: capitalizedName,
        user_message: form.current.message?.value,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER,
            {
              reply_to: form.current.email?.value,
              user_name: capitalizedName,
              user_message: form.current.message?.value,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          );
        },
        (error) => {
          console.log("Error sending email to owner:", error.text);
          throw error;
        }
      )
      .then(
        (result) => {
          toast.success("Message Sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset(); 
        },
        (error) => {
          console.log("Error sending auto-reply:", error.text);
          toast.error("Message sent, but failed to send auto-reply.");
        }
      )
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Ops Message not Sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <form className="contact-form" ref={form}
      onSubmit={sendEmail}>
      <div className="form-input-item mb-60">
        <label style={activeInputBoxes.includes('name') ? { color: '#FE7878' } : {}} className="input-lebel name">name *</label>
        <input
          name="name"
          className={`input-box name ${activeInputBoxes.includes('name') && 'height'} `}
          type="text"
          required
          onClick={() => setActiveInputBoxes(pre => !pre.includes('name') ? [...pre, 'name'] : pre)}
          style={activeInputBoxes.includes('name') ? { borderColor: '#FE7878' } : {}}
        />
      </div>
      <div className="form-input-item mb-60">
        <label style={activeInputBoxes.includes('gmail') ? { color: '#1B74E4' } : {}} className="input-lebel gmail">Email *</label>
        <input
          name="email"
          className={`input-box gmail ${activeInputBoxes.includes('gmail') && 'height'} `}
          type="Email"
          required
          onClick={() => setActiveInputBoxes(pre => !pre.includes('gmail') ? [...pre, 'gmail'] : pre)}
          style={activeInputBoxes.includes('gmail') ? { borderColor: '#1B74E4' } : {}}
        />
      </div>
      <div className="form-input-item mb-40">
        <label style={activeInputBoxes.includes('message') ? { color: '#CE65F3' } : {}} className="input-lebel message">Message *</label>
        <textarea
          name="message"
          className={`input-box message ${activeInputBoxes.includes('message') && 'height'} `}
          onClick={() => setActiveInputBoxes(pre => !pre.includes('message') ? [...pre, 'message'] : pre)}
          style={activeInputBoxes.includes('message') ? { borderColor: '#CE65F3' } : {}}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="form-btn-wrap">
        <button type="submit" value="Send" className="form-btn">
          submit
        </button>
      </div>
    </form>
  )
}
