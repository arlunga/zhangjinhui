/* =========================================================
   张瑾慧 · 个人网站 · 交互与双语
   ========================================================= */

const T = {
  zh: {
    "nav.about": "关于我", "nav.strengths": "优势", "nav.experience": "经历",
    "nav.education": "学历", "nav.ai": "AI×教学", "nav.contact": "联系",

    "hero.eyebrow": "播音与主持艺术 · 少儿口才教师",
    "hero.tagline": "用声音传递温度，用 AI 让成长可见",
    "hero.location": "深圳 · Shenzhen", "hero.experience": "4 年口才教学经验",
    "hero.ai": "AI 赋能口才教学", "hero.cta": "联系我", "hero.cta2": "看看我的 AI 教学",
    "hero.download": "下载简历 PDF",
    "hero.course1": "少儿口才", "hero.course2": "即兴口语", "hero.course3": "小主持", "hero.course4": "朗诵", "hero.course5": "AI 教学",

    "about.eyebrow": "关于我 / About", "about.title": "一段声音，一份耐心",
    "about.p1": "昆明城市学院播音与主持艺术专业本科生，普通话水平测试二级甲等。在校长期参与舞台主持、晚会展演、朗诵赛事与少儿口才教学助教等工作，积累了扎实的台前幕后经验。",
    "about.p2": "我擅长氛围调动、受众互动与节奏把控，也热衷把 AI 工具融入口才课堂——让孩子的每一次表达都被看见、被量化、被鼓励。",

    "strengths.eyebrow": "个人优势 / Strengths", "strengths.title": "我的优势",
    "strengths.s1.title": "台前实战经验", "strengths.s1.body": "长期参与舞台主持、晚会展演与朗诵赛事，熟悉台前幕后的每一个细节。",
    "strengths.s2.title": "少儿口才教学", "strengths.s2.body": "主讲少儿口才、即兴口语与小主持课程，适配小学生群体的认知与表达特点。",
    "strengths.s3.title": "氛围与互动", "strengths.s3.body": "擅长氛围调动、受众互动与节奏把控，让课堂始终有温度、有回应。",
    "strengths.s4.title": "AI 赋能教学", "strengths.s4.body": "用 AI 做分层教案、语音评测与稿件生成，让教学更高效、反馈更客观。",

    "exp.eyebrow": "工作经历 / Experience", "exp.title": "走过的路",
    "exp.j1.role": "口才教师", "exp.j1.period": "2023.10 – 2026.06",
    "exp.j1.company": "娱萌文化传播有限公司",
    "exp.j1.i1": "主讲少儿口才、即兴口语表达、少儿小主持人课程，适配小学生群体。",
    "exp.j1.i2": "设计趣味课堂训练，纠正发音，提升孩子语言逻辑与舞台表现力。",
    "exp.j1.i3": "入校开展校内课后服务，教授少儿口才、即兴口语、小主持等特色课程。",
    "exp.j1.i4": "负责语言类赛事赛前训练与彩排指导，带队学员参加少儿主持比赛。",
    "exp.j1.ach": "独立带队获得区级中小学生红领巾宣讲比赛一等奖",
    "exp.j2.role": "助教", "exp.j2.period": "2022.09 – 2022.09",
    "exp.j2.company": "树艺艺术教育",
    "exp.j2.i1": "组织学生每日早功训练，开展气息、发声、绕口令、形体基础练习。",
    "exp.j2.i2": "完成日常专业作业核查，逐一纠正新闻稿件、文艺稿件的吐字、停连、情感处理。",
    "exp.j2.i3": "配合主讲教师完成课堂教学，维持课堂秩序，跟进学员课堂状态。",
    "exp.j2.i4": "协助教务部门开展工作，联系学生及家长、开导学生心理、排课等。",

    "edu.eyebrow": "教育经历 / Education", "edu.title": "我的学历",
    "edu.school": "昆明城市学院", "edu.degree": "本科 · 播音与主持艺术", "edu.period": "2022 – 2026",

    "cred.eyebrow": "资格证书 & 荣誉 / Credentials", "cred.title": "专业背书",
    "cred.c1.tag": "资格证书", "cred.c1.title": "普通话水平测试二级甲等",
    "cred.c2.tag": "荣誉奖项", "cred.c2.title": "区级中小学生红领巾宣讲比赛一等奖",

    "ai.eyebrow": "AI × 教学 / AI × Teaching", "ai.title": "我如何把 AI 带进口才课堂",
    "ai.intro": "在这个时代，好老师不只是会讲，更要会用工具把「看不见的进步」变成「看得见的成长」。",
    "ai.a1.title": "AI 分层教案", "ai.a1.body": "按学员水平生成个性化教案与训练材料，一个主题、三种难度。",
    "ai.a2.title": "AI 语音评测", "ai.a2.body": "用语音识别给吐字、停连、节奏提供客观反馈，进步可以被量化。",
    "ai.a3.title": "AI 稿件生成", "ai.a3.body": "生成绕口令、朗诵稿与即兴话题，快速拓展训练素材。",
    "ai.a4.title": "AI 课后反馈", "ai.a4.body": "自动化生成学员成长报告，让家长清楚看到每一次进步。",

    "ai.tool.title": "AI 口才小助手", "ai.tool.sub": "把一段主持词或自我介绍贴进来，看看我会怎么「诊断」。",
    "ai.tool.placeholder": "请输入一段主持词 / 自我介绍 / 朗读片段…",
    "ai.tool.run": "开始分析", "ai.tool.clear": "清空", "ai.tool.mic": "语音输入",
    "ai.tool.listening": "正在聆听，请说话…",
    "ai.tool.mic.unsupported": "当前浏览器不支持语音输入，可手动粘贴文字。",
    "ai.tool.note": "说明：这是我在教学中会使用的 AI 辅助思路的前端演示，基于规则引擎、离线可运行。",

    "contact.eyebrow": "联系方式 / Contact", "contact.title": "期待与您交流",
    "contact.phone.label": "电话", "contact.phone.value": "面试时提供",
    "contact.wechat.label": "微信", "contact.wechat.value": "面试时提供",
    "contact.city.label": "期望城市", "contact.city.value": "深圳",

    "footer.note": "播音主持 · 少儿口才 · AI 赋能教学",

    // —— 小工具输出 ——
    "tool.chars": "总字数", "tool.duration": "预估时长", "tool.filler": "口头禅", "tool.pauses": "停顿标点",
    "tool.score": "综合评分", "tool.tips": "改进建议",
    "tool.empty": "请先输入一段内容哦～", "tool.tooShort": "内容太短，建议至少 20 个字，我会读得更准。",
    "tool.score.excellent": "很棒！节奏与表达都很稳，继续保持。",
    "tool.score.good": "不错，整体流畅，还有一点优化空间。",
    "tool.score.ok": "可以再打磨一下节奏与停顿。",
    "tool.score.weak": "建议多读几遍，先把节奏放稳。",
    "tool.tip.filler": "检测到口头禅，建议用「停顿」代替，或先列提纲再开口。",
    "tool.tip.long": "最长一句有 {n} 字，建议拆成短句，给听众留呼吸感。",
    "tool.tip.pause": "停顿偏少，建议在语义完整处加逗号，节奏会更稳。",
    "tool.tip.longdur": "时长偏长，正式场合建议控制在 2 分钟以内。",
    "tool.tip.practice": "读一遍并录音，对照上面的建议，感受变化。",
    "tool.filler.clean": "没有明显的口头禅，很不错。"
  },

  en: {
    "nav.about": "About", "nav.strengths": "Strengths", "nav.experience": "Experience",
    "nav.education": "Education", "nav.ai": "AI×Teaching", "nav.contact": "Contact",

    "hero.eyebrow": "Broadcasting & Hosting Arts · Children's Speech Teacher",
    "hero.tagline": "Warming hearts with voice, making growth visible with AI",
    "hero.location": "Shenzhen, China", "hero.experience": "4 years of speech-teaching",
    "hero.ai": "AI-enhanced speech coaching", "hero.cta": "Contact Me", "hero.cta2": "See My AI Teaching",
    "hero.download": "Download Resume",
    "hero.course1": "Children's Eloquence", "hero.course2": "Impromptu Speaking", "hero.course3": "Little Host", "hero.course4": "Recitation", "hero.course5": "AI Teaching",

    "about.eyebrow": "About", "about.title": "A warm voice, a patient heart",
    "about.p1": "An undergraduate in Broadcasting & Hosting Arts at Kunming City College, holding Mandarin Proficiency Level 2-A. Through years of stage hosting, gala performances, recitation competitions and children's speech-teaching assistantships, I've built solid experience both on and off the stage.",
    "about.p2": "Skilled at energizing a room, engaging audiences and controlling pacing, I'm also passionate about weaving AI tools into the speech classroom — so every child's expression is seen, measured and encouraged.",

    "strengths.eyebrow": "Strengths", "strengths.title": "What I bring",
    "strengths.s1.title": "Stage Experience", "strengths.s1.body": "Long-term stage hosting, gala performances and recitation competitions — familiar with every detail on and off stage.",
    "strengths.s2.title": "Children's Speech Teaching", "strengths.s2.body": "Specialist in kids' eloquence, impromptu speaking and little-host courses, tailored to primary-school learners.",
    "strengths.s3.title": "Engagement & Interaction", "strengths.s3.body": "Skilled at energizing the room, engaging audiences and pacing — keeping every class warm and responsive.",
    "strengths.s4.title": "AI-Enhanced Teaching", "strengths.s4.body": "AI-assisted lesson plans, speech scoring and script generation for more efficient, objective feedback.",

    "exp.eyebrow": "Experience", "exp.title": "The road so far",
    "exp.j1.role": "Speech Teacher", "exp.j1.period": "2023.10 – 2026.06",
    "exp.j1.company": "Yumeng Culture Communication Co., Ltd.",
    "exp.j1.i1": "Led courses in children's eloquence, impromptu speaking and little-host training, adapted for primary-school learners.",
    "exp.j1.i2": "Designed fun classroom drills to correct pronunciation and boost children's language logic and stage presence.",
    "exp.j1.i3": "Delivered after-school programs in schools, teaching signature courses in eloquence, impromptu speaking and hosting.",
    "exp.j1.i4": "Handled pre-competition training and rehearsal coaching for speech events, leading students to compete in children's hosting contests.",
    "exp.j1.ach": "Independently led a team to First Prize in the District Young Pioneers Speech Contest.",
    "exp.j2.role": "Teaching Assistant", "exp.j2.period": "2022.09 – 2022.09",
    "exp.j2.company": "Shuyi Art Education",
    "exp.j2.i1": "Organized daily morning training — breath, vocalization, tongue twisters and posture fundamentals.",
    "exp.j2.i2": "Reviewed daily assignments, correcting articulation, pausing and emotional delivery in news and literary scripts.",
    "exp.j2.i3": "Assisted lead teachers in class, maintaining order and tracking students' progress.",
    "exp.j2.i4": "Supported the academic office — contacting students and parents, offering emotional guidance and scheduling.",

    "edu.eyebrow": "Education", "edu.title": "Education",
    "edu.school": "Kunming City College", "edu.degree": "B.A. in Broadcasting & Hosting Arts", "edu.period": "2022 – 2026",

    "cred.eyebrow": "Credentials & Honors", "cred.title": "Credentials & Honors",
    "cred.c1.tag": "Certificate", "cred.c1.title": "Mandarin Proficiency Test — Level 2-A",
    "cred.c2.tag": "Honor", "cred.c2.title": "First Prize — District Young Pioneers Speech Contest",

    "ai.eyebrow": "AI × Teaching", "ai.title": "How I bring AI into the speech classroom",
    "ai.intro": "In this era, a great teacher does more than talk well — they use tools to turn invisible progress into visible growth.",
    "ai.a1.title": "AI Lesson Plans", "ai.a1.body": "Personalized lesson plans and drills by level — one theme, three difficulty tiers.",
    "ai.a2.title": "AI Speech Scoring", "ai.a2.body": "Speech recognition gives objective feedback on articulation, pausing and pacing — progress you can measure.",
    "ai.a3.title": "AI Script Generation", "ai.a3.body": "Tongue twisters, recitation scripts and improv prompts — expanding training material in seconds.",
    "ai.a4.title": "AI Feedback Reports", "ai.a4.body": "Automated progress reports so parents clearly see every step forward.",

    "ai.tool.title": "AI Speaking Coach", "ai.tool.sub": "Paste a hosting script or self-intro to see how I'd \"diagnose\" it.",
    "ai.tool.placeholder": "Paste a hosting script / self-intro / reading passage…",
    "ai.tool.run": "Analyze", "ai.tool.clear": "Clear", "ai.tool.mic": "Voice Input",
    "ai.tool.listening": "Listening… please speak.",
    "ai.tool.mic.unsupported": "Voice input not supported here — paste text instead.",
    "ai.tool.note": "Note: a front-end demo of the AI-assisted approach I use in teaching — rule-based and runs offline.",

    "contact.eyebrow": "Contact", "contact.title": "Let's talk",
    "contact.phone.label": "Phone", "contact.phone.value": "Available on request",
    "contact.wechat.label": "WeChat", "contact.wechat.value": "Available on request",
    "contact.city.label": "Preferred City", "contact.city.value": "Shenzhen",

    "footer.note": "Broadcasting & Hosting · Children's Speech · AI-Enhanced Teaching",

    "tool.chars": "Characters", "tool.duration": "Est. duration", "tool.filler": "Filler words", "tool.pauses": "Pauses",
    "tool.score": "Overall Score", "tool.tips": "Suggestions",
    "tool.empty": "Please paste some text first 🙂", "tool.tooShort": "Too short — try at least 20 characters for a better read.",
    "tool.score.excellent": "Excellent — steady pace and clear expression. Keep it up.",
    "tool.score.good": "Good — overall fluent, with a little room to polish.",
    "tool.score.ok": "Could use some refinement on pacing and pauses.",
    "tool.score.weak": "Worth a few more practice rounds to settle the rhythm.",
    "tool.tip.filler": "Filler words detected — try replacing them with a pause, or outline first.",
    "tool.tip.long": "Your longest sentence is {n} characters — break it into shorter ones for breathing room.",
    "tool.tip.pause": "Sparse pauses — add commas at natural breaks for a steadier rhythm.",
    "tool.tip.longdur": "A bit long — for formal settings, aim for under 2 minutes.",
    "tool.tip.practice": "Read it aloud, record yourself, and compare against these tips.",
    "tool.filler.clean": "No obvious filler words — nice."
  }
};

let lang = localStorage.getItem('lang') || 'zh';
let lastResult = null;

const t = (key) => (T[lang] && T[lang][key]) || T.zh[key] || key;

function applyLang() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'zh' ? 'EN' : '中';
  localStorage.setItem('lang', lang);
  if (lastResult) renderTool(lastResult);
}

/* ============ 语言切换 ============ */
document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  applyLang();
});

/* ============ 移动端菜单 ============ */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

/* ============ 滚动显现动画 ============ */
const revealEls = document.querySelectorAll('.card, .timeline-item, .edu-card, .cred-card, .section-title, .tool, .hero-photo');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => el.classList.add('reveal'));
revealEls.forEach((el) => io.observe(el));

/* ============ AI 口才小助手 ============ */
const FILLERS = ['嗯', '啊', '呃', '然后', '那个', '就是', '这个', '就是说', '然后呢', '然后就是', '对吧', '知道吧', '对不对', '反正', '基本上'];

function analyze(text) {
  const chars = text.replace(/\s/g, '').length;
  if (chars < 20) return { tooShort: true, chars };

  // 口头禅统计
  const found = {};
  let fillerTotal = 0;
  FILLERS.forEach((f) => {
    const count = text.split(f).length - 1;
    if (count > 0) { found[f] = count; fillerTotal += count; }
  });

  // 停顿标点
  const pauses = (text.match(/[，。！？、；：,.!?;:]/g) || []).length;

  // 句子长度
  const sentences = text.split(/[。！？!?]/).map((s) => s.trim()).filter(Boolean);
  const maxSentence = sentences.reduce((m, s) => Math.max(m, s.length), 0);

  // 时长估算（约 240 字/分钟 = 4 字/秒）
  const seconds = Math.round(chars / 4);
  const pauseDensity = pauses > 0 ? chars / pauses : 999;

  // 评分
  let score = 100;
  score -= Math.min(fillerTotal * 2, 20);
  if (maxSentence > 30) score -= 6;
  if (sentences.some((s) => s.length > 40)) score -= 6;
  if (pauseDensity > 18) score -= 8; else if (pauseDensity > 12) score -= 4;
  if (chars < 40) score -= 5;
  score = Math.max(40, Math.min(98, score));

  return { chars, seconds, fillerTotal, found, pauses, maxSentence, sentences: sentences.length, pauseDensity, score };
}

function formatDuration(seconds) {
  if (seconds < 60) return lang === 'zh' ? `${seconds} 秒` : `${seconds}s`;
  const m = Math.floor(seconds / 60), s = seconds % 60;
  return lang === 'zh' ? `${m} 分 ${s} 秒` : `${m}m ${s}s`;
}

function renderTool(r) {
  const out = document.getElementById('toolOutput');
  out.hidden = false;

  if (r.tooShort) {
    out.innerHTML = `<p class="tool-sub" style="color:#A4452F">${t('tool.tooShort')}</p>`;
    return;
  }

  const scoreBand = r.score >= 88 ? 'excellent' : r.score >= 75 ? 'good' : r.score >= 60 ? 'ok' : 'weak';

  const tips = [];
  if (r.fillerTotal > 0) tips.push(t('tool.tip.filler'));
  if (r.maxSentence > 30) tips.push(t('tool.tip.long').replace('{n}', r.maxSentence));
  if (r.pauseDensity > 15) tips.push(t('tool.tip.pause'));
  if (r.seconds > 120) tips.push(t('tool.tip.longdur'));
  tips.push(t('tool.tip.practice'));

  const fillerChips = r.fillerTotal > 0
    ? Object.keys(r.found).map((f) => `<span class="filler-chip">${f} × ${r.found[f]}</span>`).join('')
    : `<span style="color:var(--accent-deep)">${t('tool.filler.clean')}</span>`;

  out.innerHTML = `
    <div class="stat-row">
      <div class="stat"><div class="stat-num">${r.chars}</div><div class="stat-label">${t('tool.chars')}</div></div>
      <div class="stat"><div class="stat-num">${formatDuration(r.seconds)}</div><div class="stat-label">${t('tool.duration')}</div></div>
      <div class="stat"><div class="stat-num">${r.fillerTotal}</div><div class="stat-label">${t('tool.filler')}</div></div>
      <div class="stat"><div class="stat-num">${r.pauses}</div><div class="stat-label">${t('tool.pauses')}</div></div>
    </div>
    <div style="margin-bottom:20px">${fillerChips}</div>
    <div class="score-row">
      <div class="score-ring">${r.score}</div>
      <div class="score-text"><strong style="font-family:var(--serif)">${t('tool.score')} · ${r.score}</strong><br>${t('tool.score.' + scoreBand)}</div>
    </div>
    <p class="tips-title">${t('tool.tips')}</p>
    <ul class="tips">${tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
  `;
  out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('toolRun').addEventListener('click', () => {
  const text = document.getElementById('toolInput').value;
  if (!text.trim()) {
    const out = document.getElementById('toolOutput');
    out.hidden = false;
    out.innerHTML = `<p class="tool-sub" style="color:#A4452F">${t('tool.empty')}</p>`;
    return;
  }
  lastResult = analyze(text);
  renderTool(lastResult);
});

document.getElementById('toolClear').addEventListener('click', () => {
  document.getElementById('toolInput').value = '';
  document.getElementById('toolOutput').hidden = true;
  lastResult = null;
});

/* ============ 语音输入（Web Speech API，无需后端） ============ */
const micBtn = document.getElementById('toolMic');
const micIcon = document.getElementById('micIcon');
const micLabel = document.getElementById('micLabel');
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SR) {
  const rec = new SR();
  rec.interimResults = false;
  rec.continuous = false;
  let listening = false;
  const setMic = (active) => {
    micIcon.textContent = active ? '🔴' : '🎙️';
    micLabel.textContent = t(active ? 'ai.tool.listening' : 'ai.tool.mic');
  };
  micBtn.addEventListener('click', () => {
    if (listening) { rec.stop(); return; }
    rec.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    try { rec.start(); listening = true; setMic(true); } catch (e) {}
  });
  rec.onresult = (e) => {
    const text = Array.from(e.results).map((r) => r[0].transcript).join('');
    const ta = document.getElementById('toolInput');
    ta.value = (ta.value ? ta.value + ' ' : '') + text;
  };
  rec.onend = () => { listening = false; setMic(false); };
  rec.onerror = () => { listening = false; setMic(false); };
} else {
  micBtn.style.display = 'none';
  micBtn.title = t('ai.tool.mic.unsupported');
}

/* ============ 年份 & 初始化 ============ */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang();
