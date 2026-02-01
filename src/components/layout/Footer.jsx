import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "The Pillars",
    links: [
      { name: "Branding", href: "/branding" },
      { name: "Creative", href: "/creative" },
      { name: "Marketing", href: "/marketing" },
    ]
  },
  {
    title: "Agency",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 font-['Syne'] bg-[#F8F8F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Logo Section */}
          <div className="space-y-6">
            <Link to="/" className="text-4xl font-black uppercase tracking-tighter italic flex items-center gap-2">
              TKC<span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            </Link>
            <p className="font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed text-gray-400">
              The Kite Corp. <br />
              Architecting Digital Legacies <br /> 
              Chennai, India
            </p>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-2xl font-black uppercase tracking-tighter hover:text-blue-600 transition-all hover:translate-x-2 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social / Direct */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Connect</h4>
            <div className="space-y-4">
              <a href="mailto:hello@kitecorp.xyz" className="block text-xl font-bold italic tracking-tight hover:text-blue-600 transition-colors">
                hello@kitecorp.xyz
              </a>
              <div className="flex gap-4 font-['Montserrat'] text-[10px] font-black uppercase tracking-widest text-gray-400">
                <a href="https://github.com/Rakshi2609" className="hover:text-black transition-colors">GH</a>
                <a href="https://rakshithganjimut.xyz" className="hover:text-black transition-colors">WEB</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-['Montserrat'] text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">
            © 2026 THE KITE CORP. ALL RIGHTS RESERVED.
          </p>
          <div className="h-px flex-1 bg-gray-100 mx-10 hidden md:block" />
          <span className="font-['Montserrat'] text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 italic">
            Ascend Above.
          </span>
        </div>
      </div>
    </footer>
  );
}