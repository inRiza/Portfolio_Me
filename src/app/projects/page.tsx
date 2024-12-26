'use client';

import ProjectCard from '../components/projectCard';

const projects = [
  {
    title: "Quick Study Tool",
    description:
      "A quick study app (website) for easy and quick use to help studying much more effective. Contains to-do-list and timer feature.",
    image: "/quickstudy.png",
    techStack: [
      { skill: 'js', name: 'JavaScript' },
      { skill: 'html', name: 'HTML5' },
      { skill: 'css', name: 'CSS3' },
      { skill: 'figma', name: 'Figma' },
    ],
    previewLink: "https://quickstudyapp.vercel.app/",
    githubLink: "https://github.com/inRiza/To_Do_App-Mockup",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          previewLink={project.previewLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}
