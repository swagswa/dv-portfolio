import React from 'react';
import { Terminal, Zap, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3">
             <ScrollReveal>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Практический подход. <br />
                <span className="text-gray-500 italic">Понятный результат.</span>
               </h2>
               <div className="w-12 h-1 bg-accent-red mb-8"></div>
             </ScrollReveal>
          </div>

          <div className="md:w-2/3 space-y-8 text-lg text-gray-300 leading-relaxed font-light">
            <ScrollReveal delay={200}>
              <p>
                Привет, я Даниил. Я объединяю креатив и технологии. 
                В моем арсенале — глубокое понимание кода, AI-инструментов и визуального маркетинга.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                Моя суперсила — <strong className="text-white">скорость и адаптивность</strong>. 
                Я не просто "делаю сайт" или "монтирую видео", я создаю работающие инструменты для бизнеса. 
                Будь то сложная автоматизация продаж через голосового бота или стильный рекламный ролик, 
                который неотличим от дорогого продакшена.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800">
              <ScrollReveal delay={400}>
                <div className="flex flex-col gap-3">
                  <Palette className="w-6 h-6 text-accent-red" />
                  <h3 className="text-white font-medium">Visual Creator</h3>
                  <p className="text-sm text-gray-500">Генерация, монтаж, стиль.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex flex-col gap-3">
                  <Zap className="w-6 h-6 text-accent-red" />
                  <h3 className="text-white font-medium">Automation Expert</h3>
                  <p className="text-sm text-gray-500">Боты, AI-агенты, CRM.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="flex flex-col gap-3">
                  <Terminal className="w-6 h-6 text-accent-red" />
                  <h3 className="text-white font-medium">Fullstack Dev</h3>
                  <p className="text-sm text-gray-500">React, Web Apps, Logic.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;