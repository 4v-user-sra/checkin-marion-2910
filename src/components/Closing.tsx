import { closingQuote, presentationMeta } from '../data';
import { FadeIn } from './FadeIn';
import { Sparkles, Heart, ArrowUp } from 'lucide-react';

export function Closing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-coral text-brand-white relative overflow-hidden">
      {/* Decorative collage shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dark rounded-bl-[140px] mix-blend-multiply opacity-80 pointer-events-none"></div>
      <div className="absolute -bottom-24 left-10 w-[300px] h-[300px] bg-brand-accent rounded-tr-[140px] mix-blend-multiply opacity-90 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-brand-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-brand-white/20">
            <Sparkles className="w-4 h-4 text-brand-white" />
            Compromisso de Crescimento
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold mb-10 leading-tight">
            "{closingQuote.quote}"
          </h2>

          <p className="text-lg md:text-xl text-brand-white/90 font-medium mb-12">
            {closingQuote.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-brand-white/20">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 bg-brand-white text-brand-coral hover:bg-brand-white/90 font-bold px-6 py-3.5 rounded-[10px] text-sm transition-all shadow-lg cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              Voltar ao Início
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-brand-white/20 text-center text-xs text-brand-white/70 font-medium relative z-10">
        Mansão Marion • Metodologia R O P R E • Parceria Estratégica V4 Company
      </div>
    </section>
  );
}
