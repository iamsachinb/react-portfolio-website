import React, { useState } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([
    { title: 'Intern Manager', description: 'Implemented a Full Stack web application with Django, HTML and Bootstrap to manage the internships applied by students.', link: 'https://github.com/iamsachinb/InternManager.git' },
    { title: 'AI-Powered Articulated truck inspect app', description: ' The project consists of an AI-powered flutter application to help CAT technicians to summarize and make recommendations for the inspection', link: 'https://github.com/johntheajs/caterpillar_hackthon_inspection' },
  ]);

  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      setProjects([...projects, newProject]);
      setNewProject({ title: '', description: '', link: '' });
    }
  };

  const handleEditProject = (index) => {
    setEditingIndex(index);
    setNewProject(projects[index]);
  };

  const handleSaveProject = () => {
    const updatedProjects = [...projects];
    updatedProjects[editingIndex] = newProject;
    setProjects(updatedProjects);
    setEditingIndex(-1);
    setNewProject({ title: '', description: '', link: '' });
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            {editingIndex === index ? (
              <InputGroup>
                <FormControl
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
                <FormControl
                  placeholder="Project Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
                <FormControl
                  placeholder="Project Link"
                  value={newProject.link}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                />
                <Button variant="outline-secondary" onClick={handleSaveProject}>
                  Save
                </Button>
              </InputGroup>
            ) : (
              <>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </Card.Body>
                <Button variant="outline-secondary" onClick={() => handleEditProject(index)}>
                  Edit
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => handleRemoveProject(index)}>
                  Remove
                </Button>
              </>
            )}
          </Card>
        ))}
      </div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <FormControl
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <FormControl
          placeholder="Project Link"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
        />
        <Button variant="outline-secondary" onClick={handleAddProject}>
          Add Project
        </Button>
      </InputGroup>
    </section>
  );
};

export default Projects;
