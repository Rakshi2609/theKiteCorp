import PageWrapper from '../../components/layout/PageWrapper';

export default function Contact() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-7xl font-black tracking-tighter uppercase mb-6">
            Let's <br /> Talk.
          </h1>
          <p className="text-gray-500 text-lg max-w-sm mb-8">
            Ready to scale your brand? From identity to influencer marketing, we've got the roadmap.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email us</p>
              <p className="text-xl font-medium">hello@kitecorp.xyz</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</p>
              <p className="text-xl font-medium">Chennai, India</p>
            </div>
          </div>
        </div>

        <form className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-black/5 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-2">Name</label>
            <input type="text" placeholder="Your name" className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-2">Interested In</label>
            <select className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all">
              <option>Branding</option>
              <option>Creative Direction</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-2">Message</label>
            <textarea rows="4" placeholder="Tell us about your project..." className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all" />
          </div>
          <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}