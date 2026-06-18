import { featuredProjects } from 'data/portfolio';
import { ProjectRecord } from './ProjectRecord';

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {featuredProjects.map((project) => (
        <ProjectRecord key={project.name} project={project} />
      ))}
    </div>
  );
}
