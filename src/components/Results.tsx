import { useState } from 'react';
import { 
  financialOverview, 
  channelOrigins, 
  strategicFinancialInsights, 
  metaCampaigns, 
  metaAudiences, 
  topWhatsAppAds, 
  topInstagramPosts, 
  googleCampaigns, 
  googleSummaryGroups, 
  keyInsights 
} from '../data';
import { FadeIn } from './FadeIn';
import { 
  TrendingUp, 
  Wallet, 
  Search, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowUpRight, 
  Eye, 
  MousePointerClick, 
  BarChart3, 
  Award, 
  Compass, 
  Flame, 
  Users, 
  HelpCircle,
  Clock,
  Building2,
  ChevronRight
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function Results() {
  const [activeMetaTab, setActiveMetaTab] = useState<'campaigns' | 'audiences'>('campaigns');

  return (
    <section id="resultados" className="py-24 px-6 md:px-12 bg-brand-white border-t-4 border-brand-graphite/5">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}
        <FadeIn>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm">
                Report de Mídia Paga • R O P R E
              </span>
            </div>
            <h2 className="text-brand-coral text-4xl md:text-[54px] leading-tight font-heading font-bold mb-3">
              Resultados Consolidados de Campanha
            </h2>
            <p className="text-brand-graphite/80 text-lg md:text-xl font-medium max-w-3xl">
              Mansão Marion · Performance auditada em Meta Ads e Google Ads entre {financialOverview.period} ({financialOverview.daysCount} dias).
            </p>
          </div>
        </FadeIn>

        {/* ========================================================================= */}
        {/* 2. MASTER FINANCIAL HIGHLIGHT BOX (IMPACTO CONSOLIDADO) */}
        {/* ========================================================================= */}
        <FadeIn delay={0.1} className="bg-brand-coral rounded-[16px] p-8 md:p-12 relative overflow-hidden text-brand-white shadow-2xl">
          {/* Decorative collage shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-dark rounded-bl-[100px] mix-blend-multiply opacity-80 pointer-events-none"></div>
          <div className="absolute -bottom-20 left-[25%] w-64 h-64 bg-brand-accent rounded-tr-[100px] mix-blend-multiply opacity-90 pointer-events-none"></div>
           
          <div className="relative z-10">
            {/* Header bar inside card */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-white/20">
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs md:text-sm text-brand-white/95">
                <Wallet className="w-5 h-5 text-brand-white" /> Orçamento & Geração de Oportunidades
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-white text-brand-coral px-4 py-1.5 rounded-full font-bold text-xs md:text-sm shadow-sm">
                <Sparkles className="w-4 h-4 fill-brand-coral" /> 
                {financialOverview.totalLeadActionsFormatted} Ações de Contato Direto
              </div>
            </div>
            
            {/* Main Numbers: Total Invested & Total Direct Leads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest opacity-85 block mb-2 font-bold text-brand-white/90">
                  Total Investido no Período (Meta + Google)
                </span>
                <div className="font-heading font-bold tracking-tight whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-none mb-3">
                  <AnimatedCounter 
                    value={financialOverview.spendTotal} 
                    prefix="R$ " 
                    decimals={2}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-brand-white/90 font-medium">
                  <span className="bg-brand-white/15 px-3 py-1 rounded-full">
                    Meta Ads: <strong>{financialOverview.metaSpendFormatted}</strong> (33,7%)
                  </span>
                  <span className="bg-brand-white/15 px-3 py-1 rounded-full">
                    Google Ads: <strong>{financialOverview.googleSpendFormatted}</strong> (66,3%)
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-brand-dark/75 border border-brand-white/25 p-6 rounded-[14px] backdrop-blur-md">
                <div className="text-xs uppercase tracking-widest text-brand-white/80 font-bold mb-1">
                  Custo Médio Consolidado / Ação
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-brand-white mb-2">
                  {financialOverview.avgCostPerAction}
                </div>
                <p className="text-xs text-brand-white/85 leading-relaxed font-medium">
                  Calculado sobre as <strong className="text-brand-white">327 conversas no WhatsApp</strong> e as <strong className="text-brand-white">1.338,6 conversões diretas no Google</strong>.
                </p>
              </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t-2 border-brand-white/20 pt-8">
              <div className="bg-brand-white/10 p-4 rounded-[10px]">
                <div className="text-xs uppercase tracking-wider opacity-85 mb-1 font-bold flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" /> Conversas WhatsApp
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">
                  {financialOverview.whatsAppConversations}
                </div>
                <div className="text-xs opacity-80 font-medium">
                  Custo/conversa: <strong className="text-brand-white">{financialOverview.whatsAppCostPerConv}</strong>
                </div>
              </div>

              <div className="bg-brand-white/10 p-4 rounded-[10px]">
                <div className="text-xs uppercase tracking-wider opacity-85 mb-1 font-bold flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" /> Conversões Google
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">
                  {financialOverview.googleConversionsFormatted}
                </div>
                <div className="text-xs opacity-80 font-medium">
                  Custo/conv.: <strong className="text-brand-white">{financialOverview.googleCostPerConv}</strong>
                </div>
              </div>

              <div className="bg-brand-white/10 p-4 rounded-[10px]">
                <div className="text-xs uppercase tracking-wider opacity-85 mb-1 font-bold flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5" /> Visitas ao Perfil IG
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">
                  {financialOverview.profileVisitsFormatted}
                </div>
                <div className="text-xs opacity-80 font-medium">
                  Custo/visita: <strong className="text-brand-white">{financialOverview.profileVisitCost}</strong>
                </div>
              </div>

              <div className="bg-brand-white/10 p-4 rounded-[10px]">
                <div className="text-xs uppercase tracking-wider opacity-85 mb-1 font-bold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Alcance Único Meta
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold mb-1">
                  {financialOverview.reachFormatted}
                </div>
                <div className="text-xs opacity-80 font-medium">
                  Contas únicas atingidas
                </div>
              </div>
            </div>

            {/* Total Traffic Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-brand-white/15 text-xs text-brand-white/90">
              <div>
                <span className="opacity-75 block mb-0.5">Total de Impressões:</span>
                <span className="font-heading font-bold text-base text-brand-white">{financialOverview.impressionsFormatted}</span>
              </div>
              <div>
                <span className="opacity-75 block mb-0.5">Total de Cliques nos Anúncios:</span>
                <span className="font-heading font-bold text-base text-brand-white">{financialOverview.totalClicks.toLocaleString('pt-BR')} cliques</span>
              </div>
              <div>
                <span className="opacity-75 block mb-0.5">CTR Médio Meta / Frequência:</span>
                <span className="font-heading font-bold text-base text-brand-white">{financialOverview.metaCTR} · {financialOverview.metaFrequency}x</span>
              </div>
            </div>

            {/* Context Summary Callout */}
            <div className="mt-8 pt-6 border-t border-brand-white/20 bg-brand-white/10 -mx-4 md:-mx-8 -mb-4 md:-mb-8 p-6 md:px-8 rounded-b-[14px] flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-white shrink-0 mt-0.5" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-brand-white">
                <strong className="text-brand-white">Síntese do Período:</strong> {financialOverview.executiveContext}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ========================================================================= */}
        {/* 3. DE ONDE VIERAM OS RESULTADOS (ORIGEM DOS RESULTADOS) */}
        {/* ========================================================================= */}
        <div id="impacto-financeiro" className="space-y-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <Compass className="text-brand-coral w-7 h-7" />
              <h3 className="text-brand-graphite text-2xl md:text-4xl font-heading font-bold">
                De Onde Vieram os Resultados
              </h3>
            </div>
            <p className="text-brand-graphite/70 font-medium text-base md:text-lg">
              Divisão de papéis entre os canais: conversas quentes no WhatsApp e atração imediata nas buscas do Google.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channelOrigins.map((orig, idx) => {
              const Icon = orig.icon;
              return (
                <FadeIn key={idx} delay={0.1 + (idx * 0.1)} className="bg-brand-white border-2 border-brand-graphite/10 hover:border-brand-coral rounded-[14px] p-6 flex flex-col justify-between shadow-xs transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-brand-graphite/10">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-[8px] bg-brand-coral/10 text-brand-coral flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-coral block">
                            {orig.platform}
                          </span>
                          <span className="text-xs font-semibold text-brand-graphite/70">
                            {orig.channel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs uppercase font-bold tracking-wider text-brand-graphite/50 mb-1">
                        Resultado Gerado
                      </div>
                      <div className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite mb-1">
                        {orig.results}
                      </div>
                      <div className="text-xs font-semibold text-brand-coral">
                        Custo unitário: {orig.costPerResult}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 bg-brand-graphite/5 p-3 rounded-[10px] mb-4 text-xs">
                      <div>
                        <span className="text-brand-graphite/60 block mb-0.5 font-medium">Investido</span>
                        <strong className="text-brand-graphite font-heading text-sm">{orig.spend}</strong>
                      </div>
                      <div>
                        <span className="text-brand-graphite/60 block mb-0.5 font-medium">Cliques</span>
                        <strong className="text-brand-graphite font-heading text-sm">{orig.clicks}</strong>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-brand-graphite/80 font-medium leading-relaxed bg-brand-white border border-brand-graphite/10 p-3 rounded-[8px]">
                    {orig.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. VISÃO ESTRATÉGICA & DIAGNÓSTICO FINANCEIRO (SOLICITADO NA SEÇÃO ABAIXO) */}
        {/* ========================================================================= */}
        <div id="analise-estrategica" className="bg-brand-graphite/5 border-2 border-brand-coral/20 rounded-[16px] p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-4xl mb-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-3">
              Visão Analítica Pós-Impacto Financeiro
            </h3>
            <p className="text-brand-graphite/75 font-medium text-base md:text-lg leading-relaxed">
              Análise técnica sobre alavancas de escala, pontos de fuga de orçamento e estratégias para maximizar a conversão de orçamentos em contratos fechados para a Mansão Marion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicFinancialInsights.map((insight) => (
              <FadeIn key={insight.id} className="bg-brand-white border-2 border-brand-graphite/10 rounded-[12px] p-6 flex flex-col justify-between hover:border-brand-coral transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-coral">
                      {insight.tag}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-dark/10 text-brand-dark border border-brand-dark/20">
                      {insight.statusBadge}
                    </span>
                  </div>

                  <h4 className="text-xl font-heading font-bold text-brand-graphite mb-2 leading-snug">
                    {insight.title}
                  </h4>

                  <div className="inline-block bg-brand-coral/10 text-brand-coral font-bold text-xs px-2.5 py-1 rounded mb-4">
                    Indicador Chave: {insight.indicator}
                  </div>

                  <p className="text-sm text-brand-graphite/80 font-medium leading-relaxed mb-6">
                    {insight.analysis}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-graphite/10 bg-brand-graphite/[0.02] -mx-6 -mb-6 p-4 px-6 rounded-b-[12px] flex items-start gap-2 text-xs font-semibold text-brand-graphite">
                  <ArrowUpRight className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                  <span>{insight.action}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. META ADS: CAMPANHAS & PÚBLICOS NO PERÍODO */}
        {/* ========================================================================= */}
        <div id="meta-ads" className="space-y-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Instagram className="text-brand-coral w-7 h-7" />
                  <h3 className="text-brand-graphite text-3xl md:text-4xl font-heading font-bold">
                    Meta Ads · Campanhas & Segmentações
                  </h3>
                </div>
                <p className="text-brand-graphite/70 font-medium text-base">
                  R$ 4.017,67 investidos • 5.080 cliques no link • 327 conversas no WhatsApp • 3.262 visitas ao perfil
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="inline-flex p-1 bg-brand-graphite/5 border border-brand-graphite/15 rounded-[10px] self-start sm:self-auto">
                <button
                  onClick={() => setActiveMetaTab('campaigns')}
                  className={`px-4 py-2 rounded-[8px] text-xs font-bold transition-all ${
                    activeMetaTab === 'campaigns'
                      ? 'bg-brand-coral text-brand-white shadow-xs'
                      : 'text-brand-graphite/70 hover:text-brand-graphite'
                  }`}
                >
                  Campanhas (4 ativas)
                </button>
                <button
                  onClick={() => setActiveMetaTab('audiences')}
                  className={`px-4 py-2 rounded-[8px] text-xs font-bold transition-all ${
                    activeMetaTab === 'audiences'
                      ? 'bg-brand-coral text-brand-white shadow-xs'
                      : 'text-brand-graphite/70 hover:text-brand-graphite'
                  }`}
                >
                  Públicos / Conjuntos (7)
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Sub-view: Meta Campaigns Table & Cards */}
          {activeMetaTab === 'campaigns' ? (
            <FadeIn>
              <div className="bg-brand-white border-2 border-brand-graphite/10 rounded-[14px] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-4 px-5">Campanha</th>
                        <th className="py-4 px-4">Objetivo</th>
                        <th className="py-4 px-4">Investido</th>
                        <th className="py-4 px-4">Impressões</th>
                        <th className="py-4 px-4">Cliques</th>
                        <th className="py-4 px-4">CTR</th>
                        <th className="py-4 px-4">CPC</th>
                        <th className="py-4 px-4">CPM</th>
                        <th className="py-4 px-4">Resultados</th>
                        <th className="py-4 px-5 text-right">Custo / Res.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-graphite/10 font-medium">
                      {metaCampaigns.map((camp, idx) => (
                        <tr key={idx} className="hover:bg-brand-coral/[0.03] transition-colors">
                          <td className="py-4 px-5 font-bold text-brand-graphite">
                            <div className="font-heading text-base">{camp.name}</div>
                            <div className="text-[11px] text-brand-graphite/60 font-normal mt-0.5">{camp.highlight}</div>
                          </td>
                          <td className="py-4 px-4 text-brand-graphite/80">{camp.objective}</td>
                          <td className="py-4 px-4 font-bold text-brand-graphite whitespace-nowrap">{camp.spend}</td>
                          <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{camp.impressions}</td>
                          <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{camp.clicks}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 font-mono">{camp.ctr}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 whitespace-nowrap">{camp.cpc}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 whitespace-nowrap">{camp.cpm}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 bg-brand-coral/10 text-brand-coral font-bold px-2.5 py-1 rounded-full text-xs">
                              {camp.results.toLocaleString('pt-BR')} {camp.resultType}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right font-bold text-brand-coral font-heading text-base whitespace-nowrap">
                            {camp.costPerResult}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-brand-white border-2 border-brand-graphite/10 rounded-[14px] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-4 px-5">Público (Conjunto de Anúncios)</th>
                        <th className="py-4 px-4">Campanha Associada</th>
                        <th className="py-4 px-4">Investido</th>
                        <th className="py-4 px-4">Impressões</th>
                        <th className="py-4 px-4">Cliques</th>
                        <th className="py-4 px-4">CTR</th>
                        <th className="py-4 px-4">CPC</th>
                        <th className="py-4 px-4">CPM</th>
                        <th className="py-4 px-4">Resultados</th>
                        <th className="py-4 px-5 text-right">Custo / Res.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-graphite/10 font-medium">
                      {metaAudiences.map((aud, idx) => (
                        <tr key={idx} className="hover:bg-brand-coral/[0.03] transition-colors">
                          <td className="py-4 px-5 font-bold text-brand-graphite">
                            <div className="font-heading text-base">{aud.audience}</div>
                          </td>
                          <td className="py-4 px-4 text-brand-graphite/70 text-xs">{aud.campaign}</td>
                          <td className="py-4 px-4 font-bold text-brand-graphite whitespace-nowrap">{aud.spend}</td>
                          <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{aud.impressions}</td>
                          <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{aud.clicks}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 font-mono">{aud.ctr}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 whitespace-nowrap">{aud.cpc}</td>
                          <td className="py-4 px-4 text-brand-graphite/80 whitespace-nowrap">{aud.cpm}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 bg-brand-coral/10 text-brand-coral font-bold px-2 py-0.5 rounded text-xs">
                              {aud.results.toLocaleString('pt-BR')} {aud.resultLabel}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right font-bold text-brand-coral font-heading text-base whitespace-nowrap">
                            {aud.costPerResult}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 6. ANÚNCIOS QUE MAIS GERARAM CONVERSAS & POSTS PARA O PERFIL */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top WhatsApp Ads */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="text-brand-coral w-6 h-6" />
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite">
                  Anúncios que mais geraram conversas
                </h4>
              </div>
              <p className="text-xs md:text-sm text-brand-graphite/70 font-medium">
                Os 8 criativos com maior tração de mensagens no WhatsApp e o custo por conversa de cada um.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topWhatsAppAds.map((ad) => (
                <FadeIn key={ad.rank} className="bg-brand-white border border-brand-graphite/15 hover:border-brand-coral p-4 rounded-[12px] flex items-center justify-between gap-3 shadow-xs transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-coral/10 text-brand-coral font-heading font-bold text-sm flex items-center justify-center shrink-0">
                      #{ad.rank}
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-base text-brand-graphite leading-tight mb-0.5">
                        {ad.name}
                      </h5>
                      <span className="text-[10px] text-brand-graphite/60 block line-clamp-1">
                        {ad.campaign}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-heading font-bold text-brand-coral text-lg leading-tight">
                      {ad.conversations} chats
                    </div>
                    <div className="text-[11px] font-semibold text-brand-graphite/70">
                      {ad.costPerConv}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Top Instagram Profile Posts */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <div className="flex items-center gap-2 mb-2">
                <Instagram className="text-brand-coral w-6 h-6" />
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite">
                  Posts que mais levaram ao perfil
                </h4>
              </div>
              <p className="text-xs md:text-sm text-brand-graphite/70 font-medium">
                Visitas ao perfil do Instagram por post impulsionado e respectivo CTR.
              </p>
            </FadeIn>

            <div className="space-y-3">
              {topInstagramPosts.map((post, idx) => (
                <FadeIn key={idx} className="bg-brand-white border border-brand-graphite/15 hover:border-brand-coral p-4 rounded-[12px] shadow-xs transition-colors">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="font-heading font-bold text-base text-brand-graphite">
                      "{post.name}"
                    </span>
                    <span className="bg-brand-coral/10 text-brand-coral text-xs font-bold px-2 py-0.5 rounded-full font-mono">
                      CTR: {post.ctr}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-brand-graphite/70 font-medium">
                    <span>{post.type}</span>
                    <strong className="text-brand-graphite font-heading text-sm">
                      {post.visits.toLocaleString('pt-BR')} visitas
                    </strong>
                  </div>
                  <div className="mt-2 text-[11px] text-brand-graphite/60 border-t border-brand-graphite/10 pt-1.5 font-normal">
                    {post.highlight}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 7. GOOGLE ADS: PESQUISA E GOOGLE MEU NEGÓCIO */}
        {/* ========================================================================= */}
        <div id="google-ads" className="space-y-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <Search className="text-brand-coral w-7 h-7" />
              <h3 className="text-brand-graphite text-3xl md:text-4xl font-heading font-bold">
                Google Ads · Pesquisa & Google Meu Negócio
              </h3>
            </div>
            <p className="text-brand-graphite/70 font-medium text-base">
              R$ 7.914,38 investidos • 4.427 cliques • 1.338,6 conversões diretas a um custo médio de R$ 5,91
            </p>
          </FadeIn>

          {/* Google 2 Core Pillars Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleSummaryGroups.map((group, idx) => (
              <FadeIn key={idx} className="bg-brand-white border-2 border-brand-graphite/15 hover:border-brand-coral p-6 rounded-[14px] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-brand-graphite/10">
                    <h4 className="font-heading font-bold text-xl text-brand-graphite">
                      {group.title}
                    </h4>
                    <span className="text-xs uppercase font-bold text-brand-coral bg-brand-coral/10 px-2.5 py-1 rounded-full">
                      Pilar {idx + 1}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6 bg-brand-graphite/5 p-4 rounded-[10px] text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-graphite/50 block mb-0.5">Conversões</span>
                      <strong className="text-2xl font-heading font-bold text-brand-coral">{group.conversions}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-graphite/50 block mb-0.5">Custo/Conv.</span>
                      <strong className="text-xl font-heading font-bold text-brand-graphite">{group.costPerConv}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-graphite/50 block mb-0.5">Investido</span>
                      <strong className="text-sm font-heading font-bold text-brand-graphite block mt-1">{group.spend}</strong>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-brand-graphite/80 font-medium leading-relaxed bg-brand-white border border-brand-graphite/10 p-3 rounded-[8px]">
                  {group.description}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Google Campaigns Detailed Table */}
          <FadeIn>
            <div className="bg-brand-white border-2 border-brand-graphite/10 rounded-[14px] overflow-hidden shadow-xs">
              <div className="p-5 border-b border-brand-graphite/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-xl text-brand-graphite">
                    Campanhas Ativas no Período (Google Ads)
                  </h4>
                  <p className="text-xs text-brand-graphite/60 font-medium">
                    As campanhas pausadas não registraram investimento entre 01 e 27/10/2026.
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full">
                  5 Campanhas Ativas
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Campanha</th>
                      <th className="py-4 px-4">Tipo</th>
                      <th className="py-4 px-4">Investido</th>
                      <th className="py-4 px-4">Impressões</th>
                      <th className="py-4 px-4">Cliques</th>
                      <th className="py-4 px-4">CTR</th>
                      <th className="py-4 px-4">CPC</th>
                      <th className="py-4 px-4">Conversões</th>
                      <th className="py-4 px-4">Taxa Conv.</th>
                      <th className="py-4 px-4">Custo/Conv.</th>
                      <th className="py-4 px-5">Status do Google</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-graphite/10 font-medium">
                    {googleCampaigns.map((camp, idx) => (
                      <tr key={idx} className="hover:bg-brand-coral/[0.03] transition-colors">
                        <td className="py-4 px-5 font-bold text-brand-graphite whitespace-nowrap">
                          <div className="font-heading text-base">{camp.name}</div>
                        </td>
                        <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{camp.type}</td>
                        <td className="py-4 px-4 font-bold text-brand-graphite whitespace-nowrap">{camp.spend}</td>
                        <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{camp.impressions}</td>
                        <td className="py-4 px-4 text-brand-graphite/70 whitespace-nowrap">{camp.clicks}</td>
                        <td className="py-4 px-4 text-brand-graphite/80 font-mono whitespace-nowrap">{camp.ctr}</td>
                        <td className="py-4 px-4 text-brand-graphite/80 whitespace-nowrap">{camp.cpc}</td>
                        <td className="py-4 px-4 font-bold text-brand-coral whitespace-nowrap">{camp.conversions}</td>
                        <td className="py-4 px-4 text-brand-graphite/80 font-mono whitespace-nowrap">{camp.convRate}</td>
                        <td className="py-4 px-4 font-bold text-brand-graphite whitespace-nowrap font-heading">{camp.costPerConv}</td>
                        <td className="py-4 px-5 whitespace-nowrap">
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                            camp.statusType === 'warning'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : camp.statusType === 'success'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {camp.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* 8. O QUE DEU CERTO • INSIGHTS ESTRATÉGICOS (NO FINAL DA SEÇÃO DE CAMPANHA) */}
        {/* ========================================================================= */}
        <div id="insights" className="space-y-8 pt-8 border-t-2 border-brand-graphite/10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-brand-coral w-8 h-8" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-coral">
                Conclusões & Aprendizados da Campanha
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-graphite mb-4">
              O Que Deu Certo no Período
            </h3>
            <p className="text-brand-graphite/75 font-medium text-base md:text-lg max-w-3xl">
              Os 5 pilares de sucesso operacional identificados na auditoria de dados do Meta Ads e Google Ads para orientar o próximo ciclo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyInsights.map((ins, idx) => (
              <FadeIn 
                key={idx} 
                delay={0.1 * idx} 
                className={`bg-brand-white border-2 rounded-[14px] p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
                  idx === 0 
                    ? 'border-brand-coral/40 lg:col-span-2 bg-gradient-to-br from-brand-white to-brand-coral/[0.04]' 
                    : 'border-brand-graphite/10 hover:border-brand-coral'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-heading font-bold text-3xl md:text-4xl text-brand-coral/30">
                      {ins.number}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-wider bg-brand-coral text-brand-white px-3 py-1 rounded-full shadow-xs">
                      {ins.badge}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-heading font-bold text-brand-graphite mb-2 leading-snug">
                    {ins.title}
                  </h4>

                  <div className="text-xs md:text-sm font-bold text-brand-coral bg-brand-coral/10 px-3 py-1.5 rounded-[8px] mb-4 inline-block">
                    {ins.highlight}
                  </div>

                  <p className="text-sm md:text-base text-brand-graphite/85 font-medium leading-relaxed mb-6">
                    {ins.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-graphite/10 flex items-center gap-2 text-xs text-brand-graphite/60 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Validado no período 01 a 27/10</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
