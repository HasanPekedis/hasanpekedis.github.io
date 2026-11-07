(() => {
  const EMAIL = 'hasanpekedis365@hotmail.com';
  const PHONE = { tel: '+905457476163', label: '+90 545 747 61 63' };
  const LINKS = {
    github: 'https://github.com/HasanPekedis',
    linkedin: 'https://www.linkedin.com/in/hasanpekedis/',
  };

  const PROJECTS = [
    { id: 'masonry-for-tasksboard', url: 'https://github.com/HasanPekedis/tasksboard-masonry', tech: 'JavaScript · Chrome extension',
      en: 'Chrome extension that lays out TasksBoard lists as a gap-free masonry grid (native CSS grid-lanes with a polyfill fallback).',
      tr: 'TasksBoard listelerini boşluksuz bir masonry ızgarasına dizen Chrome eklentisi (yerleşik CSS grid-lanes, yoksa polyfill).' },
    { id: 'pegasus-chatbot', url: 'https://github.com/HasanPekedis/Pegasus_Chat-Bot', tech: 'Python · RAG · Pinecone',
      en: 'Retrieval-augmented chatbot backed by a Pinecone vector store.',
      tr: 'Pinecone vektör veritabanı üzerinde çalışan RAG tabanlı sohbet botu.' },
    { id: 'turkish-nlp', url: 'https://github.com/yigittuncer07/turkish_nlp', tech: 'Python · LLMs',
      en: 'Experiments to improve open-source LLMs on Turkish summarization and text generation.',
      tr: 'Açık kaynak LLM\'lerin Türkçe özetleme ve metin üretimindeki başarısını artırma deneyleri.' },
    { id: 'prompt4readme', url: 'https://github.com/HasanPekedis/Prompt4README', tech: 'Python · LLMs',
      en: 'Generates high-quality prompts for writing README files of existing codebases.',
      tr: 'Mevcut projeler için README yazdıracak kaliteli prompt\'lar üretir.' },
    { id: 'othello-ai', url: 'https://github.com/HasanPekedis/othello', tech: 'Python · game AI',
      en: 'Othello with Human/AI modes; AI players use different heuristics and search depths.',
      tr: 'İnsan/yapay zekâ modlarıyla Othello; yapay zekâ farklı sezgisel fonksiyonlar ve arama derinlikleri kullanır.' },
    { id: 'uni-registration', url: 'https://github.com/yigittuncer07/uni_registration_system', tech: 'Java · Python · Scrum',
      en: 'University registration system built by a 7-person Scrum team over three iterations.',
      tr: '7 kişilik bir Scrum ekibiyle üç iterasyonda geliştirilen üniversite kayıt sistemi.' },
  ];

  const PUBLICATIONS = [
    { title: 'New Approaches to Named Entity Recognition in Turkish: Improving Performance through Architecture Modification of Causal Large Language Models',
      venue: '33rd Signal Processing and Communications Applications Conference (SIU 2025), IEEE',
      year: 2025, doi: '10.1109/SIU66497.2025.11112472', url: 'https://ieeexplore.ieee.org/document/11112472',
      en: 'Fine-tunes LLMs for Turkish NER; LLaMA is restructured with bidirectional attention and compared with Turkish BERT, mBART, mT5 and TURNA.',
      tr: 'Türkçe NER için LLM\'lere ince ayar; LLaMA çift yönlü dikkat ile yeniden yapılandırılıp Türkçe BERT, mBART, mT5 ve TURNA ile karşılaştırılıyor.' },
  ];

  const T = {
    en: {
      hint: 'Type <c>help</c> or tap a command below.',
      unknown: (c) => `command not found: ${c}. Try <c>help</c>.`,
      help: [
        ['whoami', 'who is this'],
        ['about', 'a little more about me'],
        ['experience', 'where I work'],
        ['projects', 'things I\'ve built'],
        ['open <project>', 'open a project on GitHub'],
        ['publications', 'papers'],
        ['skills', 'languages & tools'],
        ['education', 'degree & certification'],
        ['cv', 'download my CV'],
        ['contact', 'email, phone, LinkedIn, GitHub'],
        ['lang tr|en', 'Türkçe / English'],
        ['theme dark|light|matrix', 'change colors'],
        ['clear', 'clear the screen'],
      ],
      helpFoot: 'Tab completes, ↑/↓ browse history. There may be a hidden fish or two.',
      whoami: 'Hasan Pekedis — AI/ML Engineer at <b>DNA Proje ve Yazılım A.Ş.</b>, İstanbul.',
      about: [
        'I build applied AI systems: LLM-powered assistants, retrieval-augmented',
        'generation (RAG), named-entity recognition and agent tooling (MCP) that',
        'connect language models to real business data.',
        '',
        'I graduated in Computer Engineering from Marmara University in 2025.',
      ],
      exp: [['AI/ML Engineer', 'DNA Proje ve Yazılım A.Ş. · present'],
            ['', 'LLM applications & RAG · NER · MCP servers and agent skills for enterprise data'],
            ['Software Developer', 'Workrunner · 2023 – 2024']],
      projectsHead: 'Run <c>open &lt;name&gt;</c> or click a name.',
      skills: [['languages', 'Python, Java, C, C++, JavaScript, Go, SQL'],
               ['ai / ml', 'LLMs, RAG, NER, fine-tuning, prompt engineering'],
               ['tooling', 'MCP, Pinecone, Git']],
      edu: [['Marmara University', 'B.Sc. Computer Engineering · 2020 – 2025'],
            ['Certification', 'Claude Certified Architect – Foundations · Anthropic · 2026']],
      cv: 'CV: <a href="cv/hasan-pekedis-cv-en.pdf" target="_blank" rel="noopener">English (PDF)</a> · <a href="cv/hasan-pekedis-cv-tr.pdf" target="_blank" rel="noopener">Türkçe (PDF)</a>',
      contact: [['email', `<a href="mailto:${EMAIL}">${EMAIL}</a>`],
                ['phone', `<a href="tel:${PHONE.tel}">${PHONE.label}</a>`],
                ['linkedin', `<a href="${LINKS.linkedin}" target="_blank" rel="noopener">in/hasanpekedis</a>`],
                ['github', `<a href="${LINKS.github}" target="_blank" rel="noopener">HasanPekedis</a>`]],
      opened: (p) => `opening ${p}…`,
      noProject: (p) => `no such project: ${p}. See <c>projects</c>.`,
      lang: 'language: English',
      theme: (t) => `theme: ${t}`,
      themeUsage: 'usage: theme dark|light|matrix',
      sudo: 'Nice try. But if you want to hire me: <c>contact</c> 😉',
      rm: 'Permission denied. This terminal is load-bearing.',
      exit: 'There is no escape. (Try <c>clear</c>.)',
      koi: '🐟 the koi swam away. (A new one is drawn every day on <a href="https://github.com/HasanPekedis" target="_blank" rel="noopener">github.com/HasanPekedis</a>.)',
    },
    tr: {
      hint: '<c>help</c> yaz ya da aşağıdan bir komuta dokun.',
      unknown: (c) => `komut bulunamadı: ${c}. <c>help</c> yazmayı dene.`,
      help: [
        ['whoami', 'ben kimim'],
        ['about', 'biraz daha detay'],
        ['experience', 'nerede çalışıyorum'],
        ['projects', 'yaptığım işler'],
        ['open <proje>', 'projeyi GitHub\'da aç'],
        ['publications', 'yayınlar'],
        ['skills', 'diller ve araçlar'],
        ['education', 'eğitim ve sertifika'],
        ['cv', 'CV indir'],
        ['contact', 'e-posta, telefon, LinkedIn, GitHub'],
        ['lang tr|en', 'Türkçe / English'],
        ['theme dark|light|matrix', 'renkleri değiştir'],
        ['clear', 'ekranı temizle'],
      ],
      helpFoot: 'Tab tamamlar, ↑/↓ geçmişte gezinir. Bir yerlerde bir balık saklanıyor olabilir.',
      whoami: 'Hasan Pekedis — <b>DNA Proje ve Yazılım A.Ş.</b>\'de AI/ML Engineer, İstanbul.',
      about: [
        'Uygulamalı yapay zekâ sistemleri geliştiriyorum: LLM tabanlı asistanlar,',
        'RAG (retrieval-augmented generation), varlık tanıma (NER) ve dil modellerini',
        'gerçek iş verisine bağlayan ajan araçları (MCP).',
        '',
        '2025\'te Marmara Üniversitesi Bilgisayar Mühendisliği\'nden mezun oldum.',
      ],
      exp: [['AI/ML Engineer', 'DNA Proje ve Yazılım A.Ş. · halen'],
            ['', 'LLM uygulamaları ve RAG · NER · kurumsal veri için MCP sunucuları ve ajan becerileri'],
            ['Software Developer', 'Workrunner · 2023 – 2024']],
      projectsHead: '<c>open &lt;isim&gt;</c> yaz ya da bir isme tıkla.',
      skills: [['diller', 'Python, Java, C, C++, JavaScript, Go, SQL'],
               ['ai / ml', 'LLM\'ler, RAG, NER, fine-tuning, prompt mühendisliği'],
               ['araçlar', 'MCP, Pinecone, Git']],
      edu: [['Marmara Üniversitesi', 'Bilgisayar Mühendisliği (Lisans) · 2020 – 2025'],
            ['Sertifika', 'Claude Certified Architect – Foundations · Anthropic · 2026']],
      cv: 'CV: <a href="cv/hasan-pekedis-cv-tr.pdf" target="_blank" rel="noopener">Türkçe (PDF)</a> · <a href="cv/hasan-pekedis-cv-en.pdf" target="_blank" rel="noopener">English (PDF)</a>',
      contact: [['e-posta', `<a href="mailto:${EMAIL}">${EMAIL}</a>`],
                ['telefon', `<a href="tel:${PHONE.tel}">${PHONE.label}</a>`],
                ['linkedin', `<a href="${LINKS.linkedin}" target="_blank" rel="noopener">in/hasanpekedis</a>`],
                ['github', `<a href="${LINKS.github}" target="_blank" rel="noopener">HasanPekedis</a>`]],
      opened: (p) => `${p} açılıyor…`,
      noProject: (p) => `böyle bir proje yok: ${p}. <c>projects</c> yazıp bak.`,
      lang: 'dil: Türkçe',
      theme: (t) => `tema: ${t}`,
      themeUsage: 'kullanım: theme dark|light|matrix',
      sudo: 'Güzel deneme. Ama beni işe almak istiyorsan: <c>contact</c> 😉',
      rm: 'İzin reddedildi. Bu terminal taşıyıcı kolon.',
      exit: 'Kaçış yok. (<c>clear</c> dene.)',
      koi: '🐟 koi yüzüp gitti. (<a href="https://github.com/HasanPekedis" target="_blank" rel="noopener">github.com/HasanPekedis</a>\'te her gün yenisi çiziliyor.)',
    },
  };

  const BANNER = [
    "  _   _                         ____      _            _ _",
    " | | | | __ _ ___  __ _ _ __   |  _ \\ ___| | _____  __| (_)___",
    " | |_| |/ _` / __|/ _` | '_ \\  | |_) / _ \\ |/ / _ \\/ _` | / __|",
    " |  _  | (_| \\__ \\ (_| | | | | |  __/  __/   <  __/ (_| | \\__ \\",
    " |_| |_|\\__,_|___/\\__,_|_| |_| |_|   \\___|_|\\_\\___|\\__,_|_|___/",
  ].join('\n');

  const CHIPS = ['help', 'whoami', 'about', 'experience', 'projects', 'publications', 'skills', 'cv', 'contact', 'lang'];
  const COMMANDS = ['help', 'whoami', 'about', 'experience', 'projects', 'open', 'publications', 'papers', 'skills', 'education',
    'cv', 'contact', 'lang', 'theme', 'clear', 'koi', 'ls', 'history', 'date', 'echo', 'sudo', 'exit'];
  const THEMES = ['dark', 'light', 'matrix'];
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = (id) => document.getElementById(id);
  const out = $('output'), input = $('cmd'), screen = $('screen'), chips = $('chips');

  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };

  let lang = store.get('lang');
  if (lang !== 'tr' && lang !== 'en') lang = (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const history = [];
  let hIndex = 0;
  let busy = false;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // <c>cmd</c> in copy becomes a clickable command
  const fmt = (html) => html.replace(/<c>(.*?)<\/c>/g, (_, c) => `<span class="cmdlink" data-cmd="${c.replace(/&lt;.*?&gt;/g, '').trim()}">${c}</span>`);
  const t = () => T[lang];

  const scroll = () => { screen.scrollTop = screen.scrollHeight; };
  const print = (html, cls = '') => {
    const d = document.createElement('div');
    if (cls) d.className = cls;
    d.innerHTML = fmt(html);
    for (const c of d.querySelectorAll('.cmdlink')) {
      c.setAttribute('role', 'button');
      c.tabIndex = 0;
      c.title = `run: ${c.dataset.cmd}`;
    }
    out.appendChild(d);
    scroll();
    return d;
  };
  const grid = (rows) => print(`<div class="grid">${rows.map(([k, v]) =>
    `<span class="key accent">${k}</span><span>${v}</span>`).join('')}</div>`);
  const echo = (cmd) => {
    const d = document.createElement('div');
    d.className = 'echo';
    d.innerHTML = '<span class="user">hasan@pekedis</span>:<span class="path">~</span>$ ';
    d.appendChild(document.createTextNode(cmd));
    out.appendChild(d);
  };

  const renderChips = () => {
    chips.innerHTML = '';
    for (const c of CHIPS) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = c === 'lang' ? (lang === 'en' ? 'türkçe' : 'english') : c;
      b.onclick = () => run(c === 'lang' ? `lang ${lang === 'en' ? 'tr' : 'en'}` : c);
      chips.appendChild(b);
    }
  };

  const setTheme = (name) => {
    document.body.dataset.theme = name;
    store.set('theme', name);
  };

  const koi = async () => {
    const fish = ['  ><((((°>', ' ><((((º>  ', '><((((°>   '];
    const line = print('', 'koi');
    const width = Math.max(20, Math.floor(screen.clientWidth / 8.4) - 12);
    if (REDUCED) { line.textContent = ' '.repeat(Math.floor(width / 2)) + fish[0]; return; }
    busy = true;
    for (let x = 0; x <= width; x += 1) {
      line.textContent = ' '.repeat(x) + fish[x % fish.length] + (x % 6 < 3 ? '  ~' : ' ~ ');
      await new Promise((r) => setTimeout(r, 35));
    }
    line.textContent = ' '.repeat(width) + '  ~  ';
    print(`<span class="dim">${t().koi}</span>`);
    busy = false;
  };

  const handlers = {
    help: () => {
      grid(t().help.map(([c, d]) => [`<span class="cmdlink" data-cmd="${c.split(' ')[0]}">${esc(c)}</span>`, `<span class="dim">${d}</span>`]));
      print(`<span class="dim">${t().helpFoot}</span>`);
    },
    whoami: () => print(t().whoami),
    about: () => print(t().about.join('\n')),
    experience: () => grid(t().exp.map(([k, v]) => [`<b>${k}</b>`, v])),
    projects: () => {
      grid(PROJECTS.map((p) => [`<span class="cmdlink" data-cmd="open ${p.id}">${p.id}/</span>`,
        `${p[lang]} <span class="dim">[${p.tech}]</span>`]));
      print(`<span class="dim">${t().projectsHead}</span>`);
    },
    open: (arg) => {
      const p = PROJECTS.find((x) => x.id === arg) || PROJECTS.find((x) => arg && x.id.startsWith(arg));
      if (!p) return print(t().noProject(esc(arg || '?')), 'err');
      print(t().opened(`<a href="${p.url}" target="_blank" rel="noopener">${p.id}</a>`));
      window.open(p.url, '_blank', 'noopener');
    },
    publications: () => {
      for (const p of PUBLICATIONS) {
        print(`<b>${p.title}</b>\n<span class="dim">${p.venue} · ${p.year}</span>\n${p[lang]}\n<a href="${p.url}" target="_blank" rel="noopener">doi:${p.doi}</a>`);
      }
    },
    papers: () => handlers.publications(),
    skills: () => grid(t().skills),
    education: () => grid(t().edu.map(([k, v]) => [`<b>${k}</b>`, v])),
    cv: () => print(t().cv),
    contact: () => grid(t().contact),
    lang: (arg) => {
      if (arg !== 'tr' && arg !== 'en') arg = lang === 'en' ? 'tr' : 'en';
      lang = arg;
      document.documentElement.lang = lang;
      store.set('lang', lang);
      renderChips();
      print(t().lang, 'ok');
      print(t().hint, 'dim');
    },
    theme: (arg) => {
      if (arg && !THEMES.includes(arg)) return print(t().themeUsage, 'warn');
      if (!arg) arg = THEMES[(THEMES.indexOf(document.body.dataset.theme) + 1) % THEMES.length];
      setTheme(arg);
      print(t().theme(arg), 'ok');
    },
    clear: () => { out.innerHTML = ''; },
    koi,
    ls: () => handlers.projects(),
    history: () => print(history.map((h, i) => `${String(i + 1).padStart(3)}  ${esc(h)}`).join('\n') || ' '),
    date: () => print(new Date().toString()),
    echo: (_, raw) => print(esc(raw)),
    sudo: () => print(t().sudo, 'warn'),
    exit: () => print(t().exit, 'dim'),
  };

  async function run(raw) {
    if (busy) return;
    const cmd = raw.trim();
    echo(cmd);
    if (cmd) { history.push(cmd); hIndex = history.length; }
    if (!cmd) return scroll();
    const [name, ...rest] = cmd.split(/\s+/);
    const key = name.toLowerCase();
    if (/^rm$/.test(key)) { print(t().rm, 'err'); return scroll(); }
    const h = handlers[key];
    if (!h) { print(t().unknown(esc(name)), 'err'); return scroll(); }
    await h(rest[0]?.toLowerCase(), rest.join(' '));
    scroll();
  }

  const complete = () => {
    const v = input.value;
    const parts = v.split(/\s+/);
    let pool, prefix;
    if (parts.length <= 1) { pool = COMMANDS; prefix = parts[0]; }
    else if (parts[0] === 'open') { pool = PROJECTS.map((p) => p.id); prefix = parts[1]; }
    else if (parts[0] === 'theme') { pool = THEMES; prefix = parts[1]; }
    else if (parts[0] === 'lang') { pool = ['tr', 'en']; prefix = parts[1]; }
    else return;
    const hits = pool.filter((p) => p.startsWith(prefix.toLowerCase()));
    if (hits.length === 1) {
      parts[parts.length - 1] = hits[0];
      input.value = parts.join(' ') + (parts.length === 1 && ['open', 'theme', 'lang'].includes(hits[0]) ? ' ' : '');
    } else if (hits.length > 1) {
      echo(v);
      print(hits.join('  '), 'dim');
    }
  };

  $('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = input.value;
    input.value = '';
    run(v);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') { e.preventDefault(); complete(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (hIndex > 0) input.value = history[--hIndex]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); hIndex = Math.min(history.length, hIndex + 1); input.value = history[hIndex] ?? ''; }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); handlers.clear(); }
  });

  out.addEventListener('click', (e) => {
    const c = e.target.closest('.cmdlink');
    if (c) run(c.dataset.cmd);
  });
  out.addEventListener('keydown', (e) => {
    const c = e.target.closest('.cmdlink');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); run(c.dataset.cmd); input.focus(); }
  });
  screen.addEventListener('click', () => {
    if (!getSelection().toString()) input.focus({ preventScroll: true });
  });

  const typeInto = async (text) => {
    if (REDUCED) return;
    for (const ch of text) {
      input.value += ch;
      await new Promise((r) => setTimeout(r, 70));
    }
    await new Promise((r) => setTimeout(r, 200));
    input.value = '';
  };

  (async () => {
    const savedTheme = store.get('theme');
    if (THEMES.includes(savedTheme)) setTheme(savedTheme);
    document.documentElement.lang = lang;
    renderChips();
    print(esc(BANNER), 'banner');
    busy = true;
    await typeInto('whoami');
    busy = false;
    await run('whoami');
    print(t().hint, 'dim');
    if (matchMedia('(pointer: fine)').matches) input.focus();
  })();
})();
