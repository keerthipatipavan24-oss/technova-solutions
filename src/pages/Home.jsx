import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">INNOVATIVE IT SOLUTIONS</p>

          <h1 className="hero-title">
            Building Digital Solutions
            <span> For Your Business</span>
          </h1>

          <p className="hero-description">
            We help businesses grow with modern web development, mobile
            applications, cloud solutions, and innovative digital technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>

            <button
              className="hero-btn secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-heading">
          <p className="section-subtitle">WHY CHOOSE US</p>

          <h2 className="section-title">
            Technology That Helps Your Business Grow
          </h2>

          <p className="section-description">
            We combine technology, creativity, and experience to deliver
            reliable digital solutions for modern businesses.
          </p>
        </div>

        <div className="why-cards">
          <div className="why-card">
            <h3>Experienced Team</h3>
            <p>
              Our skilled developers create reliable and scalable solutions for
              your business.
            </p>
          </div>

          <div className="why-card">
            <h3>Modern Technology</h3>
            <p>
              We use modern technologies to build fast, secure, and
              user-friendly applications.
            </p>
          </div>

          <div className="why-card">
            <h3>Customer Focused</h3>
            <p>
              We understand your requirements and create solutions designed
              around your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <p className="section-subtitle">OUR SERVICES</p>

          <h2 className="section-title">
            Solutions Designed For Your Business
          </h2>

          <p className="section-description">
            From websites to cloud solutions, we provide technology services
            that help businesses grow and succeed.
          </p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Modern and responsive websites built for performance, usability,
              and business growth.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile Development</h3>
            <p>
              User-friendly mobile applications designed for Android and iOS
              platforms.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>
              Scalable and secure cloud solutions to improve your business
              infrastructure.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Clean and engaging interfaces that provide a great experience for
              your users.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          <h2>150+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-item">
          <h2>80+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-item">
          <h2>25+</h2>
          <p>Expert Team Members</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>

          <p>
            Let's work together to turn your ideas into powerful digital
            solutions.
          </p>

          <button className="cta-btn">Get Started</button>
        </div>
      </section>
    </main>
  );
}
