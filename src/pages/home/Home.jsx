import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageWrapper from "../../components/layout/PageWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= HERO ENTRANCE ================= */
      gsap.from(".hero-line", {
        y: 140,
        opacity: 0,
        stagger: 0.12,
        duration: 1.3,
        ease: "expo.out",
      });

      /* ================= SECTION STAGGER (IN & OUT) ================= */
      gsap.utils.toArray(".reveal-section").forEach(section => {
        // Left animation
        gsap.fromTo(section.querySelectorAll(".reveal-left"), 
          { x: -100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          }
        );

        // Right animation
        gsap.fromTo(section.querySelectorAll(".reveal-right"), 
          { x: 100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          }
        );

        // Standard stagger reveal (up)
        gsap.fromTo(section.querySelectorAll(".reveal-item:not(.reveal-left):not(.reveal-right)"), 
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            },
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      });

      /* ================= PARALLAX CARDS ================= */
      gsap.utils.toArray(".parallax-card").forEach(card => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          y: -50,
          rotation: 2,
          ease: "none"
        });
      });

      /* ================= CARD SCALE ON SCROLL ================= */
      gsap.utils.toArray(".scale-card").forEach(card => {
        gsap.fromTo(card, 
          { scale: 0.8, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 30%",
              scrub: 1,
            },
            scale: 1,
            opacity: 1,
            ease: "power2.out"
          }
        );
      });

      /* ================= ADVANCED 3D TILT + GLOW ================= */
      document.querySelectorAll(".tilt-card").forEach(card => {
        const glow = card.querySelector(".glow");
        const shine = card.querySelector(".shine");
        const number = card.querySelector(".card-number");

        card.addEventListener("mousemove", e => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotationY: x * 15,
            rotationX: -y * 15,
            scale: 1.05,
            transformPerspective: 1200,
            duration: 0.4,
            ease: "power3.out",
          });

          if (glow) {
            gsap.to(glow, {
              x: x * 80,
              y: y * 80,
              opacity: 0.8,
              scale: 1.2,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (shine) {
            gsap.to(shine, {
              x: x * 100,
              y: y * 100,
              opacity: 0.6,
              duration: 0.3,
            });
          }

          if (number) {
            gsap.to(number, {
              x: x * 20,
              y: y * 20,
              duration: 0.4,
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "expo.out",
          });

          if (glow) {
            gsap.to(glow, { 
              opacity: 0, 
              scale: 1, 
              x: 0, 
              y: 0, 
              duration: 0.8 
            });
          }

          if (shine) {
            gsap.to(shine, { 
              opacity: 0, 
              x: 0, 
              y: 0, 
              duration: 0.8 
            });
          }

          if (number) {
            gsap.to(number, { 
              x: 0, 
              y: 0, 
              duration: 0.8 
            });
          }
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="h-[90vh] flex flex-col justify-center font-['Syne']"
      >
        <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] uppercase italic">
          <span className="block hero-line">The</span>
          <span className="block hero-line text-blue-600">Kite</span>
          <span className="block hero-line">Corp</span>
        </h1>

        <div className="flex gap-4 mt-12 hero-line font-['Montserrat']">
          <Link
            to="/contact"
            className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
          >
            Start Roadmap
          </Link>
          <div className="px-10 py-5 border border-black/20 rounded-full font-bold uppercase tracking-widest italic">
            Est. 2026
          </div>
        </div>
      </section>

      {/* ================= BRANDING ================= */}
      <section className="reveal-section py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center overflow-x-hidden">

        {/* 01 CARD - PREMIUM DESIGN */}
        <div className="reveal-left tilt-card scale-card parallax-card relative aspect-[3/4] max-w-sm rounded-[3rem] bg-gradient-to-br from-neutral-900 via-neutral-800 to-black overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] cursor-none group">
          {/* Multiple Glow Layers */}
          <div className="glow absolute inset-0 bg-blue-500/25 blur-[90px] opacity-0 pointer-events-none" />
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 pointer-events-none transform rotate-12" />
          
          {/* Animated Border */}
          <div className="absolute inset-[1px] rounded-[3rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-[2px] rounded-[3rem] bg-gradient-to-br from-neutral-900 via-neutral-800 to-black" />
          
          {/* Card Number with Enhanced Effect */}
          <span className="card-number absolute bottom-10 left-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-8xl font-black opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            01
          </span>

          {/* Inner Content Frame */}
          <div className="absolute inset-4 flex items-center justify-center border border-white/10 rounded-[2.5rem] group-hover:border-white/20 transition-colors duration-500">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-white/50 font-mono text-[10px] uppercase tracking-[0.5em] group-hover:text-white/70 transition-colors duration-500">
                Branding<br />Pillar
              </p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-12 right-12 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-75" />
        </div>

        <div className="reveal-right space-y-8 font-['Syne']">
          <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">
            Identity & <br /> Positioning
          </h2>
          <ul className="space-y-4 font-['Montserrat'] uppercase text-xs font-bold tracking-[0.2em] text-gray-400">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Brand Identity
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Brand Positioning
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Brand Consistency
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Closing & Negotiations
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CREATIVE ================= */}
      <section className="reveal-section py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center overflow-x-hidden">

        <div className="reveal-left order-2 md:order-1 text-right space-y-8 font-['Syne'] ml-auto">
          <h2 className="text-6xl font-black uppercase tracking-tighter leading-none text-blue-600 italic">
            Creative <br /> Direction
          </h2>
          <ul className="space-y-4 font-['Montserrat'] uppercase text-xs font-bold tracking-[0.2em] text-gray-400 flex flex-col items-end">
            <li className="flex items-center gap-3">
              Social Media Handles <span className="w-1.5 h-1.5 bg-black rounded-full" />
            </li>
            <li className="flex items-center gap-3">
              Visual Identity <span className="w-1.5 h-1.5 bg-black rounded-full" />
            </li>
            <li className="flex items-center gap-3">
              Print & OOH Design <span className="w-1.5 h-1.5 bg-black rounded-full" />
            </li>
            <li className="flex items-center gap-3">
              Copywriting & Storytelling <span className="w-1.5 h-1.5 bg-black rounded-full" />
            </li>
          </ul>
        </div>

        {/* 02 CARD - PREMIUM DESIGN */}
        <div className="reveal-right tilt-card scale-card parallax-card order-1 md:order-2 relative aspect-[3/4] max-w-sm rounded-[3rem] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden shadow-[0_25px_50px_-12px_rgba(59,130,246,0.6)] cursor-none group">
          {/* Multiple Glow Layers */}
          <div className="glow absolute inset-0 bg-white/25 blur-[90px] opacity-0 pointer-events-none" />
          <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none transform -rotate-12" />
          
          {/* Animated Border */}
          <div className="absolute inset-[1px] rounded-[3rem] bg-gradient-to-r from-white/30 via-blue-300/30 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-[2px] rounded-[3rem] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
          
          {/* Card Number with Enhanced Effect */}
          <span className="card-number absolute bottom-10 left-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-8xl font-black opacity-30 group-hover:opacity-60 transition-opacity duration-500">
            02
          </span>

          {/* Inner Content Frame */}
          <div className="absolute inset-4 flex items-center justify-center border border-white/15 rounded-[2.5rem] group-hover:border-white/30 transition-colors duration-500">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-gradient-to-r from-white to-blue-200 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-white/60 font-mono text-[10px] uppercase tracking-[0.5em] group-hover:text-white/80 transition-colors duration-500">
                Creative<br />Pillar
              </p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
          <div className="absolute top-12 right-12 w-1 h-1 bg-blue-200 rounded-full opacity-50 animate-pulse delay-75" />
        </div>
      </section>

      {/* ================= MARKETING ================= */}
     <section className="reveal-section py-32 font-['Syne'] overflow-x-hidden">
        <div className="reveal-item mb-20 text-center">
          <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none">
            Marketing
          </h2>
          <p className="font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mt-4">
            Growth • Scale • Reach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "SEO", tag: "Search Visibility", side: "reveal-left", color: "from-emerald-500 to-teal-600" },
            { title: "Performance", tag: "Paid Growth", side: "reveal-left", color: "from-orange-500 to-red-600" },
            { title: "PR", tag: "Brand Authority", side: "reveal-right", color: "from-purple-500 to-pink-600" },
            { title: "Influencer", tag: "Cultural Reach", side: "reveal-right", color: "from-blue-500 to-indigo-600" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.side} tilt-card scale-card relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] cursor-none group overflow-hidden hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-500`}
            >
              {/* Background Glow */}
              <div className={`glow absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-[60px] pointer-events-none group-hover:opacity-10 transition-opacity duration-700`} />
              <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent opacity-0 pointer-events-none transform rotate-45 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <div className={`absolute inset-[1px] rounded-[2rem] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              <div className="absolute inset-[2px] rounded-[2rem] bg-white" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-black text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-500`}>
                    Strategy 0{i + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 animate-pulse`} />
                </div>
                
                <h3 className="text-gray-900 text-xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-black transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em] group-hover:text-gray-700 transition-colors duration-500">
                  {item.tag}
                </p>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-6 left-8 right-8 h-[1px] bg-gradient-to-r ${item.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`} />
              </div>
              
              {/* Floating Number */}
              <div className={`card-number absolute -bottom-4 -right-4 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
