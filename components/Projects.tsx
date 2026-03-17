import React from 'react';
import { MessageSquare, Car, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    num: '01',
    title: 'Senlo',
    subtitle: 'AI-ассистент в Telegram',
    description:
      'AI-агент, который работает прямо в Telegram клиента. Не бот — ассистент, которого не отличишь от живого менеджера. Отвечает за 2-3 секунды, квалифицирует лидов, передаёт горячих клиентов с контекстом.',
    role: 'Solo developer, full cycle',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Gemini API', 'RAG'],
    icon: <MessageSquare className="w-5 h-5" />,
    accent: 'from-red-600/20 via-red-900/5 to-transparent',
  },
  {
    num: '02',
    title: 'Smart Parking',
    subtitle: 'Платформа умных парковок',
    description:
      'Веб-приложение с компьютерным зрением: распознавание автомобилей, отслеживание мест, управление доступом в реальном времени.',
    role: 'Fullstack + AI integration',
    stack: ['React', 'TypeScript', 'Computer Vision', 'WebSocket'],
    icon: <Car className="w-5 h-5" />,
    accent: 'from-red-600/15 via-orange-900/5 to-transparent',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#050505] px-6 overflow-hidden">
      {/* Background ambient glow — static, no blur, use radial gradient instead */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217,40,40,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20 md:mb-28">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent-red/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent-red/80 font-medium">
                Избранные работы
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight">
              Проекты
            </h2>
          </div>
        </ScrollReveal>

        {/* Project cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="group relative">
                {/* Card — no backdrop-blur, GPU-optimized transitions */}
                <div className="relative overflow-hidden border border-white/[0.06] rounded-2xl bg-white/[0.02] transition-colors duration-700 ease-out hover:border-accent-red/20 hover:bg-white/[0.035] will-change-[border-color,background-color]">
                  {/* Hover glow — top-right corner */}
                  <div
                    className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent-red/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-[opacity]"
                  />

                  <div className="relative z-10 p-8 md:p-12 lg:p-14">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                      {/* Left column: number + title block */}
                      <div className="lg:w-5/12 flex flex-col">
                        {/* Oversized number */}
                        <div className="relative">
                          {/* Glow behind number */}
                          <div
                            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-accent-red/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-[opacity]"
                          />
                          {/* Base stroke */}
                          <span
                            className="relative font-serif text-[80px] md:text-[110px] lg:text-[130px] leading-none font-bold tracking-tighter text-transparent select-none"
                            style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)' }}
                          >
                            {project.num}
                          </span>
                          {/* Hover stroke overlay */}
                          <span
                            className="absolute inset-0 font-serif text-[80px] md:text-[110px] lg:text-[130px] leading-none font-bold tracking-tighter text-transparent select-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 will-change-[opacity]"
                            style={{ WebkitTextStroke: '1.5px rgba(217, 40, 40, 0.45)' }}
                          >
                            {project.num}
                          </span>
                        </div>

                        {/* Title + subtitle */}
                        <div className="-mt-5 md:-mt-8">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-accent-red/70 group-hover:text-accent-red transition-colors duration-500">
                              {project.icon}
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white tracking-tight group-hover:translate-x-1 transition-transform duration-700 ease-out">
                              {project.title}
                            </h3>
                            <ArrowUpRight
                              className="w-5 h-5 text-white/0 group-hover:text-accent-red/70 -translate-x-2 group-hover:translate-x-0 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out"
                            />
                          </div>
                          <p className="text-sm md:text-base text-white/30 font-light">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right column: description + meta */}
                      <div className="lg:w-7/12 flex flex-col justify-between lg:pt-8">
                        <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                          {project.description}
                        </p>

                        <div className="flex flex-col gap-5">
                          {/* Role line */}
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60" />
                            <span className="text-xs text-white/40 tracking-wide">
                              {project.role}
                            </span>
                          </div>

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] md:text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-white/[0.07] text-white/35 bg-white/[0.02] group-hover:border-accent-red/15 group-hover:text-white/50 transition-all duration-500"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-red/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
