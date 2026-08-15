/* ========================================
   Grace Portfolio · 1:1 Replica · Main JS
   ======================================== */

// ============ LOADING SCREEN ============
(function() {
  const loading = document.getElementById('loadingScreen');
  if (!loading) return;
  window.addEventListener('load', () => {
    setTimeout(() => loading.classList.add('hidden'), 800);
  });
  // Fallback
  setTimeout(() => loading.classList.add('hidden'), 2000);
})();

// ============ DATA ============

// Experience / Fan cards
const EXPERIENCES = [
  {
    year: 2019,
    era: 'ERA 01',
    title: 'UC Santa Barbara',
    subtitle: 'BA Economics · BS Statistics & Data Science',
    description: 'Double major with GPA 3.96/4.0, top 2%, Highest Honor, 8× Dean\'s List. Founded UCSB\'s first Asian-market business career community. Built the data foundation that powers everything I do today.',
    location: 'California, USA',
    image: 'assets/exp-ucsb.jpg',
  },
  {
    year: 2023,
    era: 'ERA 02',
    title: '在 Indiana U.S. 工作',
    subtitle: 'Actuarial Analyst · Insurance 精算师',
    description: '也就是那个时候，我发现被奉为高薪"香饽饽"的工作，并不是我的追求。',
    location: 'Indiana, USA',
    image: 'assets/exp-indiana.jpg',
  },
  {
    year: 2024,
    era: 'ERA 03',
    title: '在新加坡工作',
    subtitle: 'Data Analyst',
    description: '在新加坡做 Data Analyst。我探索各式各样的事情：K-pop 舞蹈路演，当摄影师，摆摊。有人说：你做这些有什么用？不是浪费时间吗？恰恰相反，这些事情让我脱离学校，接触到了真实的世界，让我有空间发挥执行力&amp;创作力，这带给我的成长比我过去20年在学校获得的要更大。从那之后，我才开始坚信：我不管做什么都会成功的，再也不会自我怀疑，从而拥有了被朋友们称为“恐怖”的执行力 hhh',
    location: 'Singapore',
    image: 'assets/exp-singapore-work.jpg',
  },
  {
    year: 2024,
    era: 'ERA 04',
    title: '成为持证潜水员',
    subtitle: 'PADI 持证潜水员',
    description: '已打卡潜点：涛岛 Ko Tao &amp; 斯米兰群岛 Similan。特别刺激的是，我考证时，刚从游泳池毕业，第一次下海，就遇到了我导师都没遇到过的超罕见剧毒箱型水母！那时候我还不太会在海里控制身体，它就从我身旁半米游过！',
    location: 'Thailand',
    image: 'assets/exp-diving.jpg',
  },
  {
    year: 2025,
    era: 'ERA 05',
    title: 'HKUST',
    subtitle: 'MSc International Management',
    description: 'Elected Student President, led a 15-member board across 7 countries. Built the university\'s first cross-school alliance, co-hosted 6 panel talks with 400+ attendees.',
    location: 'Hong Kong',
    image: 'assets/exp-hkust.jpg',
  },
  {
    year: 2025,
    era: 'ERA 06',
    title: 'LSE',
    subtitle: 'Exchange · MSc International Management',
    description: 'Exchange term at LSE London — completing the MSc across two of the world\'s top business schools.',
    location: 'London, UK',
    image: 'assets/exp-lse.jpg',
  },
  {
    year: 2025,
    era: 'ERA 07',
    title: '知识口播自媒体 · 这董JessDong',
    subtitle: '小红书 · 抖音 · 留学干货',
    description: '拿到耶鲁硕士 offer 后，我把写文书的经验做成干货视频——发布 10 小时就冲上小红书「文书」关键词全站点赞第一，英文面试干货也进了 Top 15。1.3 万粉丝、96.3K 赞与收藏。在 LSE 交换的一个月里，我一个人跑通了从爆款引流、谈价格、定制方案到交付的整条链路，有学生甚至拿到了全省第一。',
    location: 'Online',
    image: 'assets/grid-wenshu.jpg',
  },
  {
    year: 2026,
    era: 'ERA 08',
    title: 'Southbridge Consulting CEO',
    subtitle: 'AI + 教育 · AI + 生物医药',
    description: '一边读港科大与耶鲁大学双学位管理学硕士，一边做自己的创业公司，主要聚焦 AI + 教育 和 AI + 生物医药 两大方向',
    location: 'Hong Kong',
    image: 'assets/exp-southbridge-ceo.jpg',
  },
];

// Photo diary pages (for photo flip book)
const PHOTO_PAGES = [
  {
    type: 'cover',
    meta: 'Portfolio / 2026',
    title: 'Visual Diary',
    desc: 'Every frame is a silent conversation between the observer and the observed. Welcome to my visual diary.',
  },
  {
    type: 'photo',
    label: '01 / Summer in Europe',
    image: 'assets/photo1.jpg',
    caption: 'Wandering through narrow lanes where time moves slower. The scent of fresh bread, walls painted in ochre, and shadows that stretch like lazy cats in the afternoon heat.',
  },
  {
    type: 'photo',
    label: '02 / On Photography',
    image: 'assets/photo2.jpg',
    caption: 'A photograph is a secret about a secret. The more it tells you the less you know. I chase the spaces in between — the light that lingers after a glance, the silence before a smile.',
  },
  {
    type: 'photo',
    label: '03 / Golden Hour',
    image: 'assets/photo3.jpg',
    caption: 'When light touches everything with gold, even the ordinary becomes sacred. These are the moments I live for — fleeting, warm, impossibly beautiful.',
  },
  {
    type: 'photo',
    label: '04 / Quietude',
    image: 'assets/photo4.jpg',
    caption: 'In the silence between frames, the world holds its breath. Photography is not about what you capture — it\'s about what you choose to see.',
  },
  {
    type: 'photo',
    label: '05 / Spring in Shanghai',
    image: 'assets/photo5.jpg',
    caption: '一起走入春天上海的街头。这座城市在春天苏醒，梧桐新绿，弄堂里飘着咖啡香。',
  },
  {
    type: 'photo',
    label: '06 / A European Fairytale',
    image: 'assets/photo6.jpg',
    caption: '闯入油画般的欧洲小镇。石子路、彩色的窗、教堂钟声——每一步都像走在童话里。',
  },
  {
    type: 'full-bleed',
    image: 'assets/photo7.jpg',
  },
  {
    type: 'photo',
    label: '07 / Quiet Corners',
    image: 'assets/photo8.jpg',
    caption: 'The best discoveries happen when you take the wrong turn. These quiet corners hold stories the main streets never tell.',
  },
  {
    type: 'photo',
    label: '08 / City Lights',
    image: 'assets/photo9.jpg',
    caption: 'When the sun goes down, the city puts on a different face. Neon reflections, hurried footsteps, and the poetry of urban solitude.',
  },
  {
    type: 'breather',
    text: 'On Light & Memory',
  },
  {
    type: 'cover-back',
    title: '2026 Collection',
    subtitle: 'Selected Works',
    cta: 'VIEW MORE',
    ctaLink: '#',
  },
];

// XHS posts (representative works)
// 数据字段：views 观看/播放 · likes 点赞 · comments 评论 · collects 收藏 —— 已替换为真实数据
const XHS_POSTS = [
  { title: '百试不爽的英文面试通过手段 Part1 / 附模板', image: 'assets/grid-mianshi.jpg', platform: '小红书', views: '25万', likes: '1.9万', comments: '69', collects: '1.9万', link: 'http://xhslink.com/o/3XW7aZVif1R' },
  { title: '美国藤校耶鲁 DIY 文书 / 申请经验分享', image: 'assets/grid-wenshu.jpg', platform: '小红书', views: '27万', likes: '2万', comments: '141', collects: '1.6万', link: 'http://xhslink.cn/o/1VAAjvooKjh' },
  { title: '马年逆袭！用1年完成3年的计划｜摆烂人实操', image: 'assets/grid-nixi.jpg', platform: '抖音', views: '19万', likes: '8400', comments: '67', collects: '7500', link: 'https://v.douyin.com/RIStfEeZF6c/' },
  { title: '都快毕业了，才明白选学校最重要的是选城市', image: 'assets/grid-hkust.jpg', platform: '小红书', views: '28万', likes: '1.3万', comments: '359', collects: '4800', link: 'http://xhslink.com/o/1HpmNkY4ZlC' },
];

// ============ PRISMA HERO ANIMATION ============
(function initPrismaHero() {
  const title = document.getElementById('prismaTitle');
  const desc = document.getElementById('prismaDesc');
  const cta = document.getElementById('prismaCta');

  if (!title) return;

  // Split title into word spans
  const text = title.textContent || '';
  // Remove the asterisk character from splitting
  const cleanText = text.replace('*', '');
  const words = cleanText.trim().split(' ');

  title.innerHTML = words.map((word, i) => {
    const isLast = i === words.length - 1;
    if (isLast) {
      return `<span class="prisma-word" style="transition-delay:${i * 0.08}s">${word}<span class="prisma-asterisk" style="opacity:0;transition:opacity 0.3s ease ${(i * 0.08 + 0.4)}s">*</span></span>`;
    }
    return `<span class="prisma-word" style="transition-delay:${i * 0.08}s">${word}</span>`;
  }).join(' ');

  // Trigger animation on load
  function animate() {
    title.querySelectorAll('.prisma-word').forEach(w => w.classList.add('visible'));
    // Asterisk fade in
    const asterisk = title.querySelector('.prisma-asterisk');
    if (asterisk) asterisk.style.opacity = '1';

    // Desc appears after 0.5s
    if (desc) {
      desc.style.transitionDelay = '0.5s';
      desc.classList.add('visible');
    }

    // CTA appears after 0.7s
    if (cta) {
      cta.style.transitionDelay = '0.7s';
      cta.classList.add('visible');
    }
  }

  // Slight delay after page load
  setTimeout(animate, 300);
})();

// ============ SCROLL REVEAL ============
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Also reveal children with .reveal class
        entry.target.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('visible');
        });
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-section').forEach(section => {
    observer.observe(section);
  });

  // Also observe standalone .reveal elements outside sections
  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.closest('.reveal-section')) {
      observer.observe(el);
    }
  });
})();

// ============ BOTTOM NAVIGATION ============
(function initNav() {
  const navItems = document.querySelectorAll('.nav-bottom-item');
  const sections = [];
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) sections.push({ item, section, id: href.slice(1) });
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

  sections.forEach(({ section }) => observer.observe(section));
})();

// ============ EXPERIENCE FAN + DIAL ============
(function initExperience() {
  const fanStage = document.getElementById('fanStage');
  const dialYearLabel = document.getElementById('dialYearLabel');
  const dialPrev = document.getElementById('dialPrev');
  const dialNext = document.getElementById('dialNext');

  if (!fanStage) return;

  let activeIndex = 2; // Default to middle (新加坡工作)
  const N = EXPERIENCES.length;

  function cardPos(i) {
    const offset = i - activeIndex;
    const rotate = offset * 4;
    const tx = offset * 200 + (offset > 0 ? 120 : offset < 0 ? -120 : 0);
    const scale = i === activeIndex ? 1 : 0.85;
    const z = Math.abs(offset) * -120;
    const zIdx = N - Math.abs(offset);
    const opacity = Math.abs(offset) >= 4 ? 0 : 1;
    const cls = i === activeIndex ? 'active' : 'inactive';
    return { rotate, tx, scale, z, zIdx, opacity, cls };
  }

  function buildFanCards() {
    fanStage.innerHTML = EXPERIENCES.map((exp, i) => {
      const p = cardPos(i);
      return `
        <div class="fan-card-wrapper ${p.cls}" id="fanWrapper${i}"
             style="transform:translateX(${p.tx}px) rotate(${p.rotate}deg) scale(${p.scale}) translateZ(${p.z}px);z-index:${p.zIdx};opacity:${p.opacity}"
             data-index="${i}" onclick="window.handleFanClick(${i})">
          <div class="fan-flip-card" id="fanCard${i}">
            <div class="fan-flip-face fan-flip-front">
              <span class="flip-hint">↻ FLIP</span>
              <img src="${exp.image}" alt="${exp.title}" loading="lazy" />
              <div class="fan-flip-front-info">
                <h3>${exp.title}</h3>
                <span class="fan-subtitle">${exp.subtitle}</span>
              </div>
            </div>
            <div class="fan-flip-face fan-flip-back">
              <div class="era-back">${exp.era}</div>
              <h3>${exp.title}</h3>
              <p class="subtitle-back">${exp.subtitle}</p>
              <p class="description">${exp.description}</p>
              <span class="fan-location">${exp.location}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  function updateFanCards() {
    for (let i = 0; i < N; i++) {
      const el = document.getElementById('fanWrapper' + i);
      if (!el) continue;
      const p = cardPos(i);
      el.style.transform = `translateX(${p.tx}px) rotate(${p.rotate}deg) scale(${p.scale}) translateZ(${p.z}px)`;
      el.style.zIndex = p.zIdx;
      el.style.opacity = p.opacity;
      el.className = 'fan-card-wrapper ' + p.cls;
    }
  }

  const DIAL_YEARS = [2019, 2023, 2024, 2025, 2026];
  const DIAL_START = 2019, DIAL_END = 2026, DIAL_ARC = 180;

  function buildDial() {
    const numTicks = (DIAL_END - DIAL_START) * 4 + 1;
    let ticksHTML = '';
    for (let i = 0; i < numTicks; i++) {
      const a = -DIAL_ARC / 2 + (DIAL_ARC / (numTicks - 1)) * i;
      const main = i % 4 === 0;
      ticksHTML += `<div class="dial-tick" style="transform:rotate(${a}deg);height:${main?16:10}px;background:${main?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.04)'}"></div>`;
    }

    let markersHTML = '';
    DIAL_YEARS.forEach((y, i) => {
      const a = -DIAL_ARC / 2 + (DIAL_ARC / (DIAL_YEARS.length - 1)) * i;
      markersHTML += `
        <button class="dial-marker" id="dialMarker${y}"
                style="transform:rotate(${a}deg);"
                onclick="window.selectDialYear(${y})" aria-label="Year ${y}">
          <span class="dial-marker-year">${y}</span>
          <span class="dial-marker-bar ${i===0||i===DIAL_YEARS.length-1?'dial-marker-bar--sub':''}"></span>
        </button>`;
    });
  }

  function updateDial(year) {
    const idx = DIAL_YEARS.indexOf(year);
    DIAL_YEARS.forEach(y => {
      const el = document.getElementById('dialMarker' + y);
      if (!el) return;
      el.classList.toggle('dial-marker--active', y === year);
    });
  }

  function setActive(index) {
    const prev = activeIndex;
    activeIndex = Math.max(0, Math.min(N - 1, index));
    if (prev === activeIndex) return;
    const year = EXPERIENCES[activeIndex].year;
    dialYearLabel.textContent = year;
    updateFanCards();
    updateDial(year);
    dialPrev.disabled = activeIndex === 0;
    dialNext.disabled = activeIndex >= N - 1;
  }

  window.handleFanClick = function(index) {
    if (index === activeIndex) {
      const card = document.getElementById('fanCard' + index);
      if (card) card.classList.toggle('flipped');
    } else {
      setActive(index);
    }
  };

  window.selectDialYear = function(year) {
    const idx = EXPERIENCES.findIndex(e => e.year === year);
    if (idx >= 0) setActive(idx);
  };

  dialPrev.addEventListener('click', () => setActive(activeIndex - 1));
  dialNext.addEventListener('click', () => setActive(activeIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && document.activeElement === document.body) {
      setActive(activeIndex - 1);
    } else if (e.key === 'ArrowRight' && document.activeElement === document.body) {
      setActive(activeIndex + 1);
    }
  });

  buildFanCards();
  updateDial(EXPERIENCES[activeIndex].year);
  dialYearLabel.textContent = EXPERIENCES[activeIndex].year;
})();

// ============ PROJECT FLIP BOOK ============
function createFlipBook(bookId, prevId, nextId, dotsId, pageNumId, pagesData) {
  const book = document.getElementById(bookId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const dotsContainer = document.getElementById(dotsId);
  const pageNumEl = document.getElementById(pageNumId);

  if (!book || !prevBtn || !nextBtn) return;

  const totalPages = pagesData.length;
  let currentPage = 0;

  function buildPages() {
    book.innerHTML = pagesData.map((page, i) => {
      const zIndex = totalPages - i;
      const isFlipped = i < currentPage;
      let frontFace, backFace;

      // ---- COVER (front of book) ----
      if (page.type === 'cover') {
        frontFace = `<div class="flip-face flip-cover-f">
          <div class="flip-meta" style="color:rgba(255,255,255,0.7)">${page.meta || ''}</div>
          <div class="flip-title" style="color:#fff">${page.title || ''}</div>
          <div class="flip-desc" style="color:rgba(255,255,255,0.7)">${page.desc || ''}</div>
        </div>`;
        backFace = `<div class="flip-face flip-cover-b"></div>`;
      }

      // ---- COVER BACK (back of book) ----
      else if (page.type === 'cover-back') {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="display:flex;align-items:center;justify-content:center;text-align:center;">
          <div>
            <div class="flip-breath-line"></div>
            <div class="flip-breath-txt">Fin.</div>
          </div>
        </div>`;
        backFace = `<div class="flip-face flip-cover-b" style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
          <div class="flip-meta" style="color:rgba(255,255,255,0.5)">${page.subtitle || ''}</div>
          <div class="flip-title" style="color:#fff;font-size:clamp(20px,3vw,28px);">${page.title || ''}</div>
          <a href="${page.ctaLink || '#'}" class="flip-cta">${page.cta || ''}</a>
        </div>`;
      }

      // ---- BREATHER ----
      else if (page.type === 'breather') {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
          <div class="flip-breath-line"></div>
          <div class="flip-breath-txt">${page.text || ''}</div>
        </div>`;
        backFace = `<div class="flip-face flip-back flip-inner-page" style="display:flex;align-items:center;justify-content:center;background:#fafafa;"></div>`;
      }

      // ---- PROJECT page ----
      else if (page.type === 'project') {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="display:flex;flex-direction:column;padding:36px;background:#faf9f7;">
          <div class="flip-meta">${page.meta || ''}</div>
          <div class="flip-title">${page.title || ''}</div>
          <div class="flip-desc">${page.desc || ''}</div>
          <a href="${page.link || '#'}" class="flip-cta" style="color:var(--klein);border-color:var(--klein);margin-top:auto;"
             onmouseover="this.style.background='var(--klein)';this.style.color='#fff'"
             onmouseout="this.style.background='transparent';this.style.color='var(--klein)'">${page.linkText || ''}</a>
        </div>`;
        backFace = `<div class="flip-face flip-back flip-inner-page" style="display:flex;align-items:center;justify-content:center;text-align:center;background:#fafafa;">
          <div>
            <div class="flip-meta">${page.meta || ''}</div>
            <div class="flip-title" style="font-size:clamp(18px,2.5vw,24px);">${page.title || ''}</div>
          </div>
        </div>`;
      }

      // ---- PHOTO page ----
      else if (page.type === 'photo') {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="display:flex;flex-direction:column;justify-content:center;align-items:center;background:#faf9f7;padding:24px 28px;">
          <div class="flip-photo-cap-top">${page.label || ''}</div>
          <div class="flip-photo-img" style="background-image:url(${page.image})"></div>
          <div class="flip-photo-cap-bot">${page.caption || ''}</div>
        </div>`;
        backFace = `<div class="flip-face flip-back flip-inner-page" style="display:flex;align-items:center;justify-content:center;background:#fafafa;"></div>`;
      }

      // ---- FULL BLEED image ----
      else if (page.type === 'full-bleed') {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="background:#faf9f7;">
          <div class="flip-bleed-img" style="background-image:url(${page.image})"></div>
        </div>`;
        backFace = `<div class="flip-face flip-back flip-inner-page" style="background:#fafafa;"></div>`;
      }

      // ---- Default fallback ----
      else {
        frontFace = `<div class="flip-face flip-front flip-inner-page" style="display:flex;align-items:center;justify-content:center;background:#faf9f7;">
          <div class="flip-breath-txt">${page.text || page.title || ''}</div>
        </div>`;
        backFace = `<div class="flip-face flip-back flip-inner-page" style="background:#fafafa;"></div>`;
      }

      return `
        <div class="flip-page" style="z-index:${zIndex};transform:${isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'};" data-page="${i}">
          ${frontFace}
          ${backFace}
        </div>
      `;
    }).join('');
  }

  function updateUI() {
    buildPages();
    // Update dots
    if (dotsContainer) {
      dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) =>
        `<button class="flip-dot ${i === currentPage ? 'active' : ''}" onclick="window._flipTo_${bookId}(${i})"></button>`
      ).join('');
    }
    if (pageNumEl) pageNumEl.textContent = `${currentPage + 1} / ${totalPages}`;
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;
  }

  function flipTo(page) {
    currentPage = Math.max(0, Math.min(totalPages - 1, page));
    updateUI();
  }

  // Register global handler
  window[`_flipTo_${bookId}`] = flipTo;

  prevBtn.addEventListener('click', () => flipTo(currentPage - 1));
  nextBtn.addEventListener('click', () => flipTo(currentPage + 1));

  // Click on a page to flip
  book.addEventListener('click', (e) => {
    const pageEl = e.target.closest('.flip-page');
    if (!pageEl) return;
    const pageNum = parseInt(pageEl.dataset.page);
    if (pageNum === currentPage && currentPage < totalPages - 1) {
      flipTo(currentPage + 1);
    } else if (pageNum === currentPage - 1) {
      flipTo(currentPage - 1);
    }
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    const container = book.closest('.flip-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;
    if (e.key === 'ArrowRight') flipTo(currentPage + 1);
    else if (e.key === 'ArrowLeft') flipTo(currentPage - 1);
  });

  // Init
  updateUI();
}

// ============ STAGGERED PROJECT CARDS REVEAL ============
(function initStaggerReveal() {
  const container = document.getElementById('staggerProjects');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.stagger-item');
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 120);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(container);
})();

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  // Photo flip book
  createFlipBook('photoFlipBook', 'photoFlipPrev', 'photoFlipNext', 'photoFlipDots', 'photoFlipPageNum', PHOTO_PAGES);

  // XHS grid
  const grid = document.getElementById('xhsGrid');
  if (grid) {
    grid.innerHTML = XHS_POSTS.map(post => `
      <a href="${post.link || 'project-self-media.html'}" class="xhs-grid-card" target="_blank">
        <img src="${post.image}" alt="${post.title}" class="xhs-grid-cover" loading="lazy" />
        <div class="xhs-grid-label">
          <div class="xhs-grid-title">${post.title}</div>
          <div class="xhs-grid-meta">
            <span class="xhs-meta" title="点赞">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span>${post.likes}</span>
            </span>
            <span class="xhs-meta" title="评论">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>${post.comments}</span>
            </span>
            <span class="xhs-meta" title="收藏">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span>${post.collects}</span>
            </span>
            <span class="xhs-meta" title="观看">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>${post.views}</span>
            </span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // Ballpit canvas (subtle particle animation)
  initBallpit();
});

// ============ BALLPIT (Subtle Ambient Particles) ============
function initBallpit() {
  const canvas = document.getElementById('ballpitCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create particles
  const N = 30;
  for (let i = 0; i < N; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.05,
    });
  }

  // Mouse interaction
  let mouseX = -1000, mouseY = -1000;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Mouse repulsion
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        const force = (200 - dist) / 200 * 0.5;
        p.vx += (dx / dist) * force * 0.1;
        p.vy += (dy / dist) * force * 0.1;
        // Dampen
        p.vx *= 0.98;
        p.vy *= 0.98;
      }

      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,47,167,${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,47,167,${0.04 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}
