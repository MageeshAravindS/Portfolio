import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Award, Code, Mail, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 font-sans">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Mageesh Aravind S
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Projects', 'Skills', 'Awards'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <motion.div {...fadeInUp}>
            <h2 className="text-cyan-400 font-mono mb-4 tracking-widest text-sm underline decoration-cyan-400/30">ELECTRONICS & INSTRUMENTATION ENGINEER</h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Building <span className="text-slate-500 italic">innovative</span> solutions.
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Multiple hackathon winner  specializing in AR systems, full-stack development[cite: 8], 
              and predictive industrial maintenance[cite: 48].
            </p>
            <div className="flex gap-4 mt-10">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                View My Work
              </button>
              <div className="flex gap-4 items-center px-4">
                <Mail size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                <Github size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-cyan-400" /> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Predictive Maintenance System"
              tech="Python • Machine Learning • IIoT"
              [cite_start]desc="Developed a model to analyze sensor data for accurate tool lifespan prediction in industrial broaching systems[cite: 48, 50]."
              [cite_start]impact="Lowered operational costs and improved equipment reliability[cite: 51]."
            />
            <ProjectCard 
              title="Full-Stack Attendance System"
              tech="Java Spring Boot • React • MySQL"
              [cite_start]desc="Architected a scalable system to automate manual attendance tracking and reporting[cite: 44, 46]."
              [cite_start]impact="Reduced administrative workload with real-time monitoring[cite: 47]."
            />
            <ProjectCard 
              title="C-Based FPS Engine"
              tech="C • SDL2 • Math"
              [cite_start]desc="Built a custom rendering pipeline and physics-based movement from scratch[cite: 52, 54]."
              [cite_start]impact="Optimized memory management for high-performance execution[cite: 55]."
            />
            <ProjectCard 
              title="AR Tracking & Visualization"
              tech="Unity • Vuforia • Lens Studio"
              [cite_start]desc="Built interactive 3D portals and image tracking systems for technical competitions[cite: 39, 41]."
              [cite_start]impact="Winner of SnapAR and multiple internal hackathons."
            />
          </div>
        </section>

        {/* Technical Skills - Grid Style */}
        <section id="skills" className="py-20 border-t border-slate-800/50">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-cyan-400 font-mono text-sm mb-6 uppercase tracking-wider">Programming</h4>
              <ul className="space-y-3 text-slate-300">
                {['C / C++', 'Python', 'Java', 'C#'].map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"/>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-mono text-sm mb-6 uppercase tracking-wider">Hardware & Tools</h4>
              <ul className="space-y-3 text-slate-300">
                {['Arduino', 'Proteus', 'MATLAB', 'Circuit Design'].map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-mono text-sm mb-6 uppercase tracking-wider">Development</h4>
              <ul className="space-y-3 text-slate-300">
                {['Unity 3D', 'Vuforia SDK', 'Git/GitHub', 'VS Code'].map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"/>{skill}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50 text-center text-slate-500 text-sm">
        <p>© 2026 Mageesh Aravind S • {`Pune, India [cite: 3]`}</p>
        <p className="mt-2 font-mono">Bannari Amman Institute of Technology [cite: 12]</p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, tech, desc, impact }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
        <Terminal size={20} />
      </div>
      <ExternalLink size={18} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
    </div>
    <h4 className="text-xl font-bold mb-1">{title}</h4>
    <p className="text-xs font-mono text-cyan-500/80 mb-4">{tech}</p>
    <p className="text-slate-400 text-sm mb-4 line-height-relaxed">{desc}</p>
    <p className="text-slate-200 text-xs font-semibold bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 italic">
      " {impact} "
    </p>
  </motion.div>
);

export default Portfolio;
