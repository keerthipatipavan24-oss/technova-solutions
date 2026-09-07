import { Link } from "react-router-dom";
import "./Services.css";

function ServiceCard({ title, description, path }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path}>
        Learn More
      </Link>
    </div>
  );
} 

export default function Services() {
  return (
    <div className="services-page">

      <section className="services-hero">
        <div className="services-hero-content">
          <p className="section-subtitle">WHAT WE DO</p>

          <h1>
            Technology Solutions 
            <span>Built For Your Business</span>
          </h1> 

          <p className="services-hero-description">
            We create reliable digital solutions that help businesses improve, grow, and stay competitive.
          </p> 
        </div>
      </section> 

      <section className="services-list-section">

        <div className="section-heading">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title">
            Solutions That Drive Growth
          </h2>
          
          <p className="section-description">
            From websites to cloud platforms, we provide technology services designed around your business needs.
            </p>
        </div> 
        
        <div className="services-list">
          <ServiceCard title="Web Development" description="Modern and responsive websites built for performance, usability, and business growth." path="/services/web-development" />
          <ServiceCard title="Mobile Development" description="User-friendly mobile applications designed to provide smooth experiences across devices." path="/services/mobile-development" />
          <ServiceCard title="Cloud Solutions" description="Scalable cloud solutions that help businesses manage applications, data, and infrastructure." path="/services/cloud-solutions" />
          <ServiceCard title="UI/UX Design" description="Clean and intuitive interfaces designed to make digital products simple and enjoyable to use." path="/services/ui-ux-design" /> 

        </div>
      </section>

      <section className="services-cta">

        <div className="services-cta-content">

          <h2>Have a Project in Mind?</h2>

          <p>
            Let's discuss your idea and find the right technology
            solution for your business.
          </p>
          
          <Link to="/contact" className="services-cta-btn">Talk to us</Link>
        </div>
      </section>
    </div>
  )
} 