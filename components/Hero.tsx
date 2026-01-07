import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    setLoaded(true);

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4">
      
      {/* Top Tagline */}
      <div className={`absolute top-8 md:top-12 text-center z-20 transition-all duration-1000 delay-500 ease-out-expo ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <p className="text-[10px] md:text-base font-light tracking-tight px-6 md:px-0">
          <span className="italic font-serif text-white">A Creative Partner</span> <span className="text-white/40">for companies and brands</span>
        </p>
        <p className="text-[10px] md:text-base font-light tracking-tight px-6 md:px-0">
          <span className="text-white/40">that decide to</span> <span className="text-white italic">move forward.</span>
        </p>
      </div>

      {/* Center Visual - Abstract 3D Red Element */}
      <div className={`relative z-10 w-full max-w-[95vw] md:max-w-[90vw] flex justify-center items-center h-[60vh] md:h-[75vh] transition-all duration-1000 delay-300 ease-out-expo ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         <img 
            src="/swag.png" 
            alt="Swag" 
            className="w-full h-full object-contain mix-blend-screen scale-110 md:scale-100"
            style={{ filter: 'contrast(1.1) saturate(1.1)' }}
         />
      </div>

      {/* Name - Huge Typography at Bottom */}
      <div className="absolute bottom-20 md:bottom-10 w-full text-center z-10 pointer-events-none select-none overflow-hidden px-4 mix-blend-difference">
        <h1 
          className={`font-serif text-[18vw] md:text-[16vw] leading-none text-white tracking-tighter transition-all duration-1000 ease-out-expo transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}
        >
          VOLKOV
        </h1>
      </div>

      {/* Corners Navigation / Info */}
      
      {/* Bottom Left: Location/Time */}
      <div className={`absolute bottom-6 left-6 md:bottom-8 md:left-10 z-50 text-[8px] md:text-xs font-sans tracking-[0.2em] flex flex-col gap-1 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="uppercase opacity-60">YEREVAN {time}</span>
      </div>

      {/* Bottom Center: Socials - Mobile Optimized */}
      <div className={`flex md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 z-50 gap-4 text-[8px] font-medium tracking-widest uppercase transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="https://t.me/zmb4rver" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent-red transition-colors duration-300 pointer-events-auto">TG</a>
        <a href="mailto:tufgvlo@gmail.com" className="text-white/60 hover:text-accent-red transition-colors duration-300 pointer-events-auto">Email</a>
      </div>

      {/* Bottom Center: Socials - Desktop */}
      <div className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-50 gap-4 text-[10px] font-medium tracking-widest uppercase transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="https://t.me/zmb4rver" target="_blank" rel="noopener noreferrer" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Telegram</a>
        <span className="opacity-30">/</span>
        <a href="mailto:tufgvlo@gmail.com" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Email</a>
        <span className="opacity-30">/</span>
        <a href="#" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Behance</a>
        <span className="opacity-30">/</span>
        <a href="#" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Linkedin</a>
      </div>

      {/* Bottom Right: Navigation */}
      <div className={`absolute bottom-6 right-6 md:bottom-8 md:right-10 z-50 flex gap-3 md:gap-6 text-[8px] md:text-xs font-medium tracking-widest uppercase transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#work" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Work</a>
        <a href="#info" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Info</a>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300 pointer-events-auto">Contact</a>
      </div>

      {/* Decorative Elements */}
      <div className={`hidden sm:block absolute top-1/2 left-4 md:left-10 -translate-y-1/2 text-xl md:text-3xl font-bold transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'} mix-blend-difference`}>
        A
      </div>
      <div className={`hidden sm:block absolute top-1/2 right-4 md:right-10 -translate-y-1/2 text-xl md:text-3xl font-bold transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'} mix-blend-difference`}>
        (Я)
      </div>

    </section>
  );
};

export default Hero;