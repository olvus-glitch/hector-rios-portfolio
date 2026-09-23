(() => {
  'use strict';
  const translations = {
    en: {
      skip:'Skip to content',navProjects:'Projects',navAbout:'About',navEducation:'Education',language:'Language',auto:'Auto',available:'Open to internship opportunities',
      hero1:'Ideas into code.',hero2:'A vision for cloud.',intro:'Systems Engineering student. I develop web applications and build my path in cloud, backend and security.',explore:'Explore projects',cv:'View public résumé',portfolio:'PORTFOLIO / 2026',
      selected:'FROM CODE TO PRACTICE',projectsTitle:'Selected projects<span class="dot">.</span>',projectsIntro:'Applications built around real needs. Explore how they work and the code behind each one.',prototype:'FRONTEND PROTOTYPE',controls:'controls · 2022 edition',isoCaption:'Assets → Risks → Controls → SoA',securityCategory:'/ INFORMATION SECURITY',
      isoDesc:'A platform to organize information security management: companies, assets, risks and the Statement of Applicability (SoA).',inside:'Inside the project',isoDetails:'An interface for 93 ISO 27001:2022 controls, company context, role-based routes and JWT-ready authentication flows. The supplied frontend uses an MSW mock API; it is not presented as a certified production system.',source:'Explore source code',
      gymTagline:'Every workout counts.',gymCaption:'Routines / Progress / Consistency',fitnessCategory:'/ FITNESS & DATA',gymDesc:'A web application to log workouts, share routines and visualize progress. From daily records to a clear view of improvement.',gymDetails:'Strength, cardio, weight and sleep tracking; templates and shared routines. Full-stack source with an API, protected routes, administrative roles, bcryptjs hashing and JWT handling with jose. Explore the implementation in the original repository.',
      backendLabel:'03 / BACKEND DEVELOPMENT',backendTitle:'Fix-ISO API',backendDesc:'A complementary REST API for the Fix-ISO ecosystem. Modular services for companies, assets, risks, controls and SoA, with JWT authentication and PostgreSQL persistence.',allRepos:'See all public repositories on GitHub',
      aboutLabel:'PROFILE & EXPERIENCE',aboutTitle:'Learn.<br>Build.<br>Keep growing.',aboutIntro:'I’m Héctor, a Systems Engineering student at Universidad de San Buenaventura, interested in secure software and cloud architecture.',aboutBody:'My experience has grown through web projects: React interfaces, API integration, authentication, access control and databases. I’m looking for an internship where I can contribute and deepen my skills in AWS, backend and software engineering.',experienceTitle:'Web project development',experienceDesc:'Practical experience with Fix-ISO and Gym Tracker. Interface design, workflow modeling and feature development.',cloudSkills:'AWS fundamentals · Cloud architecture concepts',toolsTitle:'04 — Tools',spanish:'Spanish · Native',english:'English · B1',
      educationLabel:'CONTINUOUS LEARNING',educationTitle:'A foundation to build on.',inProgress:'IN PROGRESS',degree:'Systems Engineering',training:'ADDITIONAL TRAINING',bootcamp:'159 hours · Training listed in the résumé',art:'Diploma in Art and Visual Communication',cyber:'Foundations of Cybersecurity',interpersonal:'Developing Interpersonal Skills',problemSolving:'Effective Problem-Solving and Decision-Making',englishCert:'English · B1 level',document:'View document ↗',privacy:'Public document copies with sensitive information and signatures permanently redacted. Original documents remain private.',
      next:'THE NEXT STEP',closing:'Let’s build<br>what comes next<span>↗</span>',closingText:'Interested in internships in Cloud, AWS, Backend and Software Engineering.',githubProfile:'My GitHub profile',footer:'Made with intention. Built with code.',backTop:'Back to top ↑'
    },
    pt: {
      skip:'Pular para o conteúdo',navProjects:'Projetos',navAbout:'Perfil',navEducation:'Formação',language:'Idioma',auto:'Auto',available:'Aberto a oportunidades de estágio',
      hero1:'Ideias em código.',hero2:'Visão na nuvem.',intro:'Estudante de Engenharia de Sistemas. Desenvolvo aplicações web e construo minha trajetória em cloud, backend e segurança.',explore:'Explorar projetos',cv:'Ver currículo público',portfolio:'PORTFÓLIO / 2026',
      selected:'DO CÓDIGO À PRÁTICA',projectsTitle:'Projetos selecionados<span class="dot">.</span>',projectsIntro:'Aplicações para resolver necessidades reais. Explore como foram construídas e o código por trás de cada uma.',prototype:'PROTÓTIPO FRONTEND',controls:'controles · edição 2022',isoCaption:'Ativos → Riscos → Controles → SoA',securityCategory:'/ SEGURANÇA DA INFORMAÇÃO',
      isoDesc:'Uma plataforma para organizar a gestão da segurança da informação: empresas, ativos, riscos e a Declaração de Aplicabilidade (SoA).',inside:'Por dentro do projeto',isoDetails:'Interface para 93 controles ISO 27001:2022, contexto por empresa, rotas com papéis de acesso e fluxos de autenticação preparados para JWT. O frontend fornecido usa uma API simulada com MSW; não é apresentado como um sistema certificado em produção.',source:'Explorar código',
      gymTagline:'Cada treino conta.',gymCaption:'Rotinas / Progresso / Constância',fitnessCategory:'/ FITNESS E DADOS',gymDesc:'Uma aplicação web para registrar treinos, compartilhar rotinas e visualizar o progresso. Dos registros diários a uma visão clara da evolução.',gymDetails:'Registro de força, cardio, peso e sono; modelos e rotinas compartilhadas. Código full stack com API, rotas protegidas, papéis administrativos, hashing com bcryptjs e gestão de JWT com jose. Consulte a implementação no repositório original.',
      backendLabel:'03 / DESENVOLVIMENTO BACKEND',backendTitle:'Fix-ISO API',backendDesc:'API REST complementar para o ecossistema Fix-ISO. Serviços modulares para empresas, ativos, riscos, controles e SoA, com autenticação JWT e persistência em PostgreSQL.',allRepos:'Ver todos os repositórios públicos no GitHub',
      aboutLabel:'PERFIL E EXPERIÊNCIA',aboutTitle:'Aprender.<br>Construir.<br>Continuar crescendo.',aboutIntro:'Sou Héctor, estudante de Engenharia de Sistemas na Universidad de San Buenaventura, com interesse em software seguro e arquitetura cloud.',aboutBody:'Minha experiência foi desenvolvida por meio de projetos web: interfaces com React, integração de APIs, autenticação, controle de acesso e bancos de dados. Busco um estágio para contribuir e aprofundar meus conhecimentos em AWS, backend e engenharia de software.',experienceTitle:'Desenvolvimento de projetos web',experienceDesc:'Experiência prática em Fix-ISO e Gym Tracker. Design de interfaces, modelagem de fluxos e desenvolvimento de funcionalidades.',cloudSkills:'Fundamentos de AWS · Conceitos de arquitetura cloud',toolsTitle:'04 — Ferramentas',spanish:'Espanhol · Nativo',english:'Inglês · B1',
      educationLabel:'APRENDIZADO CONTÍNUO',educationTitle:'Uma base para construir.',inProgress:'EM FORMAÇÃO',degree:'Engenharia de Sistemas',training:'FORMAÇÃO COMPLEMENTAR',bootcamp:'159 horas · Formação indicada no currículo',art:'Curso de extensão em Arte e Comunicação Visual',cyber:'Fundamentos da cibersegurança',interpersonal:'Desenvolvimento de habilidades interpessoais',problemSolving:'Resolução de problemas e tomada de decisões',englishCert:'Inglês · Nível B1',document:'Ver documento ↗',privacy:'Cópias públicas com dados sensíveis e assinaturas removidos permanentemente. Os documentos originais permanecem privados.',
      next:'O PRÓXIMO PASSO',closing:'Vamos construir<br>o que vem a seguir<span>↗</span>',closingText:'Interesse em estágios de Cloud, AWS, Backend e Engenharia de Software.',githubProfile:'Meu perfil no GitHub',footer:'Feito com intenção. Construído com código.',backTop:'Voltar ao topo ↑'
    }
  };
  document.getElementById('backend-project').innerHTML = '<article class="backend-card"><div><span class="eyebrow" data-i="backendLabel">03 / DESARROLLO BACKEND</span><h3 data-i="backendTitle">Fix-ISO API</h3><p data-i="backendDesc">API REST complementaria para el ecosistema Fix-ISO. Servicios modulares para empresas, activos, riesgos, controles y SoA, con autenticación JWT y persistencia en PostgreSQL.</p><ul class="tags"><li>Express</li><li>TypeScript</li><li>Prisma</li><li>PostgreSQL</li><li>JWT</li><li>Zod</li></ul></div><a href="https://github.com/olvus-glitch/Backed_fix-iso-main" target="_blank" rel="noopener"><span data-i="source">Explorar código</span> ↗</a></article>';
  const nodes = [...document.querySelectorAll('[data-i]')];
  translations.es = Object.fromEntries(nodes.map(node => [node.dataset.i, node.innerHTML]));
  const languages = ['es', 'en', 'pt'];
  const picker = document.getElementById('language');
  function browserLanguage() {
    return (navigator.languages || [navigator.language]).map(language => language.toLowerCase().split('-')[0]).find(language => languages.includes(language)) || 'es';
  }
  function applyLanguage(preference) {
    const language = languages.includes(preference) ? preference : browserLanguage();
    for (const node of nodes) node.innerHTML = translations[language][node.dataset.i] ?? translations.es[node.dataset.i];
    document.documentElement.lang = language;
    document.querySelector('nav').setAttribute('aria-label', {es:'Principal',en:'Main navigation',pt:'Principal'}[language]);
    document.querySelector('.wordmark').setAttribute('aria-label', {es:'Héctor Ríos, inicio',en:'Héctor Ríos, home',pt:'Héctor Ríos, início'}[language]);
    document.title = {es:'Héctor Ríos — Cloud & Software',en:'Héctor Ríos — Cloud & Software',pt:'Héctor Ríos — Cloud & Software'}[language];
    const description = {es:'Portafolio de Héctor Ríos. Ingeniería de Sistemas, desarrollo web y fundamentos de arquitectura cloud. Proyectos, experiencia y formación.',en:'Héctor Ríos portfolio. Systems Engineering, web development and cloud architecture fundamentals. Projects, experience and education.',pt:'Portfólio de Héctor Ríos. Engenharia de Sistemas, desenvolvimento web e fundamentos de arquitetura cloud. Projetos, experiência e formação.'}[language];
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:description"]').content = description;
    picker.value = languages.includes(preference) ? preference : 'auto';
  }
  let preference = 'auto';
  try { preference = localStorage.getItem('portfolio-language') || 'auto'; } catch {}
  const parameter = new URLSearchParams(location.search).get('lang');
  if (languages.includes(parameter) || parameter === 'auto') preference = parameter;
  applyLanguage(preference);
  picker.addEventListener('change', () => {
    preference = picker.value;
    try { localStorage.setItem('portfolio-language', preference); } catch {}
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    applyLanguage(preference);
  });
  window.addEventListener('languagechange', () => { if (preference === 'auto') applyLanguage('auto'); });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
