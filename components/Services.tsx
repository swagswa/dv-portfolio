import React from 'react';
import { Video, Bot, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    category: "Visual & Marketing",
    title: "Рекламный Визуал",
    description: "Создаю рекламные ролики и контент, который выглядит дорого. Использую AI для генерации сцен и продуктов, добиваясь качества топ-референсов без бюджета киностудии.",
    icon: <Video className="w-8 h-8" />,
    tags: ["AI Video", "Content Creation", "Social Media", "Art Direction"]
  },
  {
    category: "Automation",
    title: "AI Агенты и Боты",
    description: "Разрабатываю умных голосовых агентов (звонки) и чат-ботов. Настраиваю сложную логику продаж, автоворонок и интеграции между сервисами для полной автоматизации рутины.",
    icon: <Bot className="w-8 h-8" />,
    tags: ["Voice AI", "Chatbots", "CRM Integrations", "Sales Logic"]
  },
  {
    category: "Development",
    title: "Веб-Разработка",
    description: "Быстро собираю лендинги и веб-приложения под конкретную задачу. Понимаю технологии изнутри, поэтому могу реализовать любую идею напрямую кодом или через No-Code связки.",
    icon: <Code className="w-8 h-8" />,
    tags: ["React", "Landing Pages", "Web Apps", "MVP"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Навыки & Услуги</h2>
            <p className="text-gray-400 max-w-xl">
              Комплексный подход к задачам: от визуальной упаковки до технической реализации логики бизнеса.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div 
                className="group relative p-8 bg-[#0f0f0f] border border-gray-900 hover:border-accent-red/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 text-gray-500 group-hover:text-accent-red transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  {service.category}
                </h4>
                
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider border border-gray-800 px-2 py-1 text-gray-500 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;