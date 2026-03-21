// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    friend: false,
    tsAcademy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
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
      friend: false,
      tsAcademy: false
    });
  };

  return (
    <section className="section light-bg">
      <div className="container">
        <h2>Have Questions About Planetary Science?</h2>
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
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="friend"
                checked={formData.friend}
                onChange={handleChange}
              />{" "}
              Friend
            </label>
            <label>
              <input
                type="checkbox"
                name="tsAcademy"
                checked={formData.tsAcademy}
                onChange={handleChange}
              />{" "}
              TS Academy
            </label>
          </div>

          <button type="submit" className="btn primary">Submit</button>
        </form>
      </div>
    </section>
  );
}