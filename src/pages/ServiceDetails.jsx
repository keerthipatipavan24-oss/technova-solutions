import { useParams, Link } from "react-router-dom";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { serviceName } = useParams();

  const serviceData = {
    "web-development": {
      title: "Web Development",
      description:
        "We build modern, responsive, and high-performance websites that help businesses establish a strong digital presence.",
      points: [
        "Business websites",
        "E-commerce applications",
        "Responsive web applications",
        "Website maintenance",
      ],
    },

    "mobile-development": {
      title: "Mobile Development",
      description:
        "We create user-friendly mobile applications that provide reliable experiences across different devices.",
      points: [
        "Android applications",
        "iOS applications",
        "Cross-platform applications",
        "Mobile app maintenance",
      ],
    },

    "cloud-solutions": {
      title: "Cloud Solutions",
      description:
        "We provide scalable cloud solutions that help businesses manage applications, infrastructure, and data efficiently.",
      points: [
        "Cloud migration",
        "Cloud infrastructure",
        "Application deployment",
        "Cloud security",
      ],
    },

    "ui-ux-design": {
      title: "UI/UX Design",
      description:
        "We design simple and engaging digital experiences that focus on usability and customer needs.",
      points: [
        "User research",
        "Wireframes",
        "Interface design",
        "Design systems",
      ],
    },
  };

  const service = serviceData[serviceName];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-details-page">

      <section className="service-details-hero">
        <p className="section-subtitle">OUR EXPERTISE</p>

        <h1>{service.title}</h1>

        <p>
          {service.description}
        </p>
      </section>

      <section className="service-details-content">

        <h2>What We Provide</h2>

        <div className="service-features">
          {service.points.map((point) => (
            <div className="service-feature" key={point}>
              <span>✓</span>
              <p>{point}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="service-contact-btn">
          Discuss Your Project
        </Link>

      </section>

    </div>
  );
} 