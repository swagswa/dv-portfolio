import React, { useState } from 'react';
import { Video, Bot, Code, X, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    category: "Visual & Marketing",
    title: "Рекламный Визуал",
    description: "Создаю рекламные ролики и контент, который выглядит дорого. Использую AI для генерации сцен и продуктов, добиваясь качества топ-референсов без бюджета киностудии.",
    icon: <Video className="w-8 h-8" />,
    tags: ["AI Video", "Content Creation", "Social Media", "Art Direction"],
    modal: {
      title: "Портфолио Визуала",
      links: [
        { label: "Открыть портфолио (Google Drive)", url: "https://drive.google.com/drive/folders/1ze6zKIzHiOCAsMvwYuhCFMowbVtDTfvA?usp=sharing" }
      ]
    }
  },
  {
    category: "Automation",
    title: "AI Агенты и Боты",
    description: "Разрабатываю умных голосовых агентов (звонки) и чат-ботов. Настраиваю сложную логику продаж, автоворонок и интеграции между сервисами для полной автоматизации рутины.",
    icon: <Bot className="w-8 h-8" />,
    tags: ["Voice AI", "Chatbots", "CRM Integrations", "Sales Logic"],
    modal: {
      title: "Связаться для заказа",
      links: [
        { label: "Написать в Telegram", url: "https://t.me/zmb4rver" }
      ]
    }
  },
  {
    category: "Development",
    title: "Веб-Разработка",
    description: "Быстро собираю лендинги и веб-приложения под конкретную задачу. Понимаю технологии изнутри, поэтому могу реализовать любую идею напрямую кодом или через No-Code связки.",
    icon: <Code className="w-8 h-8" />,
    tags: ["React", "Landing Pages", "Web Apps", "MVP"],
    modal: {
      title: "Кейсы: Лендинги",
      links: [
        { label: "Landing #1: Roma GBR", url: "https://roma-gbr.vercel.app/" },
        { label: "Landing #2: Creative Agency", url: "https://landing-dun-ten.vercel.app/" },
        { label: "Landing #3: Auto Inst", url: "https://auto-inst-landing.vercel.app/" }
      ]
    }
  }
];

const Services: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const closeModal = () => setActiveModal(null);

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
              <button 
                onClick={() => setActiveModal(index)}
                className="group relative p-8 bg-[#0f0f0f] border border-gray-900 hover:border-accent-red/50 transition-all duration-500 flex flex-col h-full cursor-pointer w-full text-left"
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
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all duration-500 ease-out"
          onClick={closeModal}
        >
          {/* Backdrop Blur Layer */}
          <div className="absolute inset-0 bg-black/60" />

          <div 
            className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg p-10 relative z-10 shadow-2xl rounded-2xl overflow-hidden animate-modal-enter"
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative Gradient Background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-red/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-red/5 blur-[80px] rounded-full" />

            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tight">
                  {services[activeModal].title}
                </h3>
                <div className="h-1 w-12 bg-accent-red mb-6" />
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-medium">
                  {services[activeModal].modal.title}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {services[activeModal].modal.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group bg-white/[0.03] border border-white/5 text-white px-6 py-5 rounded-xl font-medium text-sm tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-out-expo"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-red group-hover:bg-black transition-colors" />
                      {link.label}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-black/20 group-hover:translate-x-1 transition-all duration-500">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
                
                <button 
                  onClick={closeModal}
                  className="mt-8 text-[10px] text-gray-500 hover:text-accent-red uppercase tracking-[0.4em] transition-all duration-300 text-center w-full py-2"
                >
                  [ Закрыть окно ]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;