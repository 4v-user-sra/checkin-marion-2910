import { projectFunnel } from '../data';
import { FadeIn } from './FadeIn';
import { Filter, ArrowDown, MapPin, Sparkles, ShoppingBag, HeartHandshake } from 'lucide-react';

export function Funnel() {
  return (
    <section id="funil" className="py-28 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Filter className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">
              Arquitetura de Vendas • R O P R E
            </span>
          </div>
          <h2 className="text-brand-coral mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Funil Completo do Projeto
          </h2>
          <p className="text-lg md:text-xl text-brand-graphite font-medium leading-relaxed max-w-3xl mb-16">
            Estrutura de ponta a ponta: do primeiro impacto nos condomínios de Alphaville e Aldeia da Serra até o pedido recorrente e a experiência no salão.
          </p>
        </FadeIn>

        {/* Funnel Stages Layout */}
        <div className="space-y-6 relative">
          {projectFunnel.map((stage, idx) => {
            const Icon = stage.icon;
            const isLast = idx === projectFunnel.length - 1;

            return (
              <div key={idx} className="relative">
                <FadeIn delay={idx * 0.1}>
                  <div className={`p-8 md:p-10 rounded-[14px] border-2 transition-all duration-300 ${
                    idx === 0 
                      ? 'bg-brand-coral/5 border-brand-coral/20' 
                      : idx === 1 
                      ? 'bg-brand-accent/5 border-brand-accent/20' 
                      : idx === 2 
                      ? 'bg-brand-dark/5 border-brand-dark/20' 
                      : 'bg-emerald-50/50 border-emerald-300/60'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-brand-graphite/10">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-[12px] flex items-center justify-center text-brand-white ${
                          idx === 0 ? 'bg-brand-coral' : idx === 1 ? 'bg-brand-accent' : idx === 2 ? 'bg-brand-dark' : 'bg-emerald-600'
                        }`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-graphite/60">
                            Etapa 0{idx + 1} • {stage.stage}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite">
                            {stage.name}
                          </h3>
                        </div>
                      </div>

                      <div className="bg-brand-white px-4 py-2 rounded-full border border-brand-graphite/15 text-xs font-bold text-brand-graphite self-start lg:self-center shadow-xs">
                        {stage.tag}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-4">
                        <div className="text-xs uppercase tracking-wider font-bold text-brand-graphite/50 mb-1">
                          Objetivo da Fase
                        </div>
                        <p className="text-sm md:text-base font-semibold text-brand-graphite leading-relaxed">
                          {stage.goal}
                        </p>
                      </div>

                      <div className="md:col-span-4">
                        <div className="text-xs uppercase tracking-wider font-bold text-brand-graphite/50 mb-1">
                          Ações em Andamento
                        </div>
                        <p className="text-sm md:text-base text-brand-graphite/85 font-medium leading-relaxed">
                          {stage.actions}
                        </p>
                      </div>

                      <div className="md:col-span-4">
                        <div className="text-xs uppercase tracking-wider font-bold text-brand-coral mb-1">
                          Mensagem / Proposta de Valor
                        </div>
                        <div className="bg-brand-white p-4 rounded-[10px] border border-brand-graphite/10 text-sm md:text-base font-heading italic text-brand-graphite font-bold">
                          {stage.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Arrow between stages */}
                {!isLast && (
                  <div className="flex justify-center my-2 text-brand-coral/50">
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
