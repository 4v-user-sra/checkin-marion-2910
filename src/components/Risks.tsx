import { premisesData, risksData } from '../data';
import { FadeIn } from './FadeIn';
import { ShieldAlert, Compass, CheckCircle2, AlertTriangle, Clock, Users, Calendar } from 'lucide-react';

export function Risks() {
  return (
    <section id="riscos" className="py-28 px-6 md:px-12 bg-brand-graphite text-brand-white relative overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-coral rounded-bl-[140px] mix-blend-multiply opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] bg-brand-dark rounded-tr-[140px] mix-blend-multiply opacity-40 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        
        {/* ========================================================================= */}
        {/* 2. PREMISSAS DO PROJETO */}
        {/* ========================================================================= */}
        <div id="premissas">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm">
                2. Premissas Fundamentais • R O P R E
              </span>
            </div>
            <h2 className="text-brand-white mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
              Premissas Inegociáveis do Projeto
            </h2>
            <p className="text-brand-white/80 text-base md:text-lg font-medium max-w-3xl mb-12 leading-relaxed">
              Os três pilares fundamentais para sustentação do crescimento, governança de métricas e alta performance operacional entre a Mansão Marion e a V4 Company.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premisesData.map((premise, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className="bg-brand-white/5 border border-brand-white/15 hover:border-brand-coral/60 rounded-[16px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-white/10">
                    <span className="font-heading font-bold text-3xl text-brand-coral/50">
                      {premise.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-white/80 bg-brand-white/10 px-3 py-1 rounded-full">
                      {premise.tag}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-white mb-4 leading-snug">
                    {premise.title}
                  </h3>

                  <p className="text-xs md:text-sm text-brand-white/85 leading-relaxed font-medium">
                    {premise.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. RISCOS E PONTOS DE ATENÇÃO */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-brand-white/15">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm">
                3. Riscos e Pontos de Atenção • R O P R E
              </span>
            </div>
            <h2 className="text-brand-white mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
              Gestão de Riscos & Ações de Mitigação
            </h2>
            <p className="text-brand-white/80 text-base md:text-lg font-medium max-w-3xl mb-12 leading-relaxed">
              Mapeamento preventivo dos gargalos de conversão e instituição de governança semanal de CRM para garantir tomada de decisão técnica.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {risksData.map((risk, idx) => (
              <FadeIn 
                key={risk.id} 
                delay={idx * 0.1}
                className="bg-brand-white/5 border border-brand-white/15 hover:border-brand-coral/60 rounded-[16px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-xs font-mono text-brand-white/60">
                      Risco 3.{risk.id}
                    </span>
                  </div>

                  {/* Risk Title */}
                  <h3 className="text-2xl font-heading font-bold text-brand-white mb-6 leading-tight">
                    {risk.title}
                  </h3>

                  {/* O Risco */}
                  <div className="bg-brand-white/5 p-5 rounded-[12px] border-l-4 border-red-500 mb-6">
                    <div className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> O Risco Mapeado
                    </div>
                    <p className="text-xs md:text-sm text-brand-white/90 leading-relaxed font-medium">
                      {risk.riskText}
                    </p>
                  </div>
                </div>

                {/* Ação de Mitigação */}
                <div className="pt-4 border-t border-brand-white/10 bg-brand-white/5 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-5 md:p-6 rounded-b-[16px]">
                  <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Ação de Mitigação / Solução
                  </div>
                  <p className="text-xs md:text-sm text-brand-white/95 font-medium leading-relaxed">
                    {risk.mitigation}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Callout Especial: Reunião Semanal Curta Exclusiva de CRM */}
          <FadeIn className="mt-8 bg-brand-coral/15 border-2 border-brand-coral/40 p-6 md:p-8 rounded-[16px]">
            <div className="space-y-2 max-w-3xl">
              <h4 className="text-xl md:text-2xl font-heading font-bold text-brand-white">
                Instituir Reunião Semanal Curta de CRM (30 Minutos)
              </h4>
              <p className="text-xs md:text-sm text-brand-white/80 font-medium leading-relaxed">
                Reunião semanal rápida para revisar o funil do Kommo, garantir que o CRM e o salão falem a mesma língua e passar os pontos de correção para o time comercial agir na semana.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
