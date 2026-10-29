import { motion } from 'motion/react';
import { presentationMeta } from '../data';
import { Calendar, Sparkles, Building2, TrendingUp, Layers } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-brand-coral pt-24 pb-24 px-6 md:px-12 relative overflow-hidden min-h-[70vh] flex flex-col justify-center">
      {/* Flat Shapes acting as Collages */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-dark rounded-bl-[140px] mix-blend-multiply opacity-80 pointer-events-none"></div>
      <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] bg-brand-accent rounded-tr-[140px] mix-blend-multiply opacity-90 pointer-events-none"></div>
      <div className="absolute top-36 -left-20 w-[180px] h-[180px] bg-brand-white rounded-full opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="max-w-4xl py-6">
          
          {/* Tagline / Meta */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-brand-white/15 backdrop-blur-xs text-brand-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-brand-white/20">
              <Calendar className="w-4 h-4 text-brand-white" />
              Período: {presentationMeta.date}
            </span>
            <span className="text-brand-white/90 font-semibold text-xs md:text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {presentationMeta.agency} × {presentationMeta.client}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-brand-white mb-2 text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-tight font-heading font-bold"
          >
            {presentationMeta.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl text-brand-white font-heading font-semibold">
              {presentationMeta.brand}
            </span>
            <span className="text-brand-white/70 text-xl font-light">·</span>
            <span className="text-xl sm:text-2xl text-brand-white/90 font-medium">
              {presentationMeta.subtitle}
            </span>
          </motion.div>

          {/* Executive Subtitle summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-white/95 font-medium mb-8 max-w-3xl leading-relaxed bg-brand-white/10 p-5 rounded-[12px] border border-brand-white/20 backdrop-blur-xs"
          >
            {presentationMeta.executiveSummary}
          </motion.p>

          {/* Methodology & Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-xs md:text-sm"
          >
            <div className="bg-brand-dark/70 border border-brand-white/20 px-4 py-2 rounded-full text-brand-white font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-white" />
              Metodologia R • O • P • R • E
            </div>
            <div className="text-brand-white/80 font-medium">
              Campanhas ativas entre <strong className="text-brand-white">{presentationMeta.period}</strong>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
