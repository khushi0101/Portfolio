export default function Overlay({ activeZone, setZone }) {
  if (!activeZone) return null;

  const content = {
    about: {
      title: "Khushi Agrawal",
      body: "MSCS @ ASU (4.0 GPA). I build high-performance data systems.",
      interests: ["🍳 Cooking", "🎨 Painting", "💃 Dancing"]
    },
    projects: {
      title: "Featured Builds",
      items: ["LLMind (96.5% Accuracy)", "Secure Online Judge (Docker/Kafka)"]
    },
    work: {
      title: "Experience",
      items: ["DruvStar (Data Analyst Intern)", "Ataloud (Full Stack Intern)"]
    }
  };

  const data = content[activeZone];

  return (
    <div className="absolute inset-0 flex items-center justify-start p-10 md:p-24 pointer-events-none">
      <div className="glass-card max-w-lg p-10 pointer-events-auto animate-slide-in">
        <h2 className="text-5xl font-black italic mb-4 uppercase">{data.title}</h2>
        <p className="text-slate-300 mb-6 text-lg">{data.body}</p>
        
        {data.interests && (
          <div className="flex gap-4">
            {data.interests.map(i => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold">{i}</span>
            ))}
          </div>
        )}

        {data.items && (
          <ul className="space-y-4">
            {data.items.map(item => (
              <li key={item} className="border-l-2 border-indigo-500 pl-4 py-2 bg-white/5">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
