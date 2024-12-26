import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: { skill: string; name: string }[]; // Updated to include skill and name
  previewLink: string; // URL for preview
  githubLink: string;  // URL for GitHub
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  previewLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start pb-6 mb-6 duration-200 hover:scale-105">
      {/* Project Image */}
      <div className="relative w-full sm:w-96 h-64 rounded-lg overflow-hidden mb-4 mr-10 group">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[25px] bg-white text-black text-sm font-medium transition-all hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              Preview
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[25px] bg-white text-black text-sm font-medium transition-all hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Project Details */}
      <div className="sm:w-96 text-justify flex flex-col items-center sm:items-start">
        <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* Tech Stack Icons */}
        <div className="flex gap-4">
          {techStack.map(({ skill, name }, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
              alt={`${name} icon`}
              width={32}
              height={32}
              className="rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
