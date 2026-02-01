import PageWrapper from '../../components/layout/PageWrapper';

export default function Marketing() {
  const sections = [
    { title: "SEO", focus: "Search Engine Optimization & Visibility" },
    { title: "Performance Marketing", focus: "Data-driven ad campaigns & ROI" },
    { title: "Public Relations", focus: "Media coverage & reputation management" },
    { title: "Influencer Marketing", focus: "KOL partnerships & community building" }
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <h1 className="text-7xl font-black tracking-tighter uppercase">Marketing</h1>
        <p className="text-gray-400 font-mono text-sm mb-2">/ GROWTH_STRATEGY</p>
      </div>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-black text-white rounded-[2rem] group hover:bg-blue-600 transition-colors duration-500 cursor-pointer">
            <h2 className="text-3xl font-bold tracking-tighter">{section.title}</h2>
            <p className="text-gray-400 group-hover:text-white/80 transition-colors font-medium">
              {section.focus}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}