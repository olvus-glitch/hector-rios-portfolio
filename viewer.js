(() => {
  'use strict';
  const documents = {
    cv: {pdf:'cv-publico.pdf',image:'cv-public.jpg',title:{es:'Hoja de vida',en:'Résumé',pt:'Currículo'}},
    arte: {pdf:'arte-comunicacion.pdf',image:'visual-communication-public.jpg',title:{es:'Diplomado en Arte y Comunicación Visual',en:'Diploma in Art and Visual Communication',pt:'Curso de extensão em Arte e Comunicação Visual'}},
    ciber: {pdf:'ciberseguridad.pdf',image:'cybersecurity-public.jpg',title:{es:'Fundamentos de la ciberseguridad',en:'Foundations of Cybersecurity',pt:'Fundamentos da cibersegurança'}},
    interpersonal: {pdf:'interpersonal.pdf',image:'interpersonal-skills-public.jpg',title:{es:'Desarrollo de habilidades interpersonales',en:'Developing Interpersonal Skills',pt:'Desenvolvimento de habilidades interpessoais'}},
    problemas: {pdf:'resolucion-problemas.pdf',image:'problem-solving-public.jpg',title:{es:'Resolución de problemas y toma de decisiones',en:'Problem-Solving and Decision-Making',pt:'Resolução de problemas e tomada de decisões'}},
    ingles: {pdf:'ingles-b1.pdf',image:'english-b1-public.jpg',title:{es:'Inglés · Nivel B1',en:'English · B1 level',pt:'Inglês · Nível B1'}}
  };
  const copy = {
    es:{back:'← Volver al portafolio',kicker:'DOCUMENTO PÚBLICO',note:'Copia pública con información sensible censurada.',download:'Descargar PDF',caption:'Vista del documento censurado',missing:'Documento no encontrado'},
    en:{back:'← Back to portfolio',kicker:'PUBLIC DOCUMENT',note:'Public copy with sensitive information redacted.',download:'Download PDF',caption:'Preview of the redacted document',missing:'Document not found'},
    pt:{back:'← Voltar ao portfólio',kicker:'DOCUMENTO PÚBLICO',note:'Cópia pública com informações sensíveis ocultadas.',download:'Baixar PDF',caption:'Visualização do documento censurado',missing:'Documento não encontrado'}
  };
  const params = new URLSearchParams(location.search);
  let saved = 'auto';
  try { saved = localStorage.getItem('portfolio-language') || 'auto'; } catch {}
  const requested = params.get('lang') || saved;
  const browser = (navigator.languages || [navigator.language]).map(value=>value.toLowerCase().split('-')[0]).find(value=>copy[value]) || 'es';
  const lang = copy[requested] ? requested : browser;
  const item = documents[params.get('doc')];
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.getElementById('back-top').textContent = t.back;
  document.getElementById('viewer-kicker').textContent = t.kicker;
  document.getElementById('viewer-note').textContent = t.note;
  document.getElementById('download-label').textContent = t.download;
  document.getElementById('viewer-caption').textContent = t.caption;
  if (!item) {
    document.getElementById('viewer-title').textContent = t.missing;
    document.querySelector('.viewer-sheet').remove();
    document.getElementById('download-pdf').remove();
    return;
  }
  const title = item.title[lang];
  document.title = `${title} — Héctor Ríos`;
  document.getElementById('viewer-title').textContent = title;
  const image = document.getElementById('document-image');
  image.src = `assets/previews/${item.image}`;
  image.alt = title;
  const download = document.getElementById('download-pdf');
  download.href = `documents/${item.pdf}`;
  download.download = item.pdf;
})();
