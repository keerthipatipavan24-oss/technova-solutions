import { useState, useRef, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="section-subtitle">GET IN TOUCH</p>

        <h1>
          Let's Build Something
          <span>Great Together</span>
        </h1>

        <p>
          Have a project in mind? Contact us and let's discuss how we can help
          your business grow.
        </p>
      </section>

      <section className="contact-section">
        <div className="section-heading">
          <p className="section-subtitle">CONTACT US</p>

          <h2 className="section-title">Let's Start a Conversation</h2>

          <p className="section-description">
            Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              Have questions about our services or want to discuss a project?
              We'd love to hear from you.
            </p>

            <div className="contact-info-item">
              <h4>Email</h4>
              <p>info@technova.com</p>
            </div>

            <div className="contact-info-item">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-info-item">
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>

                <input
                  ref={nameInputRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label>Phone</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />

                {errors.subject && (
                  <p className="form-error">{errors.subject}</p>
                )}
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                />

                {errors.message && (
                  <p className="form-error">{errors.message}</p>
                )}
              </div>

              <button type="submit">Send Message</button>

              {submitted && (
                <p className="form-success">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
