import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageWrapper from '../../components/layout/PageWrapper';

export default function Contact() {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });
    tl.from(infoRef.current, { x: -50, opacity: 0 }, 0.2)
      .from(formRef.current, { x: 50, opacity: 0 }, 0.4);
  }, []);

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start font-['Syne']">
        
        {/* Left Side: Agency Info */}
        <div ref={infoRef} className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-[9vw] font-black uppercase tracking-tighter leading-[0.85] italic">
              Initiate <br /> <span className="text-blue-600 font-[800]">Negotiations.</span>
            </h1>
            <p className="font-['Montserrat'] text-gray-500 uppercase tracking-widest text-[10px] font-bold">
              Secure your spot in our 2026 roadmap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 font-['Montserrat']">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Direct Line</p>
              <p className="text-xl font-bold uppercase tracking-tight italic">hello@kitecorp.xyz</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Hdqrs</p>
              <p className="text-xl font-bold uppercase tracking-tight italic">Chennai, India</p>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Project Form */}
        <div ref={formRef} className="bg-white p-10 md:p-14 rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.08)] border border-gray-100">
          <form className="space-y-10 font-['Montserrat']">
            
            {/* Step 1: Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest ml-4">Full Name</label>
                <input type="text" placeholder="Rakshith Ganjimut" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-bold uppercase tracking-tighter text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest ml-4">Company</label>
                <input type="text" placeholder="The Kite Corp" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-bold uppercase tracking-tighter text-sm" />
              </div>
            </div>

            {/* Step 2: Pillar Selection */}
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-widest ml-4 block">Select Focus Pillar</label>
              <div className="flex flex-wrap gap-2">
                {['Branding', 'Creative', 'Marketing'].map(pillar => (
                  <button key={pillar} type="button" className="px-6 py-3 border-2 border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    {pillar}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest ml-4">Estimated Budget</label>
                <select className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-bold uppercase tracking-tighter text-sm appearance-none cursor-pointer">
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest ml-4">Timeline</label>
                <select className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-bold uppercase tracking-tighter text-sm appearance-none cursor-pointer">
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>Ongoing</option>
                </select>
              </div>
            </div>

            {/* Step 4: Brief */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest ml-4">Project Mission</label>
              <textarea rows="4" placeholder="Tell us about the identity you want to build..." className="w-full p-6 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-blue-600 transition-all font-medium text-sm" />
            </div>

            <button className="w-full py-6 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-600/20 active:scale-95">
              Submit Brief for Review
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}