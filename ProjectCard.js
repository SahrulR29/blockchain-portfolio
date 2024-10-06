export default function ProjectCard({ project }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    );
  }
  