import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageWrapper from '../../components/layout/PageWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Logic
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out"
      });

      // 2. Branding Section (Image: Left -> Right, Text: Right -> Left)
      const brandingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".branding-section",
          start: "top 75%",
          end: "top 25%",
          scrub: 1, // Smoothly ties animation to scroll
        }
      });

      brandingTl.from(".branding-img", { x: -200, scale: 0.8, opacity: 0, borderRadius: "10rem" }, 0)
                .from(".branding-text", { x: 200, opacity: 0 }, 0);

      // 3. Creative Section (Image: Right -> Left, Text: Left -> Right)
      const creativeTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".creative-section",
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        }
      });

      creativeTl.from(".creative-img", { x: 200, scale: 0.8, opacity: 0, borderRadius: "10rem" }, 0)
                 .from(".creative-text", { x: -200, opacity: 0 }, 0);

      // 4. Parallax Hero Effect
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 150,
        scale: 0.9,
        opacity: 0.1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section ref={heroRef} className="h-[90vh] flex flex-col justify-center items-start overflow-hidden">
        <div ref={titleRef}>
          <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] uppercase flex flex-col">
            <span className="hero-line">The</span>
            <span className="hero-line text-blue-600 italic">Kite</span>
            <span className="hero-line">Corp.</span>
          </h1>
        </div>
        <div className="flex gap-4 mt-12 hero-line">
          <Link to="/branding" className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all">
            View Roadmap
          </Link>
          <div className="px-10 py-5 border border-black/20 rounded-full font-bold uppercase tracking-widest">
            Est. 2026
          </div>
        </div>
      </section>

      {/* Branding Section - Opposing Motion */}
      <section className="branding-section py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
        <div className="branding-img aspect-square bg-gray-900 rounded-[3rem] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-blue-900/50 to-black flex items-center justify-center">
            <span className="text-white font-black text-6xl rotate-[-90deg]">BRAND</span>
          </div>
        </div>
        <div className="branding-text space-y-6">
          <h2 className="text-7xl font-black uppercase tracking-tighter leading-none">Identity & <br/> Positioning</h2>
          <p className="text-gray-500 text-xl font-medium max-w-sm">Build the DNA. Set the pace. Own the market.</p>
          <Link to="/branding" className="inline-block pt-4 text-blue-600 font-black uppercase tracking-tighter hover:gap-4 transition-all">
             Explore Branding →
          </Link>
        </div>
      </section>

      {/* Creative Section - Opposing Motion */}
      <section className="creative-section py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
        <div className="creative-text space-y-6 order-2 md:order-1 text-right flex flex-col items-end">
          <h2 className="text-7xl font-black uppercase tracking-tighter leading-none">Creative <br/> Direction</h2>
          <p className="text-gray-500 text-xl font-medium max-w-sm">From Social Media handles to high-impact Print & OOH design.</p>
          <Link to="/creative" className="inline-block pt-4 text-blue-600 font-black uppercase tracking-tighter">
             ← Discover Creative
          </Link>
        </div>
        <div className="creative-img order-1 md:order-2 aspect-square bg-blue-600 rounded-[3rem] flex items-center justify-center">
          <span className="text-white font-black text-6xl rotate-[90deg]">CREATIVE</span>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-60 text-center">
        <h2 className="text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
          Ready to <br/> <span className="text-blue-600">Ascend?</span>
        </h2>
        <Link to="/contact" className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
          Connect with The Kite Corp.
        </Link>
      </section>
    </PageWrapper>
  );
}