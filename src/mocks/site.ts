export const brand = {
  name: 'MIRANTE',
  full: 'Mirante Imóveis',
  descriptor: 'Corretor de Imóveis · CRECI-SP 148.392-F',
  tagline: 'Imóveis escolhidos a dedo em São Paulo.',
  phone: '(11) 4002-8922',
  whatsapp: '(11) 98812-4477',
  email: 'oi@miranteimoveis.com.br',
  address: 'Rua Harmonia, 412 — Vila Madalena, São Paulo',
  hours: 'Segunda a sexta, 9h às 18h · Sábado com hora marcada',
  creci: 'CRECI-SP 148.392-F',
};

export const broker = {
  name: 'Helena Vasconcelos',
  role: 'Corretora responsável',
  since: 2013,
  bio: 'Trabalho com imóveis residenciais na zona oeste de São Paulo desde 2013. Antes de mostrar qualquer apartamento, gosto de entender a rotina de quem vai morar nele.',
};

export const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Imóveis', to: '/imoveis' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export const heroAssets = {
  background: 'https://public.readdy.ai/ai/img_res/sandbox/1c913ca07941e52081b86c8a3740b23c/3cd5c3ee-c964-4029-a3d2-c2e13e209419_hero_bg.webp',
  foreground: 'https://public.readdy.ai/ai/img_res/sandbox/1c913ca07941e52081b86c8a3740b23c/3cd5c3ee-c964-4029-a3d2-c2e13e209419_hero_fg.webp',
  master: 'https://public.readdy.ai/ai/img_res/sandbox/1c913ca07941e52081b86c8a3740b23c/3cd5c3ee-c964-4029-a3d2-c2e13e209419_hero_master.webp',
};

export interface Property {
  slug: string;
  title: string;
  type: string;
  purpose: 'Venda' | 'Aluguel';
  neighborhood: string;
  city: string;
  address: string;
  price: number;
  condoFee: number;
  iptu: number;
  beds: number;
  suites: number;
  baths: number;
  area: number;
  parking: number;
  year: number;
  badge: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  {
    slug: 'apartamento-jardins-oscar-freire',
    title: 'Apartamento reformado nos Jardins',
    type: 'Apartamento',
    purpose: 'Venda',
    neighborhood: 'Jardins',
    city: 'São Paulo',
    address: 'Rua Oscar Freire, 1.240 — Jardins',
    price: 2480000,
    condoFee: 1850,
    iptu: 890,
    beds: 3,
    suites: 1,
    baths: 3,
    area: 148,
    parking: 2,
    year: 1978,
    badge: 'Exclusividade',
    image: 'https://readdy.ai/api/search-image?query=Sunlit%20renovated%20upscale%20apartment%20living%20room%20in%20S%C3%A3o%20Paulo%2C%20warm%20oak%20flooring%2C%20low%20linen%20sofa%2C%20large%20windows%20with%20sheer%20curtains%2C%20plants%2C%20soft%20neutral%20palette%2C%20editorial%20real%20estate%20photography%2C%20natural%20daylight%2C%20no%20people%2C%20clean%20uncluttered%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-jardins-01&orientation=landscape',
    summary: 'Três dormitórios em rua arborizada, com planta reformada, varanda e duas vagas cobertas.',
    description: 'Apartamento de 148 m² totalmente reformado em um dos endereços mais agradáveis dos Jardins. A sala ocupa toda a frente do imóvel e abre para uma varanda voltada para o miolo do quarteirão, longe do ruído da rua. A cozinha foi integrada ao living e ganhou ilha central, cozinha quente e adega. A suíte tem closet e banheiro com banheira, e os outros dois dormitórios compartilham um banheiro social amplo. O prédio dos anos 70 passou por retrofit de fachada, tem portaria 24 horas e apenas dois apartamentos por andar.',
    features: ['Varanda voltada para o miolo do quarteirão', 'Cozinha integrada com ilha e adega', 'Suíte com closet e banheira', 'Dois apartamentos por andar', 'Portaria 24 horas', 'Duas vagas cobertas e depósito'],
  },
  {
    slug: 'cobertura-vila-madalena',
    title: 'Cobertura duplex na Vila Madalena',
    type: 'Cobertura',
    purpose: 'Venda',
    neighborhood: 'Vila Madalena',
    city: 'São Paulo',
    address: 'Rua Fidalga, 780 — Vila Madalena',
    price: 3950000,
    condoFee: 2400,
    iptu: 1320,
    beds: 3,
    suites: 3,
    baths: 4,
    area: 212,
    parking: 3,
    year: 2016,
    badge: 'Novo',
    image: 'https://readdy.ai/api/search-image?query=Rooftop%20terrace%20of%20a%20modern%20duplex%20penthouse%20in%20S%C3%A3o%20Paulo%20at%20golden%20hour%2C%20wooden%20deck%2C%20outdoor%20sofa%2C%20tropical%20plants%20in%20planters%2C%20city%20skyline%20in%20the%20distance%2C%20warm%20terracotta%20and%20sand%20tones%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20wide%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-vilamada-01&orientation=landscape',
    summary: 'Duplex de 212 m² com terraço privativo, piscina de borda infinita e vista aberta do bairro.',
    description: 'Cobertura duplex em rua tranquila da Vila Madalena, a poucos minutos das cafeterias e galerias da Fidalga. O primeiro pavimento reúne living em dois ambientes, cozinha profissional e uma suíte de hóspedes. No piso superior ficam duas suítes, uma sala íntima e o terraço de 74 m² com deck, piscina aquecida e churrasqueira. A orientação solar garante luz da manhã na cozinha e o pôr do sol no terraço. Prédio de apenas oito unidades, com bicicletário e salão de festas.',
    features: ['Terraço privativo de 74 m² com piscina', 'Três suítes, todas com armários', 'Living em dois ambientes', 'Churrasqueira e chopeira no terraço', 'Bicicletário e salão de festas', 'Três vagas independentes'],
  },
  {
    slug: 'casa-alto-de-pinheiros',
    title: 'Casa de arquiteto no Alto de Pinheiros',
    type: 'Casa',
    purpose: 'Venda',
    neighborhood: 'Alto de Pinheiros',
    city: 'São Paulo',
    address: 'Rua Pio XI, 1.905 — Alto de Pinheiros',
    price: 5200000,
    condoFee: 0,
    iptu: 2150,
    beds: 4,
    suites: 2,
    baths: 5,
    area: 328,
    parking: 4,
    year: 2009,
    badge: 'Destaque',
    image: 'https://readdy.ai/api/search-image?query=Modern%20concrete%20and%20glass%20residential%20house%20in%20S%C3%A3o%20Paulo%20with%20a%20small%20pool%20and%20tropical%20garden%2C%20vertical%20wood%20screens%2C%20sunlight%20through%20leaves%2C%20minimal%20landscaping%2C%20warm%20neutral%20tones%2C%20editorial%20architecture%20photography%2C%20no%20people%2C%20calm%20and%20elegant%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-altopinheiros-01&orientation=landscape',
    summary: 'Terreno de 520 m², projeto assinado, piscina e jardim maduro em rua sem saída.',
    description: 'Casa térrea com mezanino em rua sem saída do Alto de Pinheiros, projetada em 2009 por escritório paulistano. A implantação deixa o jardim como centro da casa: todos os ambientes sociais abrem para a piscina por portas de vidro de correr. São quatro dormitórios, sendo duas suítes, além de escritório independente com entrada própria — útil para quem trabalha em casa. A cozinha tem despensa e área de serviço separada, e o quintal mantém árvores adultas.',
    features: ['Terreno de 520 m² com jardim maduro', 'Piscina aquecida e deck de madeira', 'Escritório independente com entrada própria', 'Cozinha com despensa e área de serviço', 'Rua sem saída e arborizada', 'Quatro vagas descobertas'],
  },
  {
    slug: 'studio-pinheiros-aluguel',
    title: 'Studio mobiliado em Pinheiros',
    type: 'Studio',
    purpose: 'Aluguel',
    neighborhood: 'Pinheiros',
    city: 'São Paulo',
    address: 'Rua dos Pinheiros, 2.210 — Pinheiros',
    price: 4200,
    condoFee: 780,
    iptu: 210,
    beds: 1,
    suites: 1,
    baths: 1,
    area: 42,
    parking: 1,
    year: 2021,
    badge: 'Pronto para morar',
    image: 'https://readdy.ai/api/search-image?query=Compact%20minimalist%20studio%20apartment%20interior%20with%20pale%20oak%20cabinetry%2C%20white%20walls%2C%20built-in%20desk%2C%20a%20small%20dining%20nook%20by%20the%20window%2C%20linen%20curtains%2C%20a%20few%20plants%2C%20soft%20morning%20light%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20bright%20and%20tidy%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-studio-01&orientation=landscape',
    summary: '42 m² mobiliado e pronto para entrar, a 400 metros do metrô Fradique Coutinho.',
    description: 'Studio de 42 m² entregue mobiliado, em prédio de 2021 com coworking e lavanderia coletiva. A planta aproveita cada metro: cozinha com eletrodomésticos embutidos, mesa para duas pessoas junto à janela e um nicho de trabalho que fecha com porta de correr. O condomínio inclui internet nas áreas comuns, academia pequena e bicicletário. Aluguel com contrato de 30 meses, sendo 12 meses de reajuste pelo IGP-M. Aceita pets de pequeno porte.',
    features: ['Totalmente mobiliado e equipado', 'Coworking e lavanderia no prédio', '400 m do metrô Fradique Coutinho', 'Academia e bicicletário', 'Aceita pet de pequeno porte', 'Uma vaga coberta'],
  },
  {
    slug: 'apartamento-moema-ibirapuera',
    title: 'Apartamento clássico em Moema',
    type: 'Apartamento',
    purpose: 'Venda',
    neighborhood: 'Moema',
    city: 'São Paulo',
    address: 'Alameda dos Arapanés, 640 — Moema',
    price: 1690000,
    condoFee: 1420,
    iptu: 620,
    beds: 3,
    suites: 1,
    baths: 2,
    area: 112,
    parking: 2,
    year: 1994,
    badge: 'Bem conservado',
    image: 'https://readdy.ai/api/search-image?query=Classic%20S%C3%A3o%20Paulo%20apartment%20living%20room%20with%20herringbone%20parquet%20floors%2C%20neutral%20linen%20furniture%2C%20a%20round%20dining%20table%2C%20framed%20art%20on%20warm%20white%20walls%2C%20tall%20windows%20with%20wooden%20frames%2C%20soft%20afternoon%20light%2C%20editorial%20interior%20photography%2C%20no%20people%2C%20elegant%20and%20calm%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-moema-01&orientation=landscape',
    summary: 'Planta original de três dormitórios, dois elevadores por torre e vista para o Parque Ibirapuera.',
    description: 'Apartamento de 112 m² em edifício de 1994 muito bem mantido, a três quadras do Parque Ibirapuera. A planta original foi preservada: hall de entrada, living amplo com sala de jantar, três dormitórios (uma suíte) e dependência completa. O prédio tem dois elevadores por torre, portaria 24 horas e apenas quatro apartamentos por andar. O condomínio passou por troca de elevadores e pintura de fachada nos últimos três anos.',
    features: ['Vista para o Parque Ibirapuera', 'Quatro apartamentos por andar', 'Dependência completa', 'Piso de parquet original restaurado', 'Elevadores trocados em 2023', 'Duas vagas cobertas'],
  },
  {
    slug: 'casa-condominio-granja-viana',
    title: 'Casa em condomínio na Granja Viana',
    type: 'Casa',
    purpose: 'Venda',
    neighborhood: 'Granja Viana',
    city: 'Cotia',
    address: 'Estrada da Capuava, 3.100 — Granja Viana',
    price: 2850000,
    condoFee: 1680,
    iptu: 980,
    beds: 4,
    suites: 2,
    baths: 4,
    area: 286,
    parking: 4,
    year: 2014,
    badge: 'Área verde',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20house%20inside%20a%20gated%20community%20near%20S%C3%A3o%20Paulo%20with%20a%20lawn%2C%20native%20garden%20and%20a%20covered%20veranda%2C%20white%20rendered%20walls%20with%20wood%20accents%2C%20late%20afternoon%20light%2C%20abundant%20green%20foliage%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20tranquil%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-granja-01&orientation=landscape',
    summary: '286 m² em terreno de 700 m², com varanda coberta, piscina e segurança 24 horas.',
    description: 'Casa em condomínio fechado na Granja Viana, a 25 minutos do Morumbi. O projeto privilegia a convivência com o quintal: varanda coberta com churrasqueira se conecta à sala por portas pantográficas, e a piscina fica protegida por cerca de segurança. São quatro dormitórios, sendo duas suítes, além de home office no pavimento superior. O condomínio tem 96 casas, clube com quadras, segurança 24 horas e gerador.',
    features: ['Terreno de 700 m² com jardim nativo', 'Varanda coberta com churrasqueira', 'Piscina com cerca de proteção', 'Home office no piso superior', 'Clube com quadras no condomínio', 'Quatro vagas, duas cobertas'],
  },
];

export const coreServices = [
  {
    id: 'compra',
    title: 'Compra assistida',
    summary: 'Curadoria de imóveis a partir do que faz sentido para a sua rotina: bairro, planta, luz, ruído e deslocamento.',
    tasks: ['Seleção de até 8 imóveis por perfil', 'Visitas acompanhadas e comparativo escrito', 'Análise de documentação e condomínio'],
    image: 'https://readdy.ai/api/search-image?query=Real%20estate%20agent%20showing%20apartment%20floor%20plans%20and%20printed%20listings%20on%20a%20wooden%20table%2C%20notebook%20and%20coffee%20cup%2C%20warm%20morning%20light%20through%20a%20window%2C%20neutral%20beige%20palette%2C%20editorial%20lifestyle%20photography%2C%20no%20identifiable%20faces%2C%20clean%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-svc-compra-01&orientation=landscape',
  },
  {
    id: 'venda',
    title: 'Venda do seu imóvel',
    summary: 'Avaliação honesta, preparação do imóvel e divulgação para o público certo, sem prometer preço que não existe.',
    tasks: ['Avaliação comparativa de mercado', 'Recomendações de preparação e fotografia', 'Negociação conduzida até a escritura'],
    image: 'https://readdy.ai/api/search-image?query=Bright%20empty%20apartment%20living%20room%20being%20prepared%20for%20sale%2C%20freshly%20painted%20white%20walls%2C%20protected%20wooden%20floor%2C%20a%20ladder%20and%20rolled%20canvas%20in%20the%20corner%2C%20large%20window%20with%20soft%20daylight%2C%20minimal%20warm%20tones%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20high%20detail&width=1200&height=900&seq=mirante-svc-venda-01&orientation=landscape',
  },
  {
    id: 'avaliacao',
    title: 'Avaliação de mercado',
    summary: 'Um laudo curto e direto com preço provável de venda, tempo médio de mercado e o que valoriza ou trava o imóvel.',
    tasks: ['Comparativo de imóveis semelhantes', 'Faixa de preço realista e tempo estimado', 'Relatório objetivo, sem compromisso de venda'],
    image: 'https://readdy.ai/api/search-image?query=Close%20view%20of%20a%20real%20estate%20market%20report%20with%20charts%20and%20a%20calculator%20on%20a%20light%20wood%20desk%2C%20reading%20glasses%20and%20a%20pen%2C%20warm%20neutral%20lighting%2C%20shallow%20depth%20of%20field%2C%20editorial%20business%20photography%2C%20no%20people%2C%20calm%20minimal%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-svc-avaliacao-01&orientation=landscape',
  },
  {
    id: 'locacao',
    title: 'Locação e administração',
    summary: 'Para proprietários que preferem cuidar de outra coisa: seleção de inquilino, contrato e rotina de manutenção.',
    tasks: ['Análise de crédito e garantia', 'Contrato, vistoria e repasses mensais', 'Rede de prestadores para pequenos reparos'],
    image: 'https://readdy.ai/api/search-image?query=Handing%20over%20keys%20in%20a%20sunlit%20apartment%20hallway%20with%20pale%20wood%20floor%20and%20white%20walls%2C%20brass%20key%20ring%20in%20focus%2C%20soft%20warm%20light%2C%20subtle%20green%20plant%20in%20the%20background%2C%20editorial%20lifestyle%20photography%2C%20no%20faces%2C%20minimal%20and%20elegant%20composition%2C%20high%20detail&width=1200&height=900&seq=mirante-svc-locacao-01&orientation=landscape',
  },
];

export const galleryItems = [
  {
    id: 'jardins',
    label: 'Jardins',
    caption: 'Ruas arborizadas, prédios baixos e a melhor caminhada da cidade para começar o dia.',
    image: 'https://readdy.ai/api/search-image?query=Tree-lined%20residential%20street%20in%20Jardins%20S%C3%A3o%20Paulo%20with%20low%20elegant%20buildings%2C%20jacaranda%20trees%2C%20wide%20sidewalk%2C%20warm%20late%20afternoon%20light%2C%20quiet%20urban%20atmosphere%2C%20editorial%20city%20photography%2C%20no%20identifiable%20people%2C%20soft%20neutral%20tones%2C%20high%20detail&width=1400&height=1000&seq=mirante-bairro-jardins-01&orientation=landscape',
  },
  {
    id: 'vila-madalena',
    label: 'Vila Madalena',
    caption: 'Ateliês, bares de esquina e casas geminadas. Um bairro que muda de humor a cada quadra.',
    image: 'https://readdy.ai/api/search-image?query=Colorful%20gabled%20houses%20along%20a%20hilly%20street%20in%20Vila%20Madalena%20S%C3%A3o%20Paulo%2C%20street%20art%20on%20a%20wall%2C%20small%20cafe%20tables%20on%20the%20sidewalk%2C%20bougainvillea%2C%20soft%20golden%20hour%20light%2C%20editorial%20neighborhood%20photography%2C%20no%20identifiable%20people%2C%20high%20detail&width=1400&height=1000&seq=mirante-bairro-vmad-01&orientation=landscape',
  },
  {
    id: 'pinheiros',
    label: 'Pinheiros',
    caption: 'Metrô, padarias e ciclovia. O bairro que resolve a maior parte dos dias a pé.',
    image: 'https://readdy.ai/api/search-image?query=Bustling%20but%20calm%20street%20corner%20in%20Pinheiros%20S%C3%A3o%20Paulo%2C%20modern%20mid-rise%20buildings%2C%20bike%20lane%2C%20bakery%20awning%2C%20street%20trees%2C%20warm%20morning%20sunlight%2C%20editorial%20urban%20photography%2C%20no%20identifiable%20people%2C%20muted%20warm%20palette%2C%20high%20detail&width=1400&height=1000&seq=mirante-bairro-pinheiros-01&orientation=landscape',
  },
  {
    id: 'moema',
    label: 'Moema',
    caption: 'Quarteirões largos, prédios com portaria e o Ibirapuera logo ali na esquina.',
    image: 'https://readdy.ai/api/search-image?query=Wide%20residential%20avenue%20in%20Moema%20S%C3%A3o%20Paulo%20with%20mature%20trees%2C%20mid-rise%20apartment%20buildings%2C%20clean%20sidewalks%2C%20park%20trees%20in%20the%20distance%2C%20soft%20morning%20light%2C%20editorial%20city%20photography%2C%20no%20identifiable%20people%2C%20calm%20composition%2C%20high%20detail&width=1400&height=1000&seq=mirante-bairro-moema-01&orientation=landscape',
  },
  {
    id: 'alto-de-pinheiros',
    label: 'Alto de Pinheiros',
    caption: 'Ruas sem saída, jardins grandes e a sensação de morar longe do barulho.',
    image: 'https://readdy.ai/api/search-image?query=Quiet%20residential%20cul-de-sac%20in%20Alto%20de%20Pinheiros%20S%C3%A3o%20Paulo%2C%20modern%20low%20houses%20behind%20garden%20walls%2C%20dense%20green%20foliage%2C%20dappled%20sunlight%20on%20the%20pavement%2C%20editorial%20architecture%20photography%2C%20no%20identifiable%20people%2C%20serene%20neutral%20palette%2C%20high%20detail&width=1400&height=1000&seq=mirante-bairro-alto-01&orientation=landscape',
  },
];

export const neighborhoodTypes = [
  {
    id: 'zona-oeste',
    title: 'Zona oeste',
    summary: 'Pinheiros, Vila Madalena, Jardins e Alto de Pinheiros: a região onde trabalho há mais de dez anos.',
    focus: ['Apartamentos de 2 e 3 dormitórios', 'Casas em ruas arborizadas', 'Coberturas e imóveis de arquiteto'],
    image: 'https://readdy.ai/api/search-image?query=Aerial%20view%20of%20a%20green%20residential%20district%20in%20S%C3%A3o%20Paulo%20with%20low%20buildings%2C%20tree%20canopies%20and%20a%20few%20tall%20towers%2C%20soft%20hazy%20morning%20light%2C%20warm%20neutral%20tones%2C%20editorial%20city%20photography%2C%20no%20identifiable%20people%2C%20calm%20composition%2C%20high%20detail&width=1200&height=1500&seq=mirante-regiao-oeste-01&orientation=portrait',
  },
  {
    id: 'centro-expandido',
    title: 'Centro expandido',
    summary: 'Bela Vista, Higienópolis e Santa Cecília, para quem quer estar perto de tudo e ainda morar em rua tranquila.',
    focus: ['Apartamentos em prédios antigos reformados', 'Studios para investimento', 'Imóveis próximos ao metrô'],
    image: 'https://readdy.ai/api/search-image?query=Historic%20residential%20building%20facade%20in%20central%20S%C3%A3o%20Paulo%20with%20tall%20windows%20and%20stone%20details%2C%20street%20trees%20in%20front%2C%20soft%20afternoon%20light%2C%20muted%20warm%20palette%2C%20editorial%20urban%20photography%2C%20no%20identifiable%20people%2C%20elegant%20composition%2C%20high%20detail&width=1200&height=1500&seq=mirante-regiao-centro-01&orientation=portrait',
  },
  {
    id: 'arredores',
    title: 'Arredores',
    summary: 'Granja Viana, Cotia e Alphaville: casas em condomínio com área verde, para famílias que trocam o centro pelo quintal.',
    focus: ['Casas em condomínio fechado', 'Terrenos a partir de 500 m²', 'Imóveis com área de lazer'],
    image: 'https://readdy.ai/api/search-image?query=Gated%20community%20entrance%20surrounded%20by%20dense%20green%20trees%20on%20the%20outskirts%20of%20S%C3%A3o%20Paulo%2C%20low%20white%20houses%20in%20the%20background%2C%20landscaped%20lawn%2C%20warm%20late%20afternoon%20light%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20tranquil%20composition%2C%20high%20detail&width=1200&height=1500&seq=mirante-regiao-arredores-01&orientation=portrait',
  },
];

export const approachSteps = [
  {
    title: 'Conversa inicial',
    text: 'Uma conversa de 30 minutos, por telefone ou no escritório, para entender orçamento real, prazos e o que não pode faltar na casa nova.',
  },
  {
    title: 'Curadoria',
    text: 'Seleciono de cinco a oito imóveis que realmente fazem sentido e envio um comparativo com prós, contras e custos mensais.',
  },
  {
    title: 'Visitas',
    text: 'Visitamos juntos, em horários diferentes quando possível, para você perceber luz, ruído e vizinhança antes de decidir.',
  },
  {
    title: 'Negociação',
    text: 'Conduzo a proposta, a análise de documentação e o acompanhamento com advogado até a assinatura e as chaves.',
  },
];

export const stats = [
  { value: '12', suffix: 'anos', label: 'de mercado na zona oeste' },
  { value: '340', suffix: 'imóveis', label: 'negociados desde 2013' },
  { value: '38', suffix: 'dias', label: 'tempo médio de venda em 2025' },
  { value: '94', suffix: '%', label: 'dos clientes chegam por indicação' },
];

export const testimonials = [
  {
    quote: 'A Helena me mandou oito apartamentos, não oitenta. Em três semanas a gente já tinha escolhido, e ela sabia exatamente por que cada um estava na lista.',
    name: 'Camila Ferraz',
    detail: 'comprou em Pinheiros, 2024',
  },
  {
    quote: 'Vendi o apartamento da minha mãe em 41 dias, com o preço que ela precisava e sem reforma. A parte de documentação foi a mais tranquila de todas.',
    name: 'Ricardo Salles',
    detail: 'vendeu nos Jardins, 2023',
  },
  {
    quote: 'Aluguei pelo Mirante e continuo com eles na administração. Em dois anos, nunca fiquei sem saber o que estava acontecendo no imóvel.',
    name: 'Beatriz Nakamura',
    detail: 'proprietária em Moema',
  },
];

export const splitImages = {
  homeIntro: 'https://readdy.ai/api/search-image?query=Warm%20minimal%20real%20estate%20office%20with%20a%20large%20wooden%20table%2C%20printed%20floor%20plans%2C%20a%20vase%20of%20branches%2C%20soft%20daylight%20through%20tall%20windows%2C%20beige%20and%20sand%20palette%2C%20editorial%20interior%20photography%2C%20no%20people%2C%20calm%20refined%20composition%2C%20high%20detail&width=1400&height=1000&seq=mirante-home-intro-01&orientation=landscape',
  about: 'https://readdy.ai/api/search-image?query=Confident%20Brazilian%20woman%20real%20estate%20broker%20in%20her%20forties%20standing%20in%20a%20bright%20minimal%20office%2C%20wearing%20a%20neutral%20linen%20blazer%2C%20arms%20relaxed%2C%20warm%20natural%20window%20light%2C%20soft%20beige%20background%2C%20editorial%20portrait%20photography%2C%20friendly%20and%20calm%20expression%2C%20high%20detail&width=1200&height=1500&seq=mirante-broker-portrait-01&orientation=portrait',
  service: 'https://readdy.ai/api/search-image?query=Real%20estate%20consultation%20scene%20at%20a%20light%20wood%20desk%20with%20a%20laptop%20open%20to%20a%20property%20map%2C%20keys%20and%20a%20notebook%2C%20soft%20afternoon%20light%2C%20warm%20neutral%20interior%2C%20editorial%20business%20photography%2C%20no%20identifiable%20faces%2C%20refined%20minimal%20composition%2C%20high%20detail&width=1400&height=1000&seq=mirante-service-intro-01&orientation=landscape',
  valuation: 'https://readdy.ai/api/search-image?query=Measuring%20tape%20and%20a%20clipboard%20with%20property%20notes%20resting%20on%20a%20freshly%20painted%20windowsill%20in%20an%20empty%20bright%20room%2C%20soft%20daylight%2C%20warm%20white%20and%20oak%20tones%2C%20editorial%20real%20estate%20photography%2C%20no%20people%2C%20clean%20minimal%20composition%2C%20high%20detail&width=1400&height=1000&seq=mirante-valuation-01&orientation=landscape',
  closing: 'https://readdy.ai/api/search-image?query=Elegant%20S%C3%A3o%20Paulo%20apartment%20building%20facade%20at%20dusk%20with%20warm%20lights%20in%20the%20windows%2C%20trees%20in%20front%2C%20soft%20blue%20hour%20sky%2C%20muted%20neutral%20tones%2C%20editorial%20architecture%20photography%2C%20no%20people%2C%20calm%20refined%20composition%2C%20high%20detail&width=1400&height=1000&seq=mirante-closing-home-01&orientation=landscape',
};