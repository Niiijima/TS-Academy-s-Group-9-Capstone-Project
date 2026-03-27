// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contact: "",
    friend: false,
    tsAcademy: false,
    others: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been submitted.");

    setFormData({
      fullName: "",
      email: "",
      city: "",
      phone: "",
      message: "",
      contact: "",
      friend: false,
      tsAcademy: false,
      others: false
    });
  };

  return (
    <section className="section light-bg">
      <div className="container">
        <div className="form-text">
          <h2>Have Questions About Planetary Science?</h2>
          <p className="collected-analyzed">
            Interested in learning more about space, astronomy,
            or how planetary data is collected and analyzed? <br />
            Reach out and we'll get back to you.
          </p>

          <form className="form-grid" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
              <option value="Port Harcourt">Port Harcourt</option>
              <option value="Kano">Kano</option>
              <option value="Ibadan">Ibadan</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
         <div className="desktop-only">
             <textarea
                className="message-area"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                >

              </textarea>
              </div>

             <div className="contact-options">
                <h3>How should we contact you?</h3>
                <div className="checkbox-grid"> 
                  <label>
                    <input
                      type="radio"
                      name="contact"
                      value="phone"
                      onChange={handleChange}
                    />
                    Phone
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="contact"
                      value="email"
                      onChange={handleChange}
                    />
                       Email
                   </label>

                    <label>
                      <input
                        type="radio"
                        name="contact"
                        value="both"
                        onChange={handleChange}
                      />
                      Both
                    </label>
               </div>

                <h3>How did you hear about us?</h3>
                <div className="checkbox-grid-first">
                  <label>
                    <input
                      type="checkbox"
                      name="friend"
                      checked={formData.friend}
                      onChange={handleChange}
                    />
                    Friend
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="tsAcademy"
                      checked={formData.tsAcademy}
                      onChange={handleChange}
                    />
                    TS Academy
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="others"
                      checked={formData.others}
                      onChange={handleChange}
                    />
                    Others
                  </label>
                </div>
             </div>

            <button type="submit" className="btn primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}