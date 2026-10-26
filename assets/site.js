/* BirdQuiet landing page: language, the camera-01 stage, the identification game, reveals. */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------- Language ---------------- */
  const ES = {
    'skip': 'Saltar a cómo funciona',
    'nav.menu': 'Menú', 'nav.how': 'Cómo funciona', 'nav.journal': 'Cuaderno', 'nav.habitats': 'Hábitats', 'nav.expeditions': 'Expediciones', 'nav.questions': 'Preguntas',
    'hero.line': 'Una app para reducir el uso del móvil y aprender sobre la naturaleza.',
    'ui.coast': 'Costa mediterránea', 'ui.cam': 'Cámara 01', 'ui.settime': 'Selecciona el tiempo', 'ui.hours': 'Horas', 'ui.minutes': 'Minutos',
    'ui.setbtn': 'Colocar cámara', 'ui.recording': 'Tu cámara de fototrampeo está grabando',
    'ui.unlock': 'Si desbloqueas el móvil, bajan las probabilidades de ver fauna.',
    'ui.quiet': '1:00:00 de calma', 'ui.sightings': '2 avistamientos', 'ui.coins': '+60 monedas', 'ui.review': 'Revisemos los avistamientos.', 'ui.open': 'Abrir grabación',
    'ui.journal': 'Cuaderno de campo', 'ui.count': '13 de 28 encontrados', 'ui.identified': 'Identificado el 26 oct · CAM01_001.MP4',
    'ui.note': 'Cruzó el camino bajo el olivo viejo, justo antes de la puesta de sol.',
    'tag.study': 'Estudiar', 'tag.read': 'Leer', 'tag.work': 'Trabajar',
    'how.h': 'Cómo funciona',
    'how.1': 'Primero elige un hábitat y coloca la cámara.',
    'how.1b': 'Escoge la costa mediterránea o la selva amazónica, cuánto tiempo quieres estar sin el móvil y qué vas a hacer: estudiar, leer, trabajar…',
    'how.2': 'Luego deja el móvil.',
    'how.2b': 'La cámara de fototrampeo estará lista. ¡No uses el móvil y tus probabilidades de encontrar especies espectaculares aumentarán!',
    'how.3': 'Vuelve y revisa las grabaciones.',
    'how.3b': 'Cuando termines, vuelve a la cámara de fototrampeo y revisa si hubo avistamientos de animales.',
    'how.4': 'Identifica lo que has visto y guárdalo.',
    'how.4b': 'Elige el animal entre tres nombres. Pasa a tu cuaderno de campo, donde puedes añadir tus propias notas.',
    'quiz.h': '¿Quién ha pasado?',
    'quiz.lead': 'Esta es una grabación de la app. Identifica el animal, como harías después de una sesión.',
    'quiz.next': 'Siguiente grabación', 'quiz.play': 'Ver grabación', 'quiz.question': '¿Qué animal ha captado la cámara?',
    'quiz.count': '{n} de {t} identificados',
    'quiz.right': 'Correcto: {a}. Ya está en tu cuaderno.', 'quiz.wrong': 'Casi. La respuesta era {a}.',
    'quiz.done': 'Has revisado todas las grabaciones. En la app hay {n} animales que encontrar.',
    'journal.h': 'especies, y cada vez más', 'journal.med': 'en la costa mediterránea', 'journal.amz': 'en la selva amazónica',
    'sp.fox': 'Zorro rojo', 'sp.genet': 'Gineta', 'sp.lynx': 'Lince ibérico', 'sp.wildcat': 'Gato montés europeo', 'sp.jay': 'Arrendajo euroasiático',
    'sp.beeeater': 'Abejaruco europeo', 'sp.hoopoe': 'Abubilla común', 'sp.marten': 'Garduña', 'sp.mongoose': 'Meloncillo', 'sp.badger': 'Tejón europeo',
    'sp.boar': 'Jabalí', 'sp.deer': 'Ciervo rojo', 'sp.macaw': 'Guacamayo rojo', 'sp.jaguar': 'Jaguar', 'sp.oriole': 'Oropéndola europea',
    'sp.toucan': 'Tucán piquirrojo', 'sp.hoatzin': 'Hoacín', 'sp.goldfinch': 'Jilguero europeo', 'sp.boa': 'Boa esmeralda', 'sp.blackbird': 'Mirlo común',
    'hab.h': 'Hábitats', 'hab.soon': 'Próximamente',
    'alt.med': 'Costa mediterránea en pixel art, con alcornoques sobre el mar', 'alt.amz': 'Claro de la selva amazónica en pixel art, junto a un río',
    'alt.pat': 'Picos de la Patagonia sobre un lago, en pixel art', 'alt.road': 'Un todoterreno avanza por un camino de tierra mediterráneo',
    'hab.p': 'Cada hábitat tiene su propia cámara, su luz y sus animales. Tu progreso, tus insignias y tu cuaderno se guardan por separado en cada uno.',
    'hab.med.h': 'Costa mediterránea', 'hab.med.p': 'Alcornoques, lavanda y el mar al fondo. 18 aves y 10 mamíferos, de la abubilla al lince ibérico.', 'hab.med.s': 'Cámaras de fototrampeo y expediciones.',
    'hab.amz.h': 'Selva amazónica', 'hab.amz.p': 'Un claro junto al río. 19 aves, 4 mamíferos y 3 reptiles, entre ellos el hoacín y la anaconda verde.', 'hab.amz.s': 'Cámaras de fototrampeo ya. Las expediciones llegarán en una actualización.',
    'hab.pat.h': 'Patagonia', 'hab.pat.p': 'Picos de granito sobre un lago frío. Ya aparece en el carrusel de hábitats, como próximamente.',
    'enc.h': 'Enciclopedia', 'enc.p': 'Fichas breves con el nombre científico, el estado de conservación y un enlace a la fuente con la que se comprobaron.',
    'enc.lc': 'Preocupación menor', 'enc.text': 'Un ave de vivos colores que captura insectos al vuelo desde un posadero. Nidifica en túneles excavados en taludes arenosos y suele pasar el invierno en África.',
    'stats.today': 'Hoy', 'stats.h': 'Estadísticas', 'stats.p': 'Tiempo de concentración por horas, con etiquetas para estudiar, concentrarte, meditar, trabajar y leer.',
    'exp.h': 'Expediciones', 'exp.note': 'Únete a una ruta, alcanza su objetivo de tiempo de calma en siete días y graba uno de sus animales especiales.',
    'exp.garage': 'El garaje mediterráneo', 'exp.bike': 'Moto todoterreno', 'exp.bike.s': 'Ruta de 2 horas, disponible desde el principio', 'exp.free': 'Gratis',
    'exp.grandad': 'El coche de tu abuelo', 'exp.grandad.s': 'Ruta de 4 horas', 'exp.protector': 'Earth Nomad Protector', 'exp.protector.s': 'Ruta de 6 horas',
    'exp.coins': 'monedas', 'exp.coin': 'moneda', 'exp.earn': 'Cómo se ganan monedas',
    'exp.minute': 'Un minuto de calma', 'exp.minute.s': 'en una sesión completada', 'exp.hour': 'Una hora en la costa', 'exp.hour.s': 'con cámara o en expedición',
    'exp.badges': 'Insignias', 'b.orn': 'Ornitólogo', 'b.orn.s': 'todas las aves de un hábitat', 'b.mam': 'Mastozoólogo', 'b.mam.s': 'todos los mamíferos de un hábitat',
    'b.herp': 'Herpetólogo', 'b.herp.s': 'todos los reptiles', 'b.exp': 'Explorador del hábitat', 'b.exp.s': 'todas las especies de un hábitat',
    'b.stamp': 'Sello de expedición', 'b.stamp.s': 'los tres vehículos y todos los animales especiales', 'b.both': 'Ambos hábitats', 'b.amz': 'Amazonia', 'b.med': 'Mediterráneo',
    'exp.end': 'Nunca se venden monedas.<br>El tiempo de calma es la única moneda.',
    'faq.h': 'Preguntas',
    'faq.q1': '¿La fauna es real?', 'faq.a1': 'No. Los encuentros son simulados y las animaciones de los animales se crearon de antemano con IA, así que algunos detalles y tamaños pueden no ser exactos. Las especies, sus nombres y los datos de la enciclopedia sí son reales.',
    'faq.q2': '¿Aparece un animal en cada sesión?', 'faq.a2': 'No. Como en la naturaleza real, algunas sesiones vuelven vacías. Los avistamientos son más probables cuanto más tiempo pasas sin el móvil.',
    'faq.q3': '¿Bloquea mis otras apps?', 'faq.a3': 'No. BirdQuiet nunca bloquea nada y siempre puedes usar el móvil en una emergencia. Usar otras apps solo reduce la probabilidad de un avistamiento.',
    'faq.q4': '¿Cómo sabe que no he tocado el móvil?', 'faq.a4': 'El modo básico cuenta el tiempo en la pantalla de concentración o fuera de BirdQuiet. La concentración total, opcional, usa el acceso a datos de uso de Android, con tu permiso, para saber cuándo estuvo bloqueada la pantalla y qué apps estaban abiertas. Esa información no sale de tu móvil.',
    'faq.q5': '¿Tiene anuncios o compras?', 'faq.a5': 'Por el momento, no hay anuncios, ni cuentas, ni monedas a la venta. Las monedas solo se consiguen con tiempo sin usar el teléfono móvil.',
    'faq.q6': '¿Necesita conexión a internet?', 'faq.a6': 'No. Las funciones principales funcionan sin conexión. Los enlaces a las fuentes de la enciclopedia se abren en tu navegador.',
    'faq.q7': '¿Puedo ver el temporizador con la pantalla bloqueada?', 'faq.a7': 'Una notificación opcional muestra el tiempo de la sesión. Que aparezca con la pantalla bloqueada depende de Android y de los ajustes de tu móvil.',
    'faq.q8': '¿En qué idiomas está?', 'faq.a8': 'En español e inglés. BirdQuiet sigue el idioma de tu móvil y puedes cambiarlo en Ajustes. También tiene temas de color por hábitat y modo nocturno.',
    'faq.q9': '¿Qué pasa con mis datos?', 'faq.a9': 'Tu cuaderno, tus notas y tus estadísticas se quedan en la app, en tu móvil. No se envía nada ni a nosotros ni a nadie. Tienes los detalles en la <a href="privacidad.html">política de privacidad</a>.',
    'faq.q10': '¿Es un tratamiento o un control parental?', 'faq.a10': 'Ninguna de las dos cosas. BirdQuiet es una ayuda para concentrarte y una pequeña forma de aprender sobre fauna, pensada para adolescentes y adultos.',
    'cta.h': 'Consigue BirdQuiet', 'cta.line': 'BirdQuiet llegará pronto a Google Play. Escríbenos y te avisaremos el día que salga.',
    'cta.button': 'Avísame', 'cta.privacy': 'Leer la política de privacidad',
    'foot.contact': 'Asistencia y prensa', 'foot.legal': 'Legal', 'foot.privacy': 'Política de privacidad',
    'foot.line': '© 2026 BirdQuiet Labs, España. Las animaciones de fauna y las ilustraciones son propias de BirdQuiet y en parte generadas con IA.'
  };
  const EN = {
    'quiz.count': '{n} of {t} identified', 'quiz.right': 'Yes, {a}. It is in your journal now.', 'quiz.wrong': 'Not quite. It was {a}.',
    'quiz.done': 'That was every recording. There are {n} animals to find in the app.',
    'sp.marten': 'Stone marten', 'sp.mongoose': 'Egyptian mongoose', 'sp.badger': 'European badger', 'sp.deer': 'Red deer',
    'sp.fox': 'Red fox', 'sp.genet': 'Common genet', 'sp.lynx': 'Iberian lynx', 'sp.jay': 'Eurasian jay', 'sp.beeeater': 'European bee-eater',
    'sp.hoopoe': 'Eurasian hoopoe', 'sp.macaw': 'Scarlet macaw', 'sp.jaguar': 'Jaguar', 'sp.oriole': 'Eurasian golden oriole', 'sp.toucan': 'Red-billed toucan',
    'sp.boar': 'Wild boar', 'sp.hoatzin': 'Hoatzin', 'sp.goldfinch': 'European goldfinch', 'sp.boa': 'Emerald tree boa', 'sp.wildcat': 'European wildcat',
    'sp.blackbird': 'Common blackbird'
  };
  $$('[data-i18n]').forEach((el) => { EN[el.dataset.i18n] ??= el.textContent; });
  $$('[data-i18n-html]').forEach((el) => { EN[el.dataset.i18nHtml] ??= el.innerHTML; });
  $$('[data-i18n-alt]').forEach((el) => { if (el.alt) EN[el.dataset.i18nAlt] ??= el.alt; });
  $$('[data-i18n-aria]').forEach((el) => { EN[el.dataset.i18nAria] ??= el.getAttribute('aria-label'); });

  let lang = 'en';
  try { lang = localStorage.getItem('bq-lang') || ''; } catch (e) { lang = ''; }
  if (lang !== 'en' && lang !== 'es') lang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  const t = (k, vars = {}) => {
    let s = (lang === 'es' ? ES[k] : EN[k]) ?? EN[k] ?? k;
    for (const [n, v] of Object.entries(vars)) s = s.replace(`{${n}}`, v);
    return s;
  };
  function applyLang() {
    root.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-alt]').forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('[data-privacy]').forEach((a) => { a.href = lang === 'es' ? 'privacidad.html' : 'privacy.html'; });
    const toggle = $('[data-lang-toggle]');
    if (toggle) { toggle.textContent = lang === 'es' ? 'English' : 'Español'; toggle.lang = lang === 'es' ? 'en' : 'es'; }
    document.title = lang === 'es' ? 'BirdQuiet · Una app de concentración con cámara de fototrampeo' : 'BirdQuiet · A focus app with a camera trap';
    renderQuiz();
    fitWordmark();
  }
  $('[data-lang-toggle]')?.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    try { localStorage.setItem('bq-lang', lang); } catch (e) { /* storage unavailable */ }
    applyLang();
  });

  /* ---------------- The wordmark, fitted by measurement ---------------- */
  const mark = $('.wordmark'); const fit = $('.wordmark .fit');
  function fitWordmark() {
    if (!mark || !fit) return;
    fit.style.fontSize = '';
    const cs = getComputedStyle(mark);
    const base = parseFloat(cs.fontSize);
    const col = mark.parentElement.getBoundingClientRect();
    const phone = innerWidth <= 900;
    const target = phone ? col.width : col.width + innerWidth * 0.10;
    const w = fit.getBoundingClientRect().width / (parseFloat(getComputedStyle(fit).scale) || 1);
    if (!w) return;
    const size = Math.max(64, Math.min(base * (target / w) * 0.97, phone ? 200 : 260));
    fit.style.fontSize = size + 'px';
  }
  addEventListener('resize', () => requestAnimationFrame(fitWordmark));
  document.fonts?.ready.then(fitWordmark);

  /* ---------------- Phone: each step carries its own copy of the stage ---------------- */
  $$('[data-figure]').forEach((slot) => {
    const layer = $(`.stage [data-layer="${slot.dataset.figure}"]`);
    if (layer) slot.appendChild(layer.cloneNode(true));
  });
  const phoneMQ = matchMedia('(max-width: 900px)');
  const player = $('.ui-player'); const quizLayer = $('.layer-quiz'); const quizSlot = $('[data-quiz-slot]');
  function placePlayer() {
    if (!player || !quizSlot || !quizLayer) return;
    if (phoneMQ.matches) { if (player.parentElement !== quizSlot) quizSlot.appendChild(player); }
    else if (player.parentElement !== quizLayer) quizLayer.appendChild(player);
  }
  placePlayer(); phoneMQ.addEventListener?.('change', placePlayer);

  /* ---------------- The stage follows the reading column ---------------- */
  const stage = $('.stage');
  const film = $('.layer-film video');
  const recVideo = $('#rec-video');
  const playBtn = $('.ui-play');
  function setState(s) {
    if (!stage || stage.dataset.state === s) return;
    stage.dataset.state = s;
    $$('.step').forEach((el) => el.classList.toggle('is-active', el.dataset.step === s));
    if (film) { if (s === 'film' && !reduce) film.play().catch(() => {}); else film.pause(); }
    if (s === 'quiz') { loadRecording(false); } else if (recVideo && !phoneMQ.matches) recVideo.pause();
  }
  if (reduce && film) { film.removeAttribute('autoplay'); film.pause(); }
  const markers = $$('[data-step]');
  if ('IntersectionObserver' in window && stage) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setState(e.target.dataset.step);
    }, { rootMargin: '-48% 0px -48% 0px' });
    markers.forEach((m) => io.observe(m));
  }

  /* ---------------- Who walked past? ---------------- */
  const RECS = [
    { clip: 'fox', file: 'CAM01_003.MP4', time: '16:08', answer: 'fox', options: ['fox', 'genet', 'lynx'] },
    { clip: 'jay', file: 'CAM01_004.MP4', time: '16:41', answer: 'jay', options: ['beeeater', 'jay', 'blackbird'] }
  ];
  const quiz = $('.quiz');
  const opts = $$('.option');
  const result = $('#quiz-result');
  const count = $('#quiz-count');
  const next = $('#quiz-next');
  let idx = 0; let answered = null; let found = 0; let loaded = -1;

  function renderQuiz() {
    if (!quiz) return;
    const r = RECS[idx];
    opts.forEach((b, i) => {
      b.textContent = t('sp.' + r.options[i]);
      b.dataset.key = r.options[i];
      b.classList.toggle('right', answered !== null && r.options[i] === r.answer);
      b.classList.toggle('wrong', answered !== null && i === answered && r.options[i] !== r.answer);
      b.setAttribute('aria-pressed', answered === i ? 'true' : 'false');
    });
    quiz.classList.toggle('answered', answered !== null);
    if (answered === null) result.textContent = '';
    else {
      const name = t('sp.' + r.answer);
      const low = name.charAt(0).toLowerCase() + name.slice(1);
      const a = lang === 'es' ? low : (/^[aeiou]/i.test(name) ? 'an ' : 'a ') + low.replace(/^iberian/, 'Iberian').replace(/^european/, 'European').replace(/^eurasian/, 'Eurasian');
      result.textContent = r.options[answered] === r.answer ? t('quiz.right', { a }) : t('quiz.wrong', { a });
    }
    count.textContent = t('quiz.count', { n: found, t: RECS.length });
    $('#rec-file').textContent = r.file; $('#rec-time').textContent = r.time;
  }
  function loadRecording(force) {
    if (!recVideo) return;
    const r = RECS[idx];
    if (loaded !== idx || force) {
      recVideo.poster = `assets/clips/${r.clip}.jpg`;
      recVideo.src = `assets/clips/${r.clip}.mp4`;
      loaded = idx;
    }
    if (reduce) { playBtn.hidden = false; return; }
    recVideo.play().catch(() => { playBtn.hidden = false; });
  }
  playBtn?.addEventListener('click', () => { playBtn.hidden = true; recVideo.play().catch(() => {}); });
  opts.forEach((b, i) => b.addEventListener('click', () => {
    if (answered !== null) return;
    answered = i;
    if (RECS[idx].options[i] === RECS[idx].answer) found++;
    renderQuiz();
    next.focus({ preventScroll: true });
  }));
  next?.addEventListener('click', () => {
    if (idx === RECS.length - 1 && answered !== null) {
      result.textContent = t('quiz.done', { n: 54 });
      idx = 0; answered = null; found = 0; renderQuiz(); result.textContent = t('quiz.done', { n: 54 });
    } else { idx = (idx + 1) % RECS.length; answered = null; renderQuiz(); }
    setState('quiz'); loadRecording(true);
  });

  /* ---------------- Habitat recordings play while in view ---------------- */
  const clips = $$('video[data-autoplay]');
  if (reduce) clips.forEach((v) => v.setAttribute('controls', ''));
  else if ('IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause(); }
    }, { threshold: 0.35 });
    clips.forEach((v) => vio.observe(v));
  }

  /* ---------------- Entrances: heading, then text, then picture ---------------- */
  const groups = [
    ['.how h2'], ['.quiz h2', '.quiz-lead', '.quiz-options', '.quiz-foot'],
    ['.habitats h2', ...$$('.hab-card')], ...$$('.inapp-half').map((x) => [x.querySelector('h2'), x.querySelector('.inapp-panel')]),
    ['.expeditions h2', '.road'], ['.faq h2'],
    ['.footer-mark', ...$$('.footer-menu li'), '.footer-blocks']
  ];
  groups.forEach((g) => g.map((x) => (typeof x === 'string' ? $(x) : x)).filter(Boolean).forEach((el, i) => {
    el.setAttribute('data-reveal', ''); el.style.setProperty('--d', Math.min(i, 8) * 75 + 'ms');
  }));
  $$('.tile').forEach((el, i) => { el.setAttribute('data-reveal', ''); el.style.setProperty('--d', (i % 4) * 70 + 'ms'); });
  const targets = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const rio = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); rio.unobserve(e.target); }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    targets.forEach((el) => rio.observe(el));
    addEventListener('load', () => setTimeout(() => targets.forEach((el) => {
      const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
    }), 2500));
  } else targets.forEach((el) => el.classList.add('is-in'));

  applyLang();
})();
