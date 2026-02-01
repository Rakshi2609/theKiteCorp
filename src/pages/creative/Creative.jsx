import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageWrapper from '../../components/layout/PageWrapper';

gsap.registerPlugin(ScrollTrigger);

const creativeWorks = [
  {
    title: "Social Media Handles",
    tags: ["Content Strategy", "Grid Layouts", "Engagement"],
    image: "bg-blue-600",
    desc: "Managing digital presence with high-impact aesthetics."
  },
  {
    title: "Visual Identity",
    tags: ["Logo Systems", "Typography", "Brand DNA"],
    image: "bg-neutral-900",
    desc: "Crafting the look and feel of the modern era."
  },
  {
    title: "Print & OOH Design",
    tags: ["Billboards", "Magazine", "Flyers"],
    image: "bg-zinc-800",
    desc: "Dominating the physical world with bold visuals."
  },
  {
    title: "Storytelling",
    tags: ["Copywriting", "Video Scripts", "Brand Voice"],
    image: "bg-blue-500",
    desc: "Narratives that turn audiences into advocates."
  }
];

export default function Creative() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const sections = gsap.utils.toArray(".creative-card");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollRef.current.offsetWidth
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      <section className="mb-20 font-['Syne']">
        <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-none italic">
          Creative <br /> <span className="text-blue-600">Vision.</span>
        </h1>
        <p className="mt-4 text-gray-400 font-['Montserrat'] uppercase tracking-[0.5em] text-xs font-bold">
          Visual Language • Storytelling • Impact
        </p>
      </section>

      {/* Horizontal Scroll Container */}
      <div ref={scrollRef} className="relative overflow-hidden flex whitespace-nowrap py-10">
        {creativeWorks.map((work, i) => (
          <section 
            key={i} 
            className="creative-card min-w-full md:min-w-[60vw] h-[70vh] px-6 inline-block align-top"
          >
            <div className={`w-full h-full ${work.image} rounded-[4rem] p-12 flex flex-col justify-between shadow-2xl relative group`}>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[4rem]" />
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-white/40 font-black text-2xl font-['Syne']">0{i + 1}</span>
                <div className="flex flex-col gap-2 items-end">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-white/60 text-[10px] uppercase font-bold tracking-widest border border-white/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 font-['Syne']">
                <h2 className="text-white text-6xl font-black uppercase tracking-tighter mb-4 whitespace-normal">
                  {work.title}
                </h2>
                <p className="text-white/60 font-['Montserrat'] text-sm uppercase tracking-widest whitespace-normal max-w-sm">
                  {work.desc}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Spacer to allow for scroll room */}
      <div className="h-[20vh]" />
    </PageWrapper>
  );
}