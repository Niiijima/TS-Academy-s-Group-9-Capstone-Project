import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "", // ✅ unified
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
      contactMethod: "", // ✅ consistent reset
      friend: false,
      tsAcademy: false,
      others: false
    });
  };

  const cities = [
    "Lagos",
    "Abuja",
    "Kano",
    "Ibadan",
    "Port Harcourt",
    "London",
    "New York",
    "Tokyo",
    "Paris"
  ];

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

            {/* Dynamic City Dropdown */}
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />

            {/* Contact Method */}
            <div className="contact-method">
              <p>How should we contact you?</p>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleChange}
                />
                Phone
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                />
                Email
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="both"
                  checked={formData.contactMethod === "both"}
                  onChange={handleChange}
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
                  name="others"
                  checked={formData.others}
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
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .form-text {
          text-align: center;
          margin-bottom: 20px;
        }

        .collected-analyzed {
          color: #555;
          margin-bottom: 20px;
        }

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

        select {
          width: 100%;
          padding: 12px;
          border: 1px solid #d6d6d6;
          border-radius: 8px;
          font-size: 14px;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #d6d6d6;
          border-radius: 8px;
          font-size: 14px;
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

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "fullName"
              "email"
              "city"
              "phone"
              "message"
              "contact"
              "hear"
              "btn";
          }
        }
      `}</style>
    </section>
  );
}