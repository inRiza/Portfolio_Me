'use client';

import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        const particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const numParticles = 200;
        const maxSpeed = 0.2; 
        const particleSize = 1.2;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 2 * maxSpeed - maxSpeed,
                    vy: Math.random() * 2 * maxSpeed - maxSpeed,
                });
            }
        };

        const drawParticle = (x: number, y: number) => {
            ctx.beginPath();
            ctx.arc(x, y, particleSize, 0, Math.PI * 1);
            ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
            ctx.fill();
        };

        const moveParticles = () => {
            for (const particle of particles) {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
                if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const particle of particles) {
                drawParticle(particle.x, particle.y);
            }

            moveParticles();
            requestAnimationFrame(render);
        };

        createParticles();
        render();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
};

export default InteractiveBackground;
