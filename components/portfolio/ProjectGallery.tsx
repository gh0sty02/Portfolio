import { featuredProjects } from 'data/portfolio';
import { ProjectRecord } from './ProjectRecord';

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {featuredProjects.map((project, index) => (
        <ProjectRecord
          fullWidth={
            index === featuredProjects.length - 1 &&
            featuredProjects.length % 2 !== 0
          }
          key={project.name}
          project={project}
        />
      ))}
    </div>
  );
}
