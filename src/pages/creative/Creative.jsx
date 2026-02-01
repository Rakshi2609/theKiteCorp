import PageWrapper from '../../components/layout/PageWrapper';

export default function Creative() {
  const categories = [
    { title: "Social Media Handles", items: ["Content Strategy", "Grid Design", "Engagement"] },
    { title: "Visual Identity", items: ["Brand Guidelines", "Logos", "Typography"] },
    { title: "Print & OOH Design", items: ["Billboards", "Magazine Ads", "Flyers"] },
    { title: "Storytelling", items: ["Copywriting", "Video Scripts", "Brand Voice"] }
  ];

  return (
    <PageWrapper>
      <h1 className="text-7xl font-black tracking-tighter mb-12 uppercase">Creative</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="p-8 bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group">
            <h2 className="text-2xl font-black mb-6 group-hover:text-blue-600 transition-colors">{cat.title}</h2>
            <ul className="space-y-3">
              {cat.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-500 font-medium italic">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}