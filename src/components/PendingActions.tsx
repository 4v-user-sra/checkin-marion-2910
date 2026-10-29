import { officialDeliverables } from '../data';
import { FadeIn } from './FadeIn';
import { CheckSquare, CheckCircle2, Clock, Calendar, Users, ArrowUpRight } from 'lucide-react';

export function PendingActions() {
  return (
    <section id="pendencias" className="py-28 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <CheckSquare className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm">
              4. Entregas do Ciclo • R O P R E
            </span>
          </div>
          <h2 className="text-brand-coral mb-4 text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            Entregas & Responsabilidades
          </h2>
          <p className="text-base md:text-lg text-brand-graphite/80 font-medium leading-relaxed max-w-3xl">
            Acompanhamento operacional de demandas, responsabilidades compartilhadas entre a V4 Company e a Mansão Marion, e cronograma de execução.
          </p>
        </FadeIn>

        {/* Deliverables Table Card */}
        <FadeIn delay={0.1}>
          <div className="bg-brand-white border-2 border-brand-graphite/10 rounded-[16px] shadow-sm overflow-hidden">
            
            {/* Top Red Bar exactly as in the slide header */}
            <div className="h-3.5 bg-brand-coral w-full"></div>

            {/* Desktop / Tablet Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-graphite/10 bg-brand-graphite/[0.02]">
                    <th className="py-5 px-6 font-heading font-bold text-base text-brand-graphite w-[36%]">
                      <div>O QUE</div>
                      <div className="text-[11px] font-sans font-normal text-brand-graphite/60 italic lowercase">
                        Tarefa (otimização, envio, qualquer demanda)
                      </div>
                    </th>
                    <th className="py-5 px-6 font-heading font-bold text-base text-brand-graphite w-[42%]">
                      <div>QUEM</div>
                      <div className="text-[11px] font-sans font-normal text-brand-graphite/60 italic">
                        Responsável (Cliente, V4, Account, GT...)
                      </div>
                    </th>
                    <th className="py-5 px-6 font-heading font-bold text-base text-brand-graphite w-[22%]">
                      <div>QUANDO</div>
                      <div className="text-[11px] font-sans font-normal text-brand-graphite/60 italic">
                        Prazo (Status)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-graphite/10">
                  {officialDeliverables.map((item, idx) => {
                    const isDone = item.status === 'done' || item.status === 'approved' || item.status === 'active';
                    const isNear = item.status === 'in_progress';

                    return (
                      <tr 
                        key={idx} 
                        className="hover:bg-brand-coral/[0.02] transition-colors"
                      >
                        {/* O QUE */}
                        <td className="py-5 px-6 font-semibold text-brand-graphite text-sm leading-snug">
                          {item.what}
                        </td>

                        {/* QUEM */}
                        <td className="py-5 px-6 text-xs sm:text-sm text-brand-graphite/85 font-medium leading-relaxed">
                          {item.who}
                        </td>

                        {/* QUANDO */}
                        <td className="py-5 px-6 whitespace-nowrap">
                          {isDone ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              {item.when}
                            </span>
                          ) : isNear ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                              <Clock className="w-3.5 h-3.5 text-amber-600" />
                              {item.when}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral bg-brand-coral/10 border border-brand-coral/20 px-3 py-1.5 rounded-full">
                              <Calendar className="w-3.5 h-3.5 text-brand-coral" />
                              {item.when}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile View: Clean Card Representation */}
            <div className="md:hidden divide-y divide-brand-graphite/10 p-4 space-y-4">
              {officialDeliverables.map((item, idx) => {
                const isDone = item.status === 'done' || item.status === 'approved' || item.status === 'active';
                const isNear = item.status === 'in_progress';

                return (
                  <div key={idx} className="pt-4 first:pt-0 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-heading font-bold text-base text-brand-graphite leading-tight">
                        {item.what}
                      </h4>
                    </div>

                    <div className="text-xs text-brand-graphite/80 leading-relaxed">
                      <strong className="text-brand-graphite">Quem:</strong> {item.who}
                    </div>

                    <div className="pt-1">
                      {isDone ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {item.when}
                        </span>
                      ) : isNear ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3 text-amber-600" />
                          {item.when}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-coral bg-brand-coral/10 border border-brand-coral/20 px-2.5 py-1 rounded-full">
                          <Calendar className="w-3 h-3 text-brand-coral" />
                          {item.when}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </FadeIn>

        {/* Operational Summary Pill */}
        <FadeIn delay={0.2} className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-brand-graphite/70 pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span><strong>5 entregas</strong> concluídas e ativas</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span><strong>2 entregas programadas</strong> (Black 10 vs R$ 16.980 & Locação Corporativa)</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
