import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact hero">
        <div className="content">
          <p>Edmonton Alberta</p>
          <p>LOREM IPSUM</p>
          <p>Muslim Mental Wealth</p>
          <p>LOREM IPSUM</p>
          <button href="/" className="button">
            ABOUT US
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Questions? Thought? SImply want to Connect? Contact us using the form
          below!
        </p>

        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li className="half">
                <input
                  placeholder="Subject"
                  type="subject"
                  name="subject"
                  required
                />
              </li>

              <li className="half">
                <textarea
                  placeholder="Message"
                  type="message"
                  name="message"
                  required
                />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
