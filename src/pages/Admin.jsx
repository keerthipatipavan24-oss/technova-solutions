import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProject,
  updateProject,
  deleteProject,
} from "../redux/ProjectSlice";
import "./Admin.css";

export default function Admin() {
  const projects = useSelector(
    (state) => state.projects.projects
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  // Create / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Project title is required";
    }

    if (!category.trim()) {
      newErrors.category = "Category is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (editId !== null) {
      dispatch(
        updateProject({
          id: editId,
          title: title,
          category: category,
        })
      );

      setEditId(null);
    } else {
      const newProject = {
        id: Date.now(),
        title: title,
        category: category,
      };

      dispatch(addProject(newProject));
    }

    setTitle("");
    setCategory("");
    setErrors({});
  };

  // Edit
  const handleEditProject = (project) => {
    setTitle(project.title);
    setCategory(project.category);
    setEditId(project.id);
    setErrors({});
  };

  // Delete
  const handleDeleteProject = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <div className="admin-page">

      {/* Header */}
      <section className="admin-header">
        <p className="section-subtitle">ADMIN PANEL</p>

        <h1>Manage Projects</h1>

        <p>
          Add and manage projects for TechNova Solutions.
        </p>
      </section>

      {/* Create / Update Form */}
      <section className="admin-form-section">
        <div className="admin-form-container">

          <h2>
            {editId !== null ? "Edit Project" : "Add New Project"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="admin-form-group">
              <label>Project Title</label>

              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter project title" />

              {errors.title && (
                <p className="admin-form-error">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="admin-form-group">
              <label>Category</label>

              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />

              {errors.category && (
                <p className="admin-form-error">
                  {errors.category}
                </p>
              )}
            </div>

            <div className="admin-form-actions">
              <button type="submit"> {editId !== null ? "Update Project" : "Add Project"}
              </button>

              {editId !== null && (
                <button type="button" className="cancel-btn" onClick={() => {
                    setEditId(null);
                    setTitle("");
                    setCategory("");
                    setErrors({});
                  }}
                >
                  Cancel
                </button>
              )}
            </div>

          </form>

        </div>
      </section>

      {/* Projects */}
      <section className="admin-projects-section">

        <div className="admin-projects-heading">
          <p className="section-subtitle">PROJECT MANAGEMENT</p>
          <h2>Projects</h2>
        </div>

        <div className="admin-projects-list">

          {projects.map((project) => (
            <div
              className="admin-project-card"
              key={project.id}
            >
              <span className="admin-project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <div className="admin-project-actions">
                <button
                  onClick={() => handleEditProject(project)}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDeleteProject(project.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
} 