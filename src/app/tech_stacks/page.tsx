'use client';

export default function TechStacks() {
  const techStackIcons = [
    { skill: 'react', name: 'React' },
    { skill: 'nextjs', name: 'Next.js' },
    { skill: 'tailwind', name: 'Tailwind CSS' },
    { skill: 'js', name: 'JavaScript' },
    { skill: 'ts', name: 'TypeScript' },
    { skill: 'html', name: 'HTML5' },
    { skill: 'css', name: 'CSS3' },
    { skill: 'nodejs', name: 'Node.js' },
    { skill: 'py', name: 'Python' },
    { skill: 'java', name: 'Java' },
    { skill: 'git', name: 'Git' },
    { skill: 'github', name: 'GitHub' },
    { skill: 'c', name: 'C' },
    { skill: 'vscode', name: 'VSCode' },
    { skill: 'figma', name: 'Figma' },
  ];

  return (
    <div className="relative w-2/3 h-auto bg-transparent overflow-hidden">
      {/* Grid container */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 p-6 max-w-screen-lg mx-auto">
        {techStackIcons.map(({ skill, name }, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white shadow-lg rounded-[15px] py-3 transition-transform duration-300 transform hover:scale-105"
          >
            {/* Icon Component */}
            <img
              src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
              alt={`${name} icon`}
              className="w-16 h-16"
            />
            <p className="text-black text-sm mt-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
