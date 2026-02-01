import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageWrapper from '../../components/layout/PageWrapper';

gsap.registerPlugin(ScrollTrigger);

const marketingPillars = [
  {
    title: "Search Engine Optimization",
    short: "SEO",
    desc: "Dominating search rankings to ensure your brand is the first thing the world sees.",
    metrics: ["Keyword Authority", "Organic Growth", "Technical Audit"],
    theme: "bg-white text-black border-gray-100"
  },
  {
    title: "Performance Marketing",
    short: "Ads",
    desc: "Data-backed ad campaigns designed for maximum ROI and aggressive scale.",
    metrics: ["Conversion Tracking", "Paid Acquisition", "Retargeting"],
    theme: "bg-blue-600 text-white border-transparent"
  },
  {
    title: "Public Relations",
    short: "PR",
    desc: "Managing reputation and securing media coverage in top-tier publications.",
    metrics: ["Media Outreach", "Crisis Management", "Brand Authority"],
    theme: "bg-neutral-900 text-white border-transparent"
  },
  {
    title: "Influencer Marketing",
    short: "Reach",
    desc: "Connecting your brand with the right voices to drive culture and community.",
    metrics: ["KOL Partnerships", "Viral Campaigns", "Community Build"],
    theme: "bg-zinc-100 text-black border-gray-200"
  }
];

export default function Marketing() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".marketing-slab").forEach((slab, i) => {
        gsap.from(slab, {
          scrollTrigger: {
            trigger: slab,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          scaleX: 0.9,
          y: 50,
          duration: 1,
          ease: "expo.out",
          delay: i * 0.1
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      <section className="mb-24 font-['Syne']">
        <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-none italic">
          Marketing <br /> <span className="text-blue-600">Engine.</span>
        </h1>
        <p className="mt-6 text-gray-400 font-['Montserrat'] uppercase tracking-[0.5em] text-[10px] font-bold">
          Scale • Reach • Performance • Influence
        </p>
      </section>

      {/* Performance Slabs */}
      <div className="space-y-6 pb-40 font-['Syne']">
        {marketingPillars.map((item, i) => (
          <div 
            key={i} 
            className={`marketing-slab group p-12 rounded-[3rem] border ${item.theme} shadow-2xl transition-all duration-500 hover:-translate-y-2`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold font-['Montserrat'] border border-current px-3 py-1 rounded-full opacity-60">
                    0{i + 1} / {item.short}
                  </span>
                </div>
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">{item.title}</h2>
                <p className="font-['Montserrat'] text-sm uppercase tracking-widest opacity-60 max-w-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 min-w-[200px]">
                {item.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    <div className="w-1 h-1 bg-current rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Growth CTA */}
      <section className="py-32 text-center border-t border-gray-100 font-['Syne']">
        <h2 className="text-7xl font-black uppercase tracking-tighter mb-8 italic">
          Ready to <br /> hyper-scale?
        </h2>
        <a href="/contact" className="inline-block px-14 py-6 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-all scale-100 hover:scale-110">
          Book Growth Strategy
        </a>
      </section>
    </PageWrapper>
  );
}