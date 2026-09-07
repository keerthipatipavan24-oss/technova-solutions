import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {

const navigate = useNavigate();

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="section-subtitle">ABOUT TECHNOVA</p>

          <h1 className="about-hero-title">
            We Build Technology
            <span> That Moves Businesses Forward</span>
          </h1>

          <p className="about-hero-description">
            TechNova Solutions is a technology company focused on creating
            modern, reliable, and scalable digital solutions for businesses.
          </p>
        </div>
      </section>

      <section className="about-info-section">
        <div className="about-info-content">
          <p className="section-subtitle">WHO WE ARE</p>

          <h2 className="section-title">Your Technology Partner</h2>

          <p className="about-info-text">
            At TechNova Solutions, we help businesses use technology to solve
            real-world problems and create better digital experiences.
          </p>

          <p className="about-info-text">
            Our team works with modern technologies to build websites, mobile
            applications, cloud solutions, and user-friendly digital products.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to deliver innovative and reliable technology
            solutions that help businesses improve, grow, and succeed in the
            digital world.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Vision</h2>

          <p>
            Our vision is to become a trusted technology partner by creating
            meaningful digital experiences and long-term value for our clients.
          </p>
        </div>
      </section>

      <section className="about-why-section">
        <div className="section-heading">
          <p className="section-subtitle">WHY WORK WITH US</p>

          <h2 className="section-title">What Makes TechNova Different?</h2>

          <p className="section-description">
            We focus on quality, innovation, and long-term relationships with
            our clients.
          </p>
        </div>

        <div className="about-why-cards">
          <div className="about-why-card">
            <h3>Quality First</h3>
            <p>
              We focus on delivering reliable and high-quality digital
              solutions.
            </p>
          </div>

          <div className="about-why-card">
            <h3>Innovation</h3>
            <p>
              We use modern technologies and creative approaches to solve
              business challenges.
            </p>
          </div>

          <div className="about-why-card">
            <h3>Long-Term Partnership</h3>
            <p>
              We build strong relationships with our clients and support their
              long-term digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2>Let's Build Something Great Together</h2>

          <p>
            Have an idea or a project in mind? Our team is ready to help you
            turn it into a successful digital solution.
          </p>

          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
