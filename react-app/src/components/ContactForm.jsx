import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "",
    friend: false,
    tsAcademy: false
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
      contactMethod: "",
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
          />

          {/* Contact method */}
          <div className="contact-method">
            <p>How should we contact you?</p>

            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                onChange={handleChange}
                checked={formData.contactMethod === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                onChange={handleChange}
                checked={formData.contactMethod === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contactMethod"
                value="both"
                onChange={handleChange}
                checked={formData.contactMethod === "both"}
              />
              Both
            </label>
          </div>

          {/* How did you hear */}
          <div className="hear-about">
            <p>How did you hear about us?</p>

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
                name="tsAcademy"
                checked={formData.tsAcademy}
                onChange={handleChange}
              />
              Others
            </label>
          </div>

          <button type="submit" className="btn primary">
            Submit
          </button>
        </form>
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "fullName email"
            "city phone"
            "message contact"
            "message hear"
            "btn btn";
          gap: 20px;
          align-items: start;
        }

        input[name="fullName"] { grid-area: fullName; }
        input[name="email"] { grid-area: email; }
        input[name="city"] { grid-area: city; }
        input[name="phone"] { grid-area: phone; }

        textarea {
          grid-area: message;
          min-height: 180px;
          resize: none;
        }

        .contact-method {
          grid-area: contact;
        }

        .hear-about {
          grid-area: hear;
        }

        .btn.primary {
          grid-area: btn;
          padding: 12px;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 16px;
          background: linear-gradient(45deg, #ff6ec4, #7873f5);
          transition: 0.3s ease;
        }

        .btn.primary:hover {
          opacity: 0.9;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #d6d6d6;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
        }

        .contact-method label,
        .hear-about label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-right: 20px;
          margin-top: 10px;
          font-size: 14px;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .section.light-bg {
          padding: 40px 20px;
          background: #f7f9fc;
        }
      `}</style>
    </section>
  );
}