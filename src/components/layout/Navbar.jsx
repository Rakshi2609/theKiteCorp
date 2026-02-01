import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Branding', href: '/branding' },
  { label: 'Creative', href: '/creative' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function KiteNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    // Force entrance animation on every mount/refresh
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );

    circleRefs.current.forEach((circle) => {
      if (circle) gsap.set(circle, { scale: 0, yPercent: 100 });
    });
  }, [location.pathname]); // Re-run subtle logic on route change

  const onEnter = (i) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "expo.out" } });
    tl.to(circleRefs.current[i], { scale: 3, yPercent: -50 }, 0)
      .to(`.text-default-${i}`, { y: -20, opacity: 0 }, 0)
      .to(`.text-hover-${i}`, { y: 0, opacity: 1 }, 0.1);
  };

  const onLeave = (i) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "expo.inOut" } });
    tl.to(circleRefs.current[i], { scale: 0, yPercent: 100 }, 0)
      .to(`.text-default-${i}`, { y: 0, opacity: 1 }, 0.1)
      .to(`.text-hover-${i}`, { y: 20, opacity: 0 }, 0);
  };

  return (
    <nav ref={navRef} className="fixed top-6 left-0 w-full z-[1000] flex justify-center px-4 pointer-events-none">
      <div 
        className="flex items-center p-1.5 rounded-full border border-gray-200/50 shadow-2xl pointer-events-auto"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.98)', // Forced solid-like transparency
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)' 
        }}
      >
        {/* Logo Icon */}
        <Link to="/" className="w-11 h-11 bg-black rounded-full flex items-center justify-center group overflow-hidden mr-2 shrink-0">
          <span className="text-white text-[10px] font-black tracking-tighter group-hover:scale-125 transition-transform duration-500 italic">TKC</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => onEnter(i)}
                onMouseLeave={() => onLeave(i)}
                className={`relative px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 ${isActive ? 'bg-black shadow-lg' : 'bg-transparent'}`}
              >
                <div 
                  ref={el => circleRefs.current[i] = el}
                  className="absolute left-1/2 top-full w-full aspect-square bg-black rounded-full -translate-x-1/2 pointer-events-none z-0"
                />

                <div className="relative z-10 text-[11px] font-black uppercase tracking-[0.15em] text-center w-20">
                  <span className={`text-default-${i} block transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {link.label}
                  </span>
                  <span className={`text-hover-${i} absolute inset-0 opacity-0 translate-y-4 text-white`}>
                    {link.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1 bg-black rounded-full ml-2"
        >
          <div className={`w-4 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-4 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-4 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-20 left-4 right-4 bg-white rounded-[2.5rem] p-4 shadow-2xl transition-all duration-500 md:hidden pointer-events-auto ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
        style={{ border: '1px solid rgba(0,0,0,0.05)' }}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className={`p-5 rounded-2xl transition-all font-black uppercase tracking-widest text-center text-xs ${location.pathname === link.href ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}