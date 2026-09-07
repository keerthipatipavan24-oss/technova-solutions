import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "./Projects.css";

export default function Projects() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const projects = data.slice(0, 6);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-page">

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <p className="section-subtitle">OUR WORK</p>

          <h1>
            Projects That
            <span>Make an Impact</span>
          </h1>

          <p className="projects-hero-description">
            Explore some of the digital solutions we have created to
            help businesses grow and succeed.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-list-section">

        <div className="section-heading">
          <p className="section-subtitle">OUR PROJECTS</p>

          <h2 className="section-title">
            Solutions We Have Delivered
          </h2>

          <p className="section-description">
            From web applications to cloud platforms, we build
            technology solutions that solve real business problems.
          </p>
        </div>

        {/* Search */}
        <div className="project-search">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => {
              setSearchParams({ search: e.target.value });
            }}
          />
        </div>

        {/* Loading */}
        {loading && <p>Loading projects...</p>}

        {/* Error */}
        {error && <p>{error}</p>}

        {/* No Results */}
        {!loading && !error && filteredProjects.length === 0 && (
          <p>No projects found.</p>
        )}

        {/* Projects */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="projects-list">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>

                <span className="project-category">
                  Web Development
                </span>

                <h3>{project.title}</h3>

                <p>{project.body}</p>

                <Link to="/contact" className="project-link">
                  Discuss a Similar Project 
                </Link>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="projects-cta-content">

          <h2>Have a Project in Mind?</h2>

          <p>
            Let's turn your idea into a reliable digital solution.
          </p>

          <Link to="/contact" className="projects-cta-btn">
            Start a Conversation 
          </Link>

        </div>
      </section>

    </div>
  ); 
} 