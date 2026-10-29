import { 
  TrendingUp, 
  Target, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  DollarSign, 
  Flame, 
  Eye, 
  MousePointerClick, 
  Instagram, 
  MessageCircle, 
  Search, 
  MapPin, 
  Award, 
  Clock, 
  Layers, 
  ArrowUpRight, 
  BarChart3, 
  Users, 
  HelpCircle,
  Building2,
  HeartHandshake
} from 'lucide-react';

export const presentationMeta = {
  date: "27/10/2026",
  title: "Relatório de Mídia Paga",
  subtitle: "Meta Ads & Google Ads",
  brand: "Mansão Marion",
  methodology: "R O P R E",
  methodologyFullName: "Report • Objetivos • Premissas • Riscos • Entregas",
  period: "01 a 27 de outubro de 2026 (27 dias)",
  agency: "V4 Company",
  client: "Mansão Marion",
  executiveSummary: "Em 27 dias, investimos R$ 11.932,05 e geramos 327 conversas no WhatsApp pelo Instagram e Facebook e 1.338,6 conversões no Google, com a pesquisa de casamentos e o Google Meu Negócio puxando o resultado."
};

export const indexSections = [
  { id: "visao-geral", label: "Visão Consolidada", subtitle: "Meta Ads & Google Ads", tag: "Report" },
  { id: "impacto-financeiro", label: "Origem & Eficiência", subtitle: "WhatsApp vs. Google", tag: "Report" },
  { id: "analise-estrategica", label: "Diagnóstico Financeiro", subtitle: "Alavancagem & Oportunidades", tag: "Estratégia" },
  { id: "meta-ads", label: "Meta Ads Detalhado", subtitle: "Campanhas, Públicos & Criativos", tag: "Canais" },
  { id: "google-ads", label: "Google Ads Detalhado", subtitle: "Pesquisa & Google Meu Negócio", tag: "Canais" },
  { id: "insights", label: "O Que Deu Certo", subtitle: "Principais Aprendizados", tag: "Insights" },
  { id: "objetivos", label: "Objetivos & OKRs", subtitle: "Avanço e Metas", tag: "Objetivos" },
  { id: "riscos", label: "Premissas e Riscos", subtitle: "Matriz P x I com Scores", tag: "Riscos" },
  { id: "pendencias", label: "Pendências & Ações", subtitle: "CRM, Comercial e Agenda", tag: "Operação" },
];

export const financialOverview = {
  spendTotal: 11932.05,
  spendTotalFormatted: "R$ 11.932,05",
  metaSpend: 4017.67,
  metaSpendFormatted: "R$ 4.017,67",
  googleSpend: 7914.38,
  googleSpendFormatted: "R$ 7.914,38",
  whatsAppSpend: 3485.85,
  whatsAppSpendFormatted: "R$ 3.485,85",
  
  whatsAppConversations: 327,
  whatsAppCostPerConv: "R$ 10,66",
  
  googleConversions: 1338.6,
  googleConversionsFormatted: "1.338,6",
  googleCostPerConv: "R$ 5,91",
  
  totalLeadActions: 1665.6,
  totalLeadActionsFormatted: "1.665,6",
  avgCostPerAction: "R$ 7,16",
  
  profileVisits: 3262,
  profileVisitsFormatted: "3.262",
  profileVisitCost: "R$ 0,16",
  
  impressions: 540177,
  impressionsFormatted: "540.177",
  reach: 226092,
  reachFormatted: "226.092",
  
  totalClicks: 9507,
  metaClicks: 5080,
  googleClicks: 4427,
  
  metaCTR: "1,81%",
  metaCPM: "R$ 14,34",
  metaFrequency: "1,24",
  
  period: "01/10 a 27/10/2026",
  daysCount: 27,
  executiveContext: "Em 27 dias, o investimento total de R$ 11.932,05 gerou 327 conversas qualificadas no WhatsApp e 1.338,6 conversões de alta intenção no Google Ads. O ecossistema integrado uniu captação ativa via Meta com busca pontual no Google, garantindo fluxo ininterrupto de orçamentos para a Mansão Marion."
};

export const channelOrigins = [
  {
    channel: "WhatsApp pelo Instagram e Facebook",
    platform: "Meta Ads",
    icon: MessageCircle,
    color: "coral",
    results: "327 conversas iniciadas",
    costPerResult: "R$ 10,66",
    spend: "R$ 3.485,85",
    clicks: "1.452",
    badge: "Contato Mais Quente",
    description: "Contato mais quente do funil: leads que viram os anúncios e chamaram diretamente a Mansão no WhatsApp para orçar celebrações."
  },
  {
    channel: "Google Ads (Pesquisa + Meu Negócio)",
    platform: "Google Ads",
    icon: Search,
    color: "dark",
    results: "1.338,6 conversões",
    costPerResult: "R$ 5,91",
    spend: "R$ 7.914,38",
    clicks: "4.427",
    badge: "Alta Intenção Direta",
    description: "Usuários com alta intenção de busca por espaço de eventos ou que acionaram o perfil da Mansão no Google Maps."
  },
  {
    channel: "Visão Global Meta Ads",
    platform: "Instagram e Facebook",
    icon: Instagram,
    color: "accent",
    results: "3.262 visitas ao perfil + 327 chats",
    costPerResult: "R$ 0,16 / visita ao perfil",
    spend: "R$ 4.017,67",
    clicks: "5.080 cliques no link",
    badge: "Branding & Geração de Demanda",
    description: "Alcance de 226k contas com CTR de 1,81%, CPM de R$ 14,34 e frequência equilibrada de 1,24 para geração contínua de demanda."
  }
];

export const strategicFinancialInsights = [
  {
    id: 1,
    tag: "Oportunidade de Escala Imediata",
    title: "Casamentos no Google: Demanda Reprimida & Alta Conversão",
    indicator: "324,43 conv. • R$ 12,34/conv.",
    statusBadge: "Limitada pelo Orçamento",
    analysis: "Carro-chefe com 13,99% de conversão e CTR de 7,10%. O status 'Limitada pelo orçamento' indica demanda ativa reprimida pronta para ser absorvida com remanejamento de verba.",
    action: "Recomendação: Incrementar a cota da Pesquisa Casamentos através do remanejamento de verba de campanhas com CPA elevado."
  },
  {
    id: 2,
    tag: "Ajuste de Alocação de Capital",
    title: "Otimização de Pesquisa em Aniversários e Corporativo",
    indicator: "CPCs de R$ 11,51 e R$ 3,42",
    statusBadge: "Custo por Conversão Alto",
    analysis: "CPAs elevados (R$ 116 e R$ 90) e dispersão de termos. Recomenda-se negativação ágil e transferência de até 50% do orçamento para Casamentos e Google Maps.",
    action: "Recomendação: Negativação intensiva de termos irrelevantes e migração de 40% a 50% dessa verba para Casamentos e Google Meu Negócio."
  },
  {
    id: 3,
    tag: "Esteira de Eficiência Omnichannel",
    title: "Nutrição Barata: Do Perfil ao Remarketing de WhatsApp",
    indicator: "R$ 0,16/visita • R$ 9,20/conversa",
    statusBadge: "Sinergia de Canais",
    analysis: "3.262 visitas ao Instagram a R$ 0,16 abastecem continuamente o Remarketing, barateando as conversas no WhatsApp para R$ 8,54 a R$ 9,20.",
    action: "Recomendação: Manter o tráfego de perfil ativo como catalisador contínuo de base para fechar orçamentos no WhatsApp."
  },
  {
    id: 4,
    tag: "Alavanca de Retorno Financeiro",
    title: "SLA Comercial no WhatsApp: Conversão em Visita Presencial",
    indicator: "327 conversas a R$ 10,66",
    statusBadge: "Fator Chave de ROI",
    analysis: "327 conversas a R$ 10,66. O multiplicador de ROI é a resposta rápida (< 5 min) direcionada para agendar visita e degustação no espaço físico.",
    action: "Recomendação: Padronizar script de transição rápida 'WhatsApp -> Agendamento de Visita no Espaço' para maximizar taxa de fechamento de contratos."
  }
];

export const metaCampaigns = [
  {
    name: "Remarketing WhatsApp",
    objective: "Conversas no WhatsApp",
    spend: "R$ 1.592,04",
    impressions: "161.920",
    clicks: "970",
    ctr: "0,60%",
    cpc: "R$ 1,64",
    cpm: "R$ 9,83",
    results: 173,
    resultType: "conversas",
    costPerResult: "R$ 9,20",
    highlight: "Campanha de WhatsApp mais eficiente da conta. Reimpacta quem visitou o site ou Instagram."
  },
  {
    name: "Vendas WhatsApp Casamento e Aniversário",
    objective: "Conversas no WhatsApp",
    spend: "R$ 1.559,72",
    impressions: "45.983",
    clicks: "426",
    ctr: "0,93%",
    cpc: "R$ 3,66",
    cpm: "R$ 33,92",
    results: 136,
    resultType: "conversas",
    costPerResult: "R$ 11,47",
    highlight: "Captação direta de público novo para celebrações, sustentando 136 novos contatos quentes."
  },
  {
    name: "Tráfego para o perfil do Instagram",
    objective: "Visitas ao perfil",
    spend: "R$ 531,82",
    impressions: "67.063",
    clicks: "3.628",
    ctr: "5,41%",
    cpc: "R$ 0,15",
    cpm: "R$ 7,93",
    results: 3262,
    resultType: "visitas ao perfil",
    costPerResult: "R$ 0,16",
    highlight: "CTR de 5,41% trazendo público ultra segmentado para o @ da Mansão por apenas 16 centavos."
  },
  {
    name: "Vendas WhatsApp Confraternização",
    objective: "Conversas no WhatsApp",
    spend: "R$ 334,09",
    impressions: "5.191",
    clicks: "56",
    ctr: "1,08%",
    cpc: "R$ 5,97",
    cpm: "R$ 64,36",
    results: 18,
    resultType: "conversas",
    costPerResult: "R$ 18,56",
    highlight: "Início da esteira para confraternizações e eventos corporativos de final de ano."
  }
];

export const metaAudiences = [
  {
    audience: "Aniversário · público amplo no raio",
    campaign: "Vendas WhatsApp Casamento e Aniversário",
    spend: "R$ 848,19",
    impressions: "34.744",
    clicks: "324",
    ctr: "0,93%",
    cpc: "R$ 2,62",
    cpm: "R$ 24,41",
    results: 95,
    resultLabel: "conversas",
    costPerResult: "R$ 8,93"
  },
  {
    audience: "Casamento · remarketing Instagram e Google",
    campaign: "Remarketing WhatsApp",
    spend: "R$ 797,69",
    impressions: "73.470",
    clicks: "461",
    ctr: "0,63%",
    cpc: "R$ 1,73",
    cpm: "R$ 10,86",
    results: 80,
    resultLabel: "conversas",
    costPerResult: "R$ 9,97"
  },
  {
    audience: "Aniversário · remarketing Instagram e Google",
    campaign: "Remarketing WhatsApp",
    spend: "R$ 794,35",
    impressions: "88.450",
    clicks: "509",
    ctr: "0,58%",
    cpc: "R$ 1,56",
    cpm: "R$ 8,98",
    results: 93,
    resultLabel: "conversas",
    costPerResult: "R$ 8,54"
  },
  {
    audience: "Casamento · raio +7 km",
    campaign: "Vendas WhatsApp Casamento e Aniversário",
    spend: "R$ 711,53",
    impressions: "11.239",
    clicks: "102",
    ctr: "0,91%",
    cpc: "R$ 6,98",
    cpm: "R$ 63,31",
    results: 41,
    resultLabel: "conversas",
    costPerResult: "R$ 17,35"
  },
  {
    audience: "Confraternização · público amplo",
    campaign: "Vendas WhatsApp Confraternização",
    spend: "R$ 334,09",
    impressions: "5.191",
    clicks: "56",
    ctr: "1,08%",
    cpc: "R$ 5,97",
    cpm: "R$ 64,36",
    results: 18,
    resultLabel: "conversas",
    costPerResult: "R$ 18,56"
  },
  {
    audience: "Casamento · perfil do Instagram",
    campaign: "Tráfego para o perfil do Instagram",
    spend: "R$ 266,14",
    impressions: "30.789",
    clicks: "1.472",
    ctr: "4,78%",
    cpc: "R$ 0,18",
    cpm: "R$ 8,64",
    results: 1353,
    resultLabel: "visitas",
    costPerResult: "R$ 0,20"
  },
  {
    audience: "Aniversário · perfil do Instagram",
    campaign: "Tráfego para o perfil do Instagram",
    spend: "R$ 265,68",
    impressions: "36.274",
    clicks: "2.156",
    ctr: "5,94%",
    cpc: "R$ 0,12",
    cpm: "R$ 7,32",
    results: 1909,
    resultLabel: "visitas",
    costPerResult: "R$ 0,14"
  }
];

export const topWhatsAppAds = [
  {
    name: "ADS | 04.08",
    campaign: "Vendas WhatsApp Casamento e Aniversário",
    conversations: 86,
    costPerConv: "R$ 8,71",
    rank: 1,
    badge: "Campeão Geral"
  },
  {
    name: "AD08 ent - 14/07",
    campaign: "Remarketing WhatsApp",
    conversations: 66,
    costPerConv: "R$ 7,35",
    rank: 2,
    badge: "Menor Custo WhatsApp"
  },
  {
    name: "AD08 - 04/08",
    campaign: "Remarketing WhatsApp",
    conversations: 49,
    costPerConv: "R$ 9,42",
    rank: 3,
    badge: "Top Remarketing"
  },
  {
    name: "ADS | 26.06",
    campaign: "Vendas WhatsApp Casamento e Aniversário",
    conversations: 44,
    costPerConv: "R$ 15,46",
    rank: 4,
    badge: "Alta Tração"
  },
  {
    name: "AD09 - 04/08",
    campaign: "Remarketing WhatsApp",
    conversations: 19,
    costPerConv: "R$ 8,89",
    rank: 5,
    badge: "Eficiente"
  },
  {
    name: "AD07 img - 23/07 (cópia)",
    campaign: "Remarketing WhatsApp",
    conversations: 12,
    costPerConv: "R$ 7,57",
    rank: 6,
    badge: "Econômico"
  },
  {
    name: "ADS | 20.10 | VIDEO 2",
    campaign: "Vendas WhatsApp Confraternização",
    conversations: 11,
    costPerConv: "R$ 15,72",
    rank: 7,
    badge: "Confraternização"
  },
  {
    name: "AD03 vídeo",
    campaign: "Remarketing WhatsApp",
    conversations: 10,
    costPerConv: "R$ 13,74",
    rank: 8,
    badge: "Vídeo Remarketing"
  }
];

export const topInstagramPosts = [
  {
    name: "roberto e glenda",
    visits: 1310,
    ctr: "4,80%",
    type: "Post Casal / Casamento",
    highlight: "1.310 pessoas levadas ao perfil com narrativa de casamento real."
  },
  {
    name: "Post IG",
    visits: 1151,
    ctr: "4,21%",
    type: "Post Institucional / Espaço",
    highlight: "1.151 visitas geradas com forte atração de ambientação."
  },
  {
    name: "Entrada lorena",
    visits: 758,
    ctr: "11,91%",
    type: "Post Debutante / Cerimônia",
    highlight: "CTR recorde de 11,91%: impacto emocional elevadíssimo."
  },
  {
    name: "Post estático",
    visits: 36,
    ctr: "3,91%",
    type: "Foto do Espaço",
    highlight: "Engajamento pontual em foto dos ambientes da mansão."
  },
  {
    name: "Gilvania e Luis!",
    visits: 7,
    ctr: "8,16%",
    type: "Post Celebração",
    highlight: "CTR qualificado de 8,16% comprovando apelo de casais reais."
  }
];

export const googleCampaigns = [
  {
    name: "Pesquisa Casamentos",
    type: "Pesquisa",
    spend: "R$ 4.002,13",
    impressions: "32.653",
    clicks: "2.319",
    ctr: "7,10%",
    cpc: "R$ 1,73",
    conversions: "324,43",
    convRate: "13,99%",
    costPerConv: "R$ 12,34",
    status: "Limitada pelo orçamento",
    statusType: "warning"
  },
  {
    name: "Google Meu Negócio (Performance Max)",
    type: "Performance Max",
    spend: "R$ 1.332,08",
    impressions: "206.423",
    clicks: "1.500",
    ctr: "0,73%",
    cpc: "R$ 0,89",
    conversions: "990,67",
    convRate: "53,39%",
    costPerConv: "R$ 1,34",
    status: "Sem limitação",
    statusType: "success"
  },
  {
    name: "Pesquisa Aniversários",
    type: "Pesquisa",
    spend: "R$ 1.392,31",
    impressions: "14.718",
    clicks: "121",
    ctr: "0,82%",
    cpc: "R$ 11,51",
    conversions: "12,00",
    convRate: "9,92%",
    costPerConv: "R$ 116,03",
    status: "Limitada pelo volume de buscas",
    statusType: "info"
  },
  {
    name: "Pesquisa Corporativo",
    type: "Pesquisa",
    spend: "R$ 1.043,70",
    impressions: "5.188",
    clicks: "305",
    ctr: "5,88%",
    cpc: "R$ 3,42",
    conversions: "11,50",
    convRate: "3,77%",
    costPerConv: "R$ 90,76",
    status: "Limitada pelo orçamento · em aprendizado",
    statusType: "warning"
  },
  {
    name: "Pesquisa Institucional (marca)",
    type: "Pesquisa",
    spend: "R$ 144,16",
    impressions: "1.038",
    clicks: "182",
    ctr: "17,53%",
    cpc: "R$ 0,79",
    conversions: "0,00",
    convRate: "0,00%",
    costPerConv: "—",
    status: "Limitada pelo volume de buscas",
    statusType: "info"
  }
];

export const googleSummaryGroups = [
  {
    title: "Pesquisa Google (As 4 Campanhas de Busca)",
    conversions: "347,93",
    costPerConv: "R$ 18,92",
    spend: "R$ 6.582,30",
    clicks: "2.927",
    description: "Quem digitou no Google o que a Mansão Marion oferece. A campanha de Casamentos responde pela esmagadora maioria das conversões de pesquisa (324 de 347 conv.), demonstrando a força do nicho de casamentos."
  },
  {
    title: "Google Meu Negócio (Performance Max Local)",
    conversions: "990,67",
    costPerConv: "R$ 1,34",
    spend: "R$ 1.332,08",
    clicks: "1.500",
    description: "Pessoas que encontraram a Mansão no Google e no Maps e tomaram uma ação no perfil da empresa. Taxa de conversão recorde de 53,39%: mais da metade dos cliques virou uma ação de contato direto."
  }
];

export const keyInsights = [
  {
    number: "01",
    title: "Pesquisa de casamentos é o carro-chefe do Google",
    highlight: "324,43 conversões a R$ 12,34 cada • CTR 7,10%",
    badge: "Carro-Chefe",
    detail: "Quem procura espaço para casar está encontrando e clicando na Mansão Marion com altíssima taxa de decisão (13,99% de taxa de conversão). O interesse é concreto e com intenção comercial madura."
  },
  {
    number: "02",
    title: "Google Meu Negócio com o menor custo da conta",
    highlight: "990,67 conversões locais a R$ 1,34 • 206.423 impressões",
    badge: "Maior Eficiência",
    detail: "Mantendo a Mansão Marion presente com máxima relevância para quem pesquisa na região no Google e Google Maps. Mais da metade dos visitantes (53,39%) realizou uma ação direta de contato."
  },
  {
    number: "03",
    title: "Remarketing é a campanha de WhatsApp mais eficiente",
    highlight: "173 conversas a R$ 9,20 no Meta Ads",
    badge: "Retenção Quente",
    detail: "Quem já interagiu com o Instagram ou visitou o site volta e chama no WhatsApp. O público de aniversário saiu ainda mais barato (R$ 8,54 por conversa iniciada)."
  },
  {
    number: "04",
    title: "Público amplo de aniversário no raio",
    highlight: "95 conversas a R$ 8,93 no Meta",
    badge: "Volume Amplo",
    detail: "Puxado com maestria pelo anúncio ADS | 04.08, que foi o criativo que mais gerou conversas no mês inteiro (86 conversas diretas a R$ 8,71 cada)."
  },
  {
    number: "05",
    title: "Posts de casais trazem gente ao perfil por centavos",
    highlight: "3.262 visitas ao perfil a R$ 0,16 cada",
    badge: "Atração Viral",
    detail: "O post 'Entrada lorena' alcançou um CTR extraordinário de 11,91%, e o post 'roberto e glenda' levou sozinho 1.310 pessoas qualificadas ao @ da Mansão Marion, barateando todo o topo do funil."
  }
];

export const auditFooter = {
  source: "Gerenciador de Anúncios do Meta e Google Ads",
  period: "01/10/2026 a 27/10/2026 (27 dias)",
  methodologyNotes: [
    "No Google Ads, as campanhas pausadas não tiveram investimento registrado no período avaliado.",
    "As conversões do Google podem apresentar casas decimais porque a plataforma utiliza modelos de atribuição baseados em dados (data-driven attribution), repartindo frações de crédito entre diferentes interações do usuário."
  ]
};

export const objectivesData = {
  macro: {
    title: "Meta de Faturamento Viável",
    value: "R$ 325.000,00",
    calculation: "Olhando para os nossos indicadores atuais de campanha, taxas de conversão da equipe comercial, investimento atual e o nosso Custo por Aquisição (CAC), nossa meta viável hoje é de R$ 325.000,00.",
    nextStepTitle: "O Caminho Inteligente para Dobrar a Meta",
    nextStep: "O caminho para dobrar a meta não é dobrar a verba agora, mas elevar a conversão comercial (agendamento, comparecimento e mesa). Com o funil calibrado, a escala de mídia virá com retorno maximizado.",
    currentRevenue: "R$ 325.000,00",
    targetRevenue: "Futura Escala (2x)",
    budget: "Investimento Atual",
    description: "Com volume e qualificação validados, o foco prioritário é estancar furos no funil comercial via dados do Kommo e relatórios da Gabi antes de acelerar novos aportes."
  },
  krs: [
    {
      code: "KR 1",
      title: "Escalar a Operação Corrigindo o Gargalo Comercial Primeiro",
      scenario: "Nossas campanhas já alcançaram um volume e uma qualificação de leads muito positivos. No entanto, se escalarmos a mídia atual (colocarmos mais dinheiro) sem resolver o gargalo de conversão do time comercial, continuaremos tendo furos no funil.",
      solution: "Antes de escalar o investimento para trazer mais leads, precisamos garantir que os leads atuais estão sendo aproveitados ao máximo. O foco absoluto é corrigir o fluxo de vendas utilizando os dados reais do CRM (Kommo) e os relatórios diários de agendamento/comparecimento que a Gabi manda no grupo.",
      positiveSide: "Apesar desse gargalo, já estamos conseguindo melhorar nossa meta de fechamentos cada vez mais, o que prova que os ajustes estão funcionando.",
      progress: "Em Execução Contínua",
      badge: "Comercial & CRM (Kommo)"
    },
    {
      code: "KR 2",
      title: "Elevação das Taxas do Funil Presencial (Agendamento, Comparecimento e Mesa)",
      scenario: "A meta viável de R$ 325.000,00 está mapeada com base no CAC e investimento atual.",
      solution: "Trabalhar prioritariamente na elevação das três taxas críticas: taxa de agendamento no primeiro contato, taxa de comparecimento presencial na Mansão Marion e taxa de fechamento de contrato na mesa de negociação.",
      positiveSide: "Uma vez que o comercial esteja convertendo a taxas mais altas, aí sim escalaremos o investimento para multiplicar o faturamento com segurança matemática.",
      progress: "Alinhamento com Equipe",
      badge: "Eficiência de Mesa"
    }
  ]
};

export const strategicImprovements = [
  {
    title: "Novos Testes de Vídeo (Captação Sabrina)",
    badge: "Qualificação de Topo",
    description: "Já implementamos melhorias com os novos vídeos captados junto com a Sabrina, o que ajuda a qualificar melhor o lead logo na atração e primeiro impacto.",
    icon: Sparkles
  },
  {
    title: "Campanha de Black Friday Ativa",
    badge: "Oferta Especial",
    description: "Já alteramos a oferta e subimos os vídeos novos com a Sabrina focados na Black Friday para acelerar orçamentos de celebrações.",
    icon: Flame
  },
  {
    title: "Novos Criativos Estáticos & Metrificação de Novembro",
    badge: "Foco Novembro",
    description: "Estamos desenvolvendo novos materiais estáticos (statics) para trabalhar durante esse período promocional. O objetivo central agora em novembro é metrificar rigorosamente o volume e a qualificação que essa oferta de Black Friday vai nos trazer.",
    icon: Target
  }
];

export const premisesData = [
  {
    number: "01",
    title: "Antecipação e Alinhamento de Ofertas",
    tag: "Planejamento Estratégico",
    description: "Condições e ofertas desenhadas com antecedência junto à V4 para garantir tempo de produção, aprovação e maturação ideal no algoritmo."
  },
  {
    number: "02",
    title: "Acompanhamento Contínuo (Onde está a verdade)",
    tag: "Decisão Baseada em Dados",
    description: "Decisões orientadas 100% pelas taxas reais do CRM (Kommo) e pelos relatórios diários de agendamento que a Gabi envia no WhatsApp."
  },
  {
    number: "03",
    title: "Parceria e Feedback Constante",
    tag: "Comunicação Aberta",
    description: "Comunicação contínua e alinhamento em tempo real entre o time comercial e a V4 para sustentar a evolução rápida dos fechamentos."
  }
];

export const risksData = [
  {
    id: 1,
    title: "Escalar Investimento de Forma Prematura",
    level: "Alto",
    riskText: "Aumentar a verba de anúncios sem que o time comercial esteja convertendo a uma taxa ideal. Isso resultaria apenas em pagar mais caro para perder leads ao longo do funil.",
    mitigation: "Não dobrar o investimento agora: focar primeiro na elevação das taxas de conversão (agendamento, comparecimento e mesa). Aumentar verba apenas com o funil comercial calibrado."
  },
  {
    id: 2,
    title: "Falta de Clareza Diária nos Indicadores de Conversão",
    level: "Crítico",
    riskText: "O time de marketing e o time comercial trabalharem com números diferentes (o que está no CRM vs. o que de fato fechou no salão), impedindo a V4 de otimizar as campanhas para quem realmente compra.",
    mitigation: "Ação Proposta: Instituir uma Reunião Semanal Curta Exclusiva de CRM (30 min) para revisarmos juntos o funil, garantirmos a clareza dos indicadores de taxa de conversão e passarmos os pontos de revisão para a equipe comercial corrigir na semana."
  }
];

export const deliverablesData = {
  done: [
    {
      title: "Vídeos de Black Friday no Ar",
      detail: "Material captado pela Sabrina aprovado e já em veiculação ativa nas campanhas de mídia."
    },
    {
      title: "Novos Vídeos de Tração",
      detail: "Testes de novos criativos rodando para qualificar melhor o lead no topo de funil."
    },
    {
      title: "Mapeamento da Meta Viável (R$ 325k)",
      detail: "Meta de faturamento estruturada com base no CAC, investimento atual e indicadores comerciais."
    }
  ],
  upcoming: [
    {
      title: "Desenvolvimento de Novos Criativos Estáticos (Statics)",
      detail: "Desenvolvimento de novos materiais estáticos focados em comunicar a locação da sala e espaços para eventos corporativos após o encerramento deste final de ano.",
      responsible: "V4 Company",
      status: "Em produção"
    },
    {
      title: "Metrificação da Oferta de Novembro",
      detail: "Acompanhamento rigoroso de volume x qualificação dos leads vindos da campanha de Black Friday.",
      responsible: "V4 + Gabi / Comercial",
      status: "Em andamento"
    },
    {
      title: "Aprovação da Call Semanal de CRM",
      detail: "Definir um dia e horário na semana para a reunião rápida (30 min) de revisão de funil e taxas de conversão com Marcelo, Gilmara e Gabi.",
      responsible: "Mansão Marion",
      status: "Aguardando definição"
    }
  ]
};

export const pendingActions = [
  {
    category: "Eventos Corporativos",
    title: "Desenvolvimento de Novos Criativos Estáticos (Statics)",
    description: "Desenvolvimento de novos materiais estáticos para comunicar a locação da sala e espaços da Mansão Marion para eventos corporativos após este período de final de ano.",
    impact: "Abertura e fortalecimento de um canal contínuo de locação corporativa para o primeiro semestre.",
    responsible: "V4 Company",
    status: "Em produção"
  },
  {
    category: "Controle & Metrificação",
    title: "Metrificação da Oferta de Novembro",
    description: "Acompanhamento rigoroso de volume x qualificação dos leads vindos da campanha de Black Friday.",
    impact: "Garante clareza matemática sobre a rentabilidade e taxa de conversão da nova oferta.",
    responsible: "V4 + Gabi / Comercial",
    status: "Em andamento"
  },
  {
    category: "Governança & CRM",
    title: "Aprovação da Call Semanal de CRM",
    description: "Definir um dia e horário na semana para a reunião rápida (30 min) de revisão de funil e taxas de conversão com Marcelo/Gilmara/Gabi.",
    impact: "Elimina discrepâncias entre CRM e salão, acelerando ajustes comerciais semana a semana.",
    responsible: "Mansão Marion",
    status: "Aguardando definição"
  }
];

export interface OfficialDeliverable {
  what: string;
  who: string;
  when: string;
  status: 'done' | 'approved' | 'active' | 'in_progress' | 'scheduled';
}

export const officialDeliverables: OfficialDeliverable[] = [
  {
    what: "Landing Page Corporativa B2B",
    who: "Giovanna Mariotto & Andreas Rocha (V4) / Marcelo Achterberg (Marion)",
    when: "Aprovada em 16/10/2026",
    status: "approved"
  },
  {
    what: "Edição e Veiculação dos Novos Vídeos de Conversão",
    who: "Sabrina MKT (Captação) / Giovanna Mariotto & Andreas Rocha (V4) / Marcelo Achterberg (Marion)",
    when: "Aprovados em 16/10/2026 e ativos em 20/10/2026",
    status: "active"
  },
  {
    what: "Criativos da Campanha Black Friday (Black 10)",
    who: "Giovanna Mariotto & Marcos Augusto (V4) / Gilmara Carmo & Marcelo Achterberg (Marion)",
    when: "Aprovados em 16/10/2026 e 29/10/2026",
    status: "approved"
  },
  {
    what: "Ativação da Campanha B2B no Google Ads",
    who: "Marcos Augusto & Adrian / Emanuelle Sena (Tráfego V4)",
    when: "Concluído em 22/10/2026",
    status: "done"
  },
  {
    what: "Auditoria e Higienização de Cards no CRM (Kommo)",
    who: "Andreas Rocha (V4) & Gabriella Vitorino / Time Comercial (Marion)",
    when: "Concluído em 23/10/2026",
    status: "done"
  },
  {
    what: "Duplicação e Teste Simultâneo da Campanha Black 10 vs R$ 16.980",
    who: "Emanuelle Sena / Marcos Augusto (V4) & Gilmara Carmo",
    when: "30/10/2026",
    status: "in_progress"
  },
  {
    what: "Alinhamento de Criativos para Locação Corporativa por Hora",
    who: "Andreas Rocha / Giovanna Mariotto (V4) & Marcelo Achterberg / Gilmara Carmo",
    when: "23/11/2026",
    status: "scheduled"
  }
];

export const projectFunnel = [
  {
    stage: "Topo de Funil",
    name: "Descoberta & Reconhecimento",
    goal: "Atrair casais, aniversariantes e empresas da região metropolitana.",
    actions: "Campanhas de tráfego para perfil do Instagram com vídeos de casais e celebrações reais.",
    message: '"Espaço cinematográfico para momentos inesquecíveis."',
    icon: Eye,
    tag: "Alcance: 226k pessoas • 540k imp."
  },
  {
    stage: "Meio de Funil",
    name: "Engajamento & Consideração",
    goal: "Apresentar a gastronomia, cenografia e estrutura completa da Mansão.",
    actions: "3.262 visitas ao perfil do Instagram geradas a R$ 0,16/visita, nutrindo a base de interesse.",
    message: '"Mais de 3.200 visitas qualificadas ao @ da Mansão."',
    icon: Sparkles,
    tag: "3.262 visitas ao perfil"
  },
  {
    stage: "Fundo de Funil",
    name: "Contato Direto & Orçamento",
    goal: "Captação direta de leads no WhatsApp e buscas pontuais no Google.",
    actions: "Remarketing e vendas diretas no WhatsApp (Meta) + Pesquisa de Casamentos no Google.",
    message: '"Solicite orçamento personalizado e agende sua visita."',
    icon: Target,
    tag: "327 chats WhatsApp • 1.338 conv. Google"
  },
  {
    stage: "Fechamento",
    name: "Visita Guiada & Contrato",
    goal: "Transformar o lead em contrato assinado de locação e buffet.",
    actions: "SLA comercial rápido no WhatsApp para agendamento de degustação e visita presencial no salão.",
    message: '"Experiência presencial de alto encantamento."',
    icon: Building2,
    tag: "Agendamentos de degustação"
  }
];

export const closingQuote = {
  quote: "A bússola do projeto são as métricas reais do CRM. Com o comercial convertendo a taxas mais altas, o próximo passo será acelerar a escala.",
  subtext: "Check-in Estratégico • Mansão Marion & V4 Company"
};
