'use client'

import { useState } from 'react'

const phases = [
  { id: 1, name: 'Brainstorming', description: 'Starting by generating and exploring ideas, finding the absolute best approach to what the problem is. And list all the solution, execute what is best.' },
  { id: 2, name: 'Making the Design', description: 'Print the ideas by canvas, create a concept through visual and design. Helping the solution to become real by generating not only the best UI for your product but also the best UX you can get.' },
  { id: 3, name: 'Creating the Demo', description: 'Start building the sofware structure and implementing the design to the real canvas. Maximizing the structure by simply using the best tech stacks for the solution and finding the best performance for the product.' },
  { id: 4, name: 'Finalizing and Polishing', description: 'Create the final product for perfection so it can ready to get deployed and used.' },
  { id: 5, name: 'Deployment', description: 'Launch the finished product.' },
]

export default function Phase() {
  const [activePhase, setActivePhase] = useState(1)

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center mb-8">
          {phases.map((phase) => (
            <button
              key={phase.id}
              className={`m-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activePhase === phase.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-200a shadow-lg'
              }`}
              onClick={() => setActivePhase(phase.id)}
            >
              {phase.name}
            </button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="flex text-xl font-semibold mb-4 items-center justify-center">{phases[activePhase - 1].name}</h3>
          <p className="flex justify-center items-center text-center text-gray-600">{phases[activePhase - 1].description}</p>
        </div>
      </div>
    </section>
  )
}

