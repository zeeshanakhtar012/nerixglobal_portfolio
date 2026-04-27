import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { Code2, ArrowLeft, CheckCircle2, LayoutGrid } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Navigation & Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm font-semibold tracking-wide mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 whitespace-nowrap"
              >
                <Code2 className="w-5 h-5" />
                View Code on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="max-w-5xl mx-auto mb-20 aspect-[21/9] glass-card rounded-3xl overflow-hidden relative border border-white/10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
          <span className="text-slate-500 font-medium text-lg relative z-10 flex flex-col items-center gap-2">
            <LayoutGrid className="w-8 h-8 opacity-50" />
            Main Hero Image Placeholder
          </span>
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Overview</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {project.overview || project.description}
              </p>
            </section>

            {project.stats && (
              <section className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-indigo-400 mb-2">The Problem</h3>
                  <p className="text-slate-300 leading-relaxed">{project.stats.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">The Solution</h3>
                  <p className="text-slate-300 leading-relaxed">{project.stats.solution}</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-indigo-500">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Impact & Results</h3>
                  <p className="text-xl font-medium text-white">{project.stats.results}</p>
                </div>
              </section>
            )}

            {/* Screenshots Grid Placeholders */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Application Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.screenshots?.map((screenshot, idx) => (
                  <div key={idx} className={`bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-slate-500 ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                    Screenshot {idx + 1}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
