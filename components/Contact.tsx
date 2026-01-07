import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-accent-red text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-2xl w-full">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Есть идея? <br/>
              Давай реализуем.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Я всегда открыт к интересным проектам. Если нужно быстрое, красивое и технологичное решение - пиши.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/zmb4rver" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors duration-300">
                  Telegram
                  <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="mailto:tufgvlo@gmail.com" className="inline-flex items-center justify-center gap-2 border border-black/20 bg-transparent text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-black/10 transition-colors duration-300">
                  Email Me
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-right w-full md:w-auto">
          <ScrollReveal delay={600}>
            <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Daniil Dev</p>
            <p className="text-xs opacity-50">&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;