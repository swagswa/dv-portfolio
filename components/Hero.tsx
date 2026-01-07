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
      <div className={`absolute top-8 md:top-12 text-center z-20 transition-all duration-1000 delay-500 ease-out-expo ${loaded ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-light">
          A Creative Partner <span className="italic font-serif text-gray-400">for brands</span>
        </p>
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-light mt-1">
          ready to move forward
        </p>
      </div>

      {/* Center Visual - Abstract 3D Red Element */}
      <div className={`relative z-10 w-full max-w-4xl flex justify-center items-center h-[50vh] transition-all duration-1000 delay-300 ease-out-expo ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop" 
            alt="Abstract 3D Red Shape" 
            className="w-[80%] md:w-[60%] lg:w-[45%] object-contain animate-pulse-slow mix-blend-screen opacity-90"
            style={{ filter: 'contrast(1.2) saturate(1.2)' }}
         />
      </div>

      {/* Name - Huge Typography at Bottom */}
      <div className="absolute bottom-16 md:bottom-10 w-full text-center z-20 pointer-events-none select-none overflow-hidden">
        <h1 
          className={`font-serif text-[18vw] md:text-[22vw] leading-none text-white tracking-tighter transition-all duration-1000 ease-out-expo transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}
          style={{ textShadow: '0 0 50px rgba(0,0,0,0.8)' }}
        >
          VOLKOV
        </h1>
      </div>

      {/* Corners Navigation / Info */}
      
      {/* Bottom Left: Location/Time */}
      <div className={`absolute bottom-6 left-6 md:bottom-8 md:left-10 z-30 text-[10px] md:text-xs font-mono tracking-widest flex flex-col gap-1 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="opacity-60">LOCATION / REMOTE</span>
        <span>MOSCOW {time}</span>
      </div>

      {/* Bottom Center: Socials */}
      <div className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 gap-8 text-xs font-medium tracking-widest uppercase transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300">Telegram</a>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300">WhatsApp</a>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300">Email</a>
      </div>

      {/* Bottom Right: Navigation */}
      <div className={`absolute bottom-6 right-6 md:bottom-8 md:right-10 z-30 flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" className="hover:text-accent-red transition-colors duration-300">Home</a>
        <a href="#work" className="hover:text-accent-red transition-colors duration-300">Work</a>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300">Contact</a>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute top-1/2 left-4 md:left-10 -translate-y-1/2 text-2xl font-bold transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        A
      </div>
      <div className={`absolute top-1/2 right-4 md:right-10 -translate-y-1/2 text-2xl font-bold transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        (R)
      </div>

    </section>
  );
};

export default Hero;