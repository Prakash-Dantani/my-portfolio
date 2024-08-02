"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  // Define the ref with a specific type
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure form.current is not null
    if (form.current) {
      emailjs
        .sendForm(
          "service_uwldr2l",
          "template_qxyp10b",
          form.current,
          "gtNm8x0PsH3p3ORG5" // Public key should be passed as a string
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <br />
      <label>Email</label>
      <input type="email" name="email" />
      <br />
      <label>mobile</label>
      <input type="text" name="mobile" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
