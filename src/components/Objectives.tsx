import { objectivesData, strategicImprovements } from '../data';
import { FadeIn } from './FadeIn';
import { Target, Flag, TrendingUp, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export function Objectives() {
  return (
    <section id="objetivos" className="py-28 px-6 md:px-12 bg-brand-coral text-brand-white relative overflow-hidden">
      {/* Decorative Brand Overlays */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-brand-accent rounded-bl-[140px] mix-blend-multiply opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-brand-dark rounded-tr-[140px] mix-blend-multiply opacity-60 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Pill & Title */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-brand-white" />
            <span className="font-bold tracking-widest uppercase text-xs md:text-sm text-brand-white/90">
              1. Objetivos & Metas de Escala • R O P R E
            </span>
          </div>
          <h2 className="text-brand-white mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Metas de Faturamento & Alinhamento Estratégico
          </h2>
          <p className="text-lg md:text-xl text-brand-white/90 max-w-3xl font-medium leading-relaxed mb-16">
            Diretrizes para escalar a operação da Mansão Marion: resolução prioritária do gargalo comercial, ancoragem nos dados do Kommo e foco total nas campanhas de Black Friday em novembro.
          </p>
        </FadeIn>

        {/* 1.2. Macro Objective Banner: Meta Viável R$ 325.000,00 */}
        <FadeIn delay={0.1} className="bg-brand-white text-brand-graphite rounded-[16px] p-8 md:p-12 mb-16 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-graphite/10">
            <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-widest text-brand-coral">
              <Flag className="w-4 h-4 text-brand-coral" /> 1.2. Meta de Faturamento Viável
            </div>
            <div className="bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-xs">
              Meta Atual Viável
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase font-bold tracking-wider text-brand-graphite/60 mb-1">
                Faturamento Viável com a Estrutura Atual
              </div>
              <div className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-coral mb-4">
                {objectivesData.macro.value}
              </div>
              <div className="bg-brand-coral/5 border border-brand-coral/20 p-4 rounded-[10px] mb-4 text-xs md:text-sm font-semibold text-brand-graphite leading-relaxed">
                <strong className="text-brand-coral">O Cálculo:</strong> {objectivesData.macro.calculation}
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-dark text-brand-white p-6 md:p-8 rounded-[14px] shadow-lg">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-brand-white/80 mb-2">
                <TrendingUp className="w-4 h-4 text-brand-white" />
                {objectivesData.macro.nextStepTitle}
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-brand-white/90 font-medium">
                {objectivesData.macro.nextStep}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-brand-graphite/10 flex items-start gap-3 bg-brand-graphite/5 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-6 md:px-12 rounded-b-[16px] text-xs md:text-sm text-brand-graphite/85 font-medium leading-relaxed">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Visão de Execução:</strong> {objectivesData.macro.description}
            </span>
          </div>
        </FadeIn>

        {/* 1.1. KRs (Key Results): Escalar Operação Corrigindo Gargalo Comercial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {objectivesData.krs.map((kr, idx) => (
            <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="bg-brand-dark/75 border-2 border-brand-white/20 p-8 md:p-10 rounded-[16px] flex flex-col justify-between backdrop-blur-sm shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-white text-brand-dark px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase">
                    {kr.code}
                  </span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-brand-white leading-snug">
                  {kr.title}
                </h4>

                {/* A Solução */}
                <div className="bg-brand-white/10 p-4 rounded-[10px] mb-3 border-l-4 border-emerald-400">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-300 mb-1">
                    A Solução
                  </div>
                  <p className="text-xs md:text-sm text-brand-white/90 leading-relaxed font-medium">
                    {kr.solution}
                  </p>
                </div>

                {/* O Lado Positivo */}
                <div className="bg-brand-white/10 p-4 rounded-[10px] border-l-4 border-sky-400">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-sky-300 mb-1">
                    O Lado Positivo
                  </div>
                  <p className="text-xs md:text-sm text-brand-white/90 leading-relaxed font-medium">
                    {kr.positiveSide}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 1.3. Melhorias Estratégicas em Campanhas (Foco Novembro) */}
        <div id="melhorias" className="pt-8 border-t-2 border-brand-white/20">
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-brand-white" />
              <span className="font-bold tracking-widest uppercase text-xs md:text-sm text-brand-white/90">
                1.3. Melhorias Estratégicas em Campanhas • Foco Novembro
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-white mb-6">
              Ações de Tração & Black Friday
            </h3>
            <p className="text-base md:text-lg text-brand-white/90 font-medium mb-12 max-w-3xl leading-relaxed">
              Testes contínuos de novos formatos em vídeo com a Sabrina, lançamento da campanha de Black Friday e desenvolvimento de peças estáticas para metrificação rigorosa de novembro.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicImprovements.map((imp, idx) => {
              const Icon = imp.icon;
              return (
                <FadeIn 
                  key={idx} 
                  delay={0.3 + (idx * 0.1)} 
                  className="bg-brand-white text-brand-graphite p-6 md:p-8 rounded-[14px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-[10px] bg-brand-coral flex items-center justify-center text-brand-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs uppercase font-bold tracking-wider bg-brand-coral/10 text-brand-coral px-3 py-1 rounded-full">
                        {imp.badge}
                      </span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-heading font-bold text-brand-graphite mb-3 leading-snug">
                      {imp.title}
                    </h4>

                    <p className="text-xs md:text-sm text-brand-graphite/85 font-medium leading-relaxed">
                      {imp.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
