import { deliverablesData } from '../data';
import { FadeIn } from './FadeIn';
import { Clock } from 'lucide-react';

export function Deliverables() {
  return (
    <section id="entregas" className="py-28 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <h2 className="text-brand-coral mb-12 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Entregas do Ciclo
          </h2>
        </FadeIn>

        {/* Entregas Previstas */}
        <FadeIn delay={0.1}>
          <div className="bg-brand-graphite/5 border-2 border-brand-graphite/15 rounded-[14px] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/15">
              <Clock className="w-6 h-6 text-brand-coral" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite">
                Entregas Previstas (Próximos Passos)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverablesData.upcoming.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-brand-white p-5 rounded-[12px] border border-brand-graphite/10 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-brand-graphite text-brand-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-brand-graphite mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand-graphite/80 font-medium leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
