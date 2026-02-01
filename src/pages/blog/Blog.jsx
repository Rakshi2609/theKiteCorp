import PageWrapper from '../../components/layout/PageWrapper';

const posts = [
  { title: "The Future of OOH Design", category: "Creative", date: "Feb 2026" },
  { title: "Mastering Brand Consistency", category: "Branding", date: "Jan 2026" },
  { title: "SEO Trends for Agencies", category: "Marketing", date: "Jan 2026" }
];

export default function Blog() {
  return (
    <PageWrapper>
      <h1 className="text-7xl font-black tracking-tighter mb-12 uppercase">Insights</h1>
      <div className="grid grid-cols-1 gap-12">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer border-b border-gray-200 pb-8 hover:border-black transition-colors duration-500">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">{post.category}</p>
                <h2 className="text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">{post.title}</h2>
              </div>
              <p className="text-gray-400 font-mono text-sm">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}