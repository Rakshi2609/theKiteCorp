import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageWrapper from '../../components/layout/PageWrapper';

gsap.registerPlugin(ScrollTrigger);

const brandingPillars = [
  {
    title: "Brand Identity",
    desc: "Building the visual DNA. We create logos, typography, and color systems that command attention.",
    details: ["Visual Language", "Logo Design", "Brand Guidelines"],
    color: "bg-neutral-900"
  },
  {
    title: "Brand Positioning",
    desc: "Defining your unique market space. We find the gap and make sure you own it.",
    details: ["Market Analysis", "Value Proposition", "Competitive Edge"],
    color: "bg-blue-600"
  },
  {
    title: "Consistency",
    desc: "Ensuring your brand speaks the same language across every touchpoint, from social to print.",
    details: ["Omni-channel Sync", "Tone of Voice", "Asset Management"],
    color: "bg-neutral-800"
  },
  {
    title: "Negotiations",
    desc: "Strategic placement and high-stake deals. We handle the closing to ensure your brand's growth.",
    details: ["Strategic Partnerships", "Closing Deals", "Market Placement"],
    color: "bg-zinc-900"
  }
];

export default function Branding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".pillar-section").forEach((section) => {
        gsap.from(section.querySelector(".content"), {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out"
        });

        gsap.from(section.querySelector(".visual-box"), {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.8)"
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      {/* Hero Header */}
      <section className="mb-32 font-['Syne']">
        <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-none italic">
          Branding <br /> <span className="text-blue-600">Architects.</span>
        </h1>
        <p className="mt-8 text-gray-400 font-['Montserrat'] uppercase tracking-[0.5em] text-xs font-bold">
          Building Legacies • One Identity at a Time
        </p>
      </section>

      {/* Interactive Pillars Stack */}
      <div className="space-y-40 pb-40">
        {brandingPillars.map((pillar, i) => (
          <section key={i} className="pillar-section grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="content space-y-8 font-['Syne']">
              <span className="text-blue-600 font-black text-2xl">0{i + 1}</span>
              <h2 className="text-7xl font-black uppercase tracking-tighter">{pillar.title}</h2>
              <p className="text-gray-500 font-['Montserrat'] text-lg leading-relaxed max-w-md">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {pillar.details.map((detail) => (
                  <span key={detail} className="px-4 py-2 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Morphing Visual Box */}
            <div className={`visual-box aspect-square ${pillar.color} rounded-[4rem] shadow-2xl flex items-center justify-center p-12 relative overflow-hidden group`}>
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
               <h3 className="text-white text-4xl font-black uppercase tracking-tighter text-center opacity-20 group-hover:opacity-100 transition-all duration-500">
                 {pillar.title.split(' ')[1] || pillar.title}
               </h3>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-40 text-center border-t border-gray-100">
        <h2 className="text-6xl font-['Syne'] font-black uppercase tracking-tighter mb-10 italic">
          Ready to define <br /> your brand?
        </h2>
        <a href="/contact" className="px-16 py-6 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all">
          Start Negotiation
        </a>
      </section>
    </PageWrapper>
  );
}