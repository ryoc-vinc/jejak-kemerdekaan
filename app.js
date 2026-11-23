/**
 * JEJAK KEMERDEKAAN: DIPLOMASI DAN REVOLUSI FISIK (1945–1949)
 * Skrip Kontrol Utama Antarmuka Interaktif
 * Fitur: Lenis Smooth Scroll, GSAP + ScrollTrigger, Animasi Judul Per Kata, Motion Card & Hover
 */

document.addEventListener('DOMContentLoaded', () => {
  /* =========================================================================
     1. INSIALISASI VARIABEL GLOBAL & STATE
     ========================================================================= */
  let activeTimelineIndex = 0;
  let currentGalleryFilter = 'all';
  let currentLightboxCatalog = [...PHOTOS_CATALOG];
  let currentLightboxIndex = 0;

  let currentQuizIndex = 0;
  let userQuizScore = 0;
  let quizAnswered = false;

  /* =========================================================================
     2. LENIS SMOOTH SCROLL & GSAP TICKER INTEGRATION
     ========================================================================= */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false
    });
    window.lenis = lenis;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Sinkronisasi Lenis dengan ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Ticker GSAP memicu Lenis RAF
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Intersepsi klik tautan jangkar internal agar menggunakan Lenis scrollTo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -70, duration: 1.2 });
            const mobileDrawer = document.getElementById('mobile-drawer');
            if (mobileDrawer) mobileDrawer.classList.remove('open');
          }
        }
      });
    });
  } else if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* =========================================================================
     3. ANIMASI JUDUL MUNCUL PER KATA (GSAP + SCROLLTRIGGER)
     ========================================================================= */
  function initWordByWordTitles() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const titlesToAnimate = document.querySelectorAll('.hero-main-title, .hero-subtitle, .section-title, .bla-subheading');

    titlesToAnimate.forEach(title => {
      if (title.getAttribute('data-split') === 'true') return;
      title.setAttribute('data-split', 'true');

      const originalText = title.textContent.trim();
      const words = originalText.split(/\s+/);

      title.innerHTML = words.map(word => {
        const safeWord = word.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<span class="word-wrap"><span class="word">${safeWord}</span></span>`;
      }).join(' ');

      const wordSpans = title.querySelectorAll('.word');

      gsap.fromTo(wordSpans, 
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.045,
          scrollTrigger: {
            trigger: title,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /* =========================================================================
     4. MOTION ANIMASI MASUK CARD (SCROLLTRIGGER)
     ========================================================================= */
  function initCardMotionAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // 1. Hero Showcase Box
    if (document.querySelector('.hero-showcase')) {
      gsap.fromTo('.hero-showcase',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.hero-showcase',
            start: 'top 85%'
          }
        }
      );
    }

    // 2. Timeline Stepper Bar & Container
    if (document.querySelector('.timeline-stepper-wrap')) {
      gsap.fromTo('.timeline-stepper-wrap',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.timeline-stepper-wrap',
            start: 'top 85%'
          }
        }
      );
    }
    if (document.querySelector('#event-display-container')) {
      gsap.fromTo('#event-display-container',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#event-display-container',
            start: 'top 85%'
          }
        }
      );
    }

    // 3. Bandung Lautan Api Article
    if (document.querySelector('.bla-article')) {
      gsap.fromTo('.bla-article',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.bla-article',
            start: 'top 85%'
          }
        }
      );
    }

    // 4. Comparison Table Wrap
    if (document.querySelector('.comparison-table-wrap')) {
      gsap.fromTo('.comparison-table-wrap',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.comparison-table-wrap',
            start: 'top 85%'
          }
        }
      );
    }

    // 5. Figure Profile Cards (Staggered Wave)
    if (document.querySelector('#figures-grid')) {
      gsap.fromTo('.figure-profile-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          stagger: 0.08,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#figures-grid',
            start: 'top 85%'
          }
        }
      );
    }

    // 6. Gallery Items (Staggered Wave)
    if (document.querySelector('#gallery-grid')) {
      gsap.fromTo('.gallery-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.045,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#gallery-grid',
            start: 'top 85%'
          }
        }
      );
    }

    // 7. Quiz Container
    if (document.querySelector('.quiz-container')) {
      gsap.fromTo('.quiz-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.quiz-container',
            start: 'top 85%'
          }
        }
      );
    }

    // 8. Bibliography Wrap
    if (document.querySelector('.biblio-section-wrap')) {
      gsap.fromTo('.biblio-section-wrap',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.biblio-section-wrap',
            start: 'top 85%'
          }
        }
      );
    }

    // 9. Creator Profile Card
    if (document.querySelector('.creator-profile-card')) {
      gsap.fromTo('.creator-profile-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.creator-profile-card',
            start: 'top 85%'
          }
        }
      );
    }
  }

  /* =========================================================================
     5. FUNGSI HELPER ARSIP FOTO & LIGHTBOX
     ========================================================================= */
  function getPhotoById(photoId) {
    return PHOTOS_CATALOG.find(p => p.id === photoId) || PHOTOS_CATALOG[0];
  }

  window.openLightboxById = function(photoId) {
    const idx = currentLightboxCatalog.findIndex(p => p.id === photoId);
    if (idx !== -1) {
      currentLightboxIndex = idx;
    } else {
      currentLightboxCatalog = [...PHOTOS_CATALOG];
      const gIdx = currentLightboxCatalog.findIndex(p => p.id === photoId);
      currentLightboxIndex = gIdx !== -1 ? gIdx : 0;
    }
    renderLightboxModal();
  };

  function renderLightboxModal() {
    const item = currentLightboxCatalog[currentLightboxIndex];
    if (!item) return;

    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');

    img.src = item.file;
    img.onerror = function() {
      this.onerror = null;
      this.src = item.thumb_url || item.full_url || '';
    };
    img.classList.remove('zoomed');

    document.getElementById('lightbox-title').textContent = item.title;
    document.getElementById('lightbox-desc').textContent = item.description;
    document.getElementById('lightbox-event').textContent = item.event;
    document.getElementById('lightbox-year').textContent = item.year + (item.date ? ' (' + item.date + ')' : '');
    document.getElementById('lightbox-credit').textContent = item.credit;
    document.getElementById('lightbox-license').textContent = item.license;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();

    // Animate modal content entry
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.lightbox-content-card',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }

  window.closeLightbox = function() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
  };

  window.nextLightbox = function() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxCatalog.length;
    renderLightboxModal();
  };

  window.prevLightbox = function() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxCatalog.length) % currentLightboxCatalog.length;
    renderLightboxModal();
  };

  /* =========================================================================
     6. KONTROL TIMELINE INTERAKTIF DIPLOMASI
     ========================================================================= */
  window.renderTimelineEvent = function(index, shouldScroll = false) {
    if (index < 0 || index >= DIPLOMACY_EVENTS.length) return;
    activeTimelineIndex = index;
    const item = DIPLOMACY_EVENTS[index];
    const photo = getPhotoById(item.photoId);
    const container = document.getElementById('event-display-container');

    // Update active state di nav bar stepper
    document.querySelectorAll('.timeline-nav-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    // Pusatkan tombol stepper aktif jika ada scroll horizontal (misal di tampilan HP/Tablet)
    const activeBtn = document.querySelectorAll('.timeline-nav-btn')[index];
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Pihak & Delegasi
    let delegationsHtml = '';
    if (item.delegations) {
      delegationsHtml = '<div class="delegates-box">';
      delegationsHtml += '<h5>Pihak & Delegasi yang Terlibat:</h5>';
      if (item.delegations.indonesia) delegationsHtml += '<p><strong>Indonesia:</strong> ' + item.delegations.indonesia + '</p>';
      if (item.delegations.belanda) delegationsHtml += '<p><strong>Belanda:</strong> ' + item.delegations.belanda + '</p>';
      if (item.delegations.penengah) delegationsHtml += '<p><strong>Penengah / Mediator:</strong> ' + item.delegations.penengah + '</p>';
      if (item.delegations.tokohKunci) delegationsHtml += '<p><strong>Pimpinan PDRI:</strong> ' + item.delegations.tokohKunci + '</p>';
      if (item.delegations.bfo) delegationsHtml += '<p><strong>Delegasi BFO:</strong> ' + item.delegations.bfo + '</p>';
      if (item.delegations.unci) delegationsHtml += '<p><strong>Komisi PBB (UNCI):</strong> ' + item.delegations.unci + '</p>';
      delegationsHtml += '</div>';
    }

    // Poin-poin kesepakatan
    let keyPointsHtml = '';
    if (item.keyPoints && item.keyPoints.length) {
      keyPointsHtml = '<h4>Pokok-Pokok Isi Perjanjian / Keputusan</h4><ul>';
      item.keyPoints.forEach(pt => {
        keyPointsHtml += '<li>' + pt + '</li>';
      });
      keyPointsHtml += '</ul>';
    }

    // Navigasi Sebelumnya / Selanjutnya (Otomatis scroll ke atas dengan parameter true)
    const prevBtnHtml = index > 0 
      ? '<button class="btn btn-secondary" onclick="renderTimelineEvent(' + (index - 1) + ', true)">← Peristiwa Sebelumnya (' + (index) + ')</button>'
      : '<span style="font-size:0.85rem; color:var(--text-muted);">Awal Linimasa</span>';

    const nextBtnHtml = index < DIPLOMACY_EVENTS.length - 1
      ? '<button class="btn btn-primary" onclick="renderTimelineEvent(' + (index + 1) + ', true)">Peristiwa Selanjutnya (' + (index + 2) + ') →</button>'
      : '<span style="font-size:0.85rem; color:var(--accent-burgundy); font-weight:700;">Puncak Diplomasi KMB Selesai</span>';

    const cardHtml = `
      <div class="event-display-card">
        <div class="event-card-header">
          <div class="event-header-info">
            <span class="archive-badge burgundy">Peristiwa ${index + 1} dari 8</span>
            <h3>${item.title}</h3>
            <div class="event-meta">
              <span><strong>Waktu:</strong> ${item.period}</span>
              <span><strong>Lokasi:</strong> ${item.location}</span>
            </div>
          </div>
          <div>
            <button class="btn btn-secondary" onclick="openLightboxById('${photo.id}')">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Perbesar Foto Arsip
            </button>
          </div>
        </div>

        <div class="event-card-body">
          <div class="event-col-left">
            <div class="event-photo-box" onclick="openLightboxById('${photo.id}')">
              <img src="${photo.file}" 
                   onerror="this.onerror=null; this.src='${photo.thumb_url || photo.full_url}';" 
                   alt="${photo.title}" 
                   loading="lazy">
              <div class="event-photo-meta">
                <strong>${photo.title}</strong><br>
                <span>Sumber: ${photo.credit} (${photo.year})</span>
              </div>
            </div>

            ${delegationsHtml}

            <div class="impact-callout">
              <h5>Dampak & Hasil Perjuangan:</h5>
              <p>${item.impact}</p>
            </div>
          </div>

          <div class="event-details-text">
            <h4>Ringkasan Historis</h4>
            <p>${item.summary}</p>

            <h4>Latar Belakang & Penyebab</h4>
            <p>${item.background}</p>

            ${keyPointsHtml}

            <h4>Reaksi & Dinamika Politik</h4>
            <p>${item.reactions}</p>

            <div class="pros-cons-grid">
              <div class="pros-box">
                <strong>Keuntungan bagi RI:</strong>
                <p>${item.advantages}</p>
              </div>
              <div class="cons-box">
                <strong>Kerugian / Risiko:</strong>
                <p>${item.disadvantages}</p>
              </div>
            </div>

            <h4>Perbedaan Penafsiran (Interpretation Gap)</h4>
            <p>${item.interpretationDiff}</p>

            <div class="event-citation-footer">
              <strong>Rujukan Arsip & Rujukan Akademis:</strong> ${item.sources}
            </div>
          </div>
        </div>

        <div class="event-card-nav-footer">
          ${prevBtnHtml}
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">Peristiwa ${index + 1} / 8</span>
          ${nextBtnHtml}
        </div>
      </div>
    `;

    container.innerHTML = cardHtml;

    // Scroll otomatis ke bagian atas kartu linimasa (stepper bar) jika navigasi diklik
    const stepperEl = document.querySelector('.timeline-stepper-wrap');
    if (stepperEl) {
      const rect = stepperEl.getBoundingClientRect();
      if (shouldScroll || rect.top < 60) {
        if (window.lenis) {
          window.lenis.scrollTo(stepperEl, { offset: -75, duration: 0.95 });
        } else {
          const top = stepperEl.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }

    // Smooth Motion Animation on Event Switch
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('#event-display-container .event-display-card',
        { opacity: 0, y: 22 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.45, 
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          onComplete: () => {
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
          }
        }
      );
    }
  };

  /* =========================================================================
     7. RENDER PROFIL TOKOH SEJARAH
     ========================================================================= */
  function renderFiguresGrid() {
    const grid = document.getElementById('figures-grid');
    if (!grid) return;

    grid.innerHTML = FIGURES_DATA.map(fig => {
      const photo = getPhotoById(fig.photoId);
      return `
        <div class="figure-profile-card">
          <div class="figure-img-container" onclick="openLightboxById('${photo.id}')">
            <img src="${photo.file}" 
                 onerror="this.onerror=null; this.src='${photo.thumb_url || photo.full_url}';" 
                 alt="${fig.name}" 
                 loading="lazy">
            <span class="figure-role-tag">${fig.role}</span>
          </div>
          <div class="figure-info">
            <h4>${fig.name}</h4>
            <div class="figure-years">${fig.years}</div>
            <p><strong>Biografi:</strong> ${fig.bio}</p>
            <p><strong>Peran & Kontribusi:</strong> ${fig.contribution}</p>
            <div class="figure-events">
              <strong>Keterkaitan Peristiwa:</strong> ${fig.events}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* =========================================================================
     8. RENDER GALERI ARSIP & FILTER
     ========================================================================= */
  window.filterGallery = function(filterCategory) {
    currentGalleryFilter = filterCategory || 'all';
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === currentGalleryFilter);
    });

    const filtered = currentGalleryFilter === 'all'
      ? PHOTOS_CATALOG
      : PHOTOS_CATALOG.filter(p => p.category === currentGalleryFilter);

    currentLightboxCatalog = filtered;

    grid.innerHTML = filtered.map(item => `
      <div class="gallery-item" onclick="openLightboxById('${item.id}')">
        <div class="gallery-thumb-wrap">
          <img src="${item.file}" 
               onerror="this.onerror=null; this.src='${item.thumb_url || item.full_url}';" 
               alt="${item.title}" 
               loading="lazy">
          <span class="gallery-badge-cat">${item.category}</span>
        </div>
        <div class="gallery-caption">
          <h5>${item.title}</h5>
          <div class="gallery-meta">
            <span>${item.event}</span>
            <span>${item.year}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Smooth Motion Animation on Gallery Filter
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.gallery-item',
        { opacity: 0, y: 18, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.35, 
          ease: 'power2.out', 
          stagger: 0.03,
          clearProps: 'transform,opacity',
          onComplete: () => {
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
          }
        }
      );
    }
  };

  /* =========================================================================
     9. MESIN KUIS SEJARAH INTERAKTIF
     ========================================================================= */
  function loadQuizQuestion(index) {
    currentQuizIndex = index;
    quizAnswered = false;
    const q = QUIZ_QUESTIONS[index];

    document.getElementById('quiz-progress-badge').textContent = `Soal ${index + 1} dari ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quiz-score-badge').textContent = `Skor: ${userQuizScore} Poin`;
    document.getElementById('quiz-question-text').textContent = q.question;

    const optContainer = document.getElementById('quiz-options-list');
    const letters = ['A', 'B', 'C', 'D'];
    optContainer.innerHTML = q.options.map((opt, i) => `
      <button class="quiz-option-btn" onclick="selectQuizAnswer(${i})">
        <span class="opt-badge">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    const feedback = document.getElementById('quiz-feedback-box');
    feedback.className = 'quiz-feedback-box';
    feedback.style.display = 'none';

    document.getElementById('btn-next-quiz').style.display = 'none';

    // Motion animation on question load
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.quiz-option-btn',
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.04, clearProps: 'transform,opacity' }
      );
    }
  }

  window.selectQuizAnswer = function(selectedIndex) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = QUIZ_QUESTIONS[currentQuizIndex];
    const isCorrect = selectedIndex === q.answer;
    const buttons = document.querySelectorAll('.quiz-option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('wrong');
      }
    });

    const feedback = document.getElementById('quiz-feedback-box');
    const fbTitle = document.getElementById('quiz-feedback-title');
    const fbText = document.getElementById('quiz-feedback-text');

    if (isCorrect) {
      userQuizScore += Math.round(100 / QUIZ_QUESTIONS.length);
      feedback.className = 'quiz-feedback-box show correct-fb';
      feedback.style.display = 'block';
      fbTitle.textContent = '✓ Jawaban Anda Benar!';
    } else {
      feedback.className = 'quiz-feedback-box show wrong-fb';
      feedback.style.display = 'block';
      fbTitle.textContent = '✗ Jawaban Belum Tepat';
    }

    fbText.innerHTML = `<strong>Pembahasan:</strong> ${q.explanation}`;
    document.getElementById('quiz-score-badge').textContent = `Skor: ${userQuizScore} Poin`;

    const nextBtn = document.getElementById('btn-next-quiz');
    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      nextBtn.textContent = 'Soal Berikutnya →';
    } else {
      nextBtn.textContent = 'Lihat Evaluasi Akhir';
    }
    nextBtn.style.display = 'inline-flex';

    // Feedback motion reveal
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(feedback,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  window.advanceQuiz = function() {
    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      loadQuizQuestion(currentQuizIndex + 1);
    } else {
      finishQuiz();
    }
  };

  function finishQuiz() {
    document.getElementById('quiz-active-card').style.display = 'none';
    document.getElementById('btn-next-quiz').style.display = 'none';
    const summary = document.getElementById('quiz-summary-card');
    summary.classList.add('show');

    const finalScore = Math.min(100, userQuizScore);
    document.getElementById('quiz-final-score-val').textContent = finalScore;

    let evalTitle = '';
    let evalText = '';
    if (finalScore >= 85) {
      evalTitle = 'Predikat: Sejarawan Utama Revolusi';
      evalText = 'Luar biasa! Anda menguasai dialektika antara jalur diplomasi dan revolusi fisik secara komprehensif, memahami kronologi Linggarjati hingga KMB, serta heroisme Bandung Lautan Api.';
    } else if (finalScore >= 65) {
      evalTitle = 'Predikat: Peneliti Handal Sejarah';
      evalText = 'Bagus sekali! Anda memiliki pemahaman yang solid terhadap peristiwa-peristiwa penting 1945–1949 dalam mempertahankan kemerdekaan Indonesia.';
    } else {
      evalTitle = 'Predikat: Pemerhati Sejarah Pemula';
      evalText = 'Cukup baik. Silakan tinjau kembali linimasa Diplomasi dan bab Bandung Lautan Api untuk memperdalam pemahaman atas proses pengakuan kedaulatan bangsa.';
    }

    document.getElementById('quiz-eval-title').textContent = evalTitle;
    document.getElementById('quiz-eval-desc').textContent = evalText;

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(summary,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }

  window.restartQuiz = function() {
    userQuizScore = 0;
    currentQuizIndex = 0;
    document.getElementById('quiz-active-card').style.display = 'block';
    document.getElementById('quiz-summary-card').classList.remove('show');
    loadQuizQuestion(0);
  };

  /* =========================================================================
     10. MESIN PENCARIAN CEPAT (QUICK SEARCH MODAL)
     ========================================================================= */
  window.openSearchModal = function() {
    const modal = document.getElementById('search-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
    const input = document.getElementById('search-input');
    input.value = '';
    input.focus();
    renderSearchResults('');

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.search-dialog',
        { opacity: 0, y: -20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  window.closeSearchModal = function() {
    document.getElementById('search-modal').classList.remove('active');
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
  };

  window.handleSearchInput = function(e) {
    renderSearchResults(e.target.value);
  };

  function renderSearchResults(query) {
    const list = document.getElementById('search-results-list');
    query = (query || '').toLowerCase().trim();

    if (!query) {
      list.innerHTML = '<div style="padding: 1.5rem; color: var(--text-muted); font-size: 0.95rem;">Ketik kata kunci untuk mencari di seluruh materi (contoh: <em>Linggarjati, Toha, Renville, Sjahrir, KMB, Tegallega, PDRI, Bidar Alam</em>)...</div>';
      return;
    }

    const results = [];

    // Cari di Peristiwa Diplomasi
    DIPLOMACY_EVENTS.forEach((e, idx) => {
      const textToSearch = (e.title + ' ' + e.summary + ' ' + e.background + ' ' + e.impact + ' ' + e.reactions).toLowerCase();
      if (textToSearch.includes(query)) {
        results.push({
          type: 'Diplomasi',
          title: e.title,
          snippet: e.summary,
          action: () => {
            closeSearchModal();
            if (window.lenis) {
              const target = document.querySelector('#diplomasi');
              if (target) window.lenis.scrollTo(target, { offset: -70, duration: 1.2 });
            } else {
              window.location.hash = '#diplomasi';
            }
            renderTimelineEvent(idx);
          }
        });
      }
    });

    // Cari di Bandung Lautan Api
    const blaSections = [
      { title: 'Kondisi Bandung Pasca-Kemerdekaan & Sekutu', anchor: '#bla-latar-belakang', text: 'Kondisi Bandung setelah proklamasi, kedatangan Sekutu Brigade 37 MacDonald dan provokasi NICA.' },
      { title: 'Kronologi Konflik & Ultimatum Sekutu', anchor: '#bla-kronologi', text: 'Pertempuran Oktober 1945, ultimatum pertama, banjir Sungai Cikapundung, ultimatum kedua Hawthorn.' },
      { title: 'Musyawarah Regentsweg & Keputusan Pembumihangusan', anchor: '#bla-musyawarah', text: 'Dilema Jakarta vs Yogyakarta, Kolonel A.H. Nasution, Mayor Rukana lautan api, evakuasi 200.000 warga.' },
      { title: 'Malam Pembumihangusan 23 Maret 1946', anchor: '#bla-pembumihangusan', text: 'Pembakaran serentak gedung-gedung vital, pengungsian rakyat ke Ciparay dan Majalaya.' },
      { title: 'Aksi Martir Dayeuhkolot (Mohammad Toha & Ramdan)', anchor: '#bla-dayeuhkolot', text: 'Ledakan gudang mesiu Sekutu di Dayeuhkolot oleh dinamit Mohammad Toha dan Mohammad Ramdan.' },
      { title: 'Dampak Strategis & Doktrin Perang Gerilya', anchor: '#bla-dampak', text: 'Kemenangan hampa Sekutu, penyelamatan TRI, doktrin pertahanan rakyat semesta Nasution.' },
      { title: 'Lagu Perjuangan Halo-Halo Bandung', anchor: '#bla-lagu', text: 'Historiografi lagu karya Ismail Marzuki dari lagu rindu menjadi mars perjuangan merebut kembali kota.' },
      { title: 'Monumen Bandung Lautan Api Tegallega', anchor: '#bla-monumen', text: 'Monumen setinggi 45 meter dengan 9 lidah api tembaga karya pematung Sunaryo diresmikan 1984.' }
    ];

    blaSections.forEach(s => {
      if ((s.title + ' ' + s.text).toLowerCase().includes(query)) {
        results.push({
          type: 'Bandung Lautan Api',
          title: s.title,
          snippet: s.text,
          action: () => {
            closeSearchModal();
            if (window.lenis) {
              const target = document.querySelector(s.anchor);
              if (target) window.lenis.scrollTo(target, { offset: -70, duration: 1.2 });
            } else {
              window.location.hash = s.anchor;
            }
          }
        });
      }
    });

    // Cari di Tokoh Sejarah
    FIGURES_DATA.forEach(f => {
      const matchFig = (f.name + ' ' + f.role + ' ' + f.bio + ' ' + f.contribution).toLowerCase();
      if (matchFig.includes(query)) {
        results.push({
          type: 'Tokoh Bangsa',
          title: f.name,
          snippet: `${f.role}: ${f.contribution.substring(0, 110)}...`,
          action: () => {
            closeSearchModal();
            if (window.lenis) {
              const target = document.querySelector('#tokoh');
              if (target) window.lenis.scrollTo(target, { offset: -70, duration: 1.2 });
            } else {
              window.location.hash = '#tokoh';
            }
          }
        });
      }
    });

    // Cari di Profil Pembuat
    if ('profil pembuat tentang pengembang inisiator kontak developer author creator'.includes(query)) {
      results.push({
        type: 'Profil Pembuat',
        title: 'Profil Pengembang & Peneliti Platform',
        snippet: 'Informasi inisiator, prakata riset sejarah, dedikasi akademis, dan kontak pengembang.',
        action: () => {
          closeSearchModal();
          if (window.lenis) {
            const target = document.querySelector('#profil-pembuat');
            if (target) window.lenis.scrollTo(target, { offset: -70, duration: 1.2 });
          } else {
            window.location.hash = '#profil-pembuat';
          }
        }
      });
    }

    if (results.length === 0) {
      list.innerHTML = `<div style="padding: 1.5rem; color: #b71c1c;">Tidak ditemukan hasil untuk kata kunci <em>"${query}"</em>. Silakan coba istilah lain.</div>`;
    } else {
      list.innerHTML = results.map((r, i) => `
        <div class="search-result-item" id="search-item-${i}">
          <span class="archive-badge burgundy" style="font-size: 0.68rem; margin-bottom: 0.25rem;">${r.type}</span>
          <h5>${r.title}</h5>
          <p>${r.snippet}</p>
        </div>
      `).join('');

      results.forEach((r, i) => {
        document.getElementById(`search-item-${i}`).addEventListener('click', r.action);
      });
    }
  }

  /* =========================================================================
     11. READING PROGRESS, SCROLLSPY, DAN BACK TO TOP
     ========================================================================= */
  const progressBar = document.getElementById('reading-progress');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Scrollspy untuk navbar
    const sections = ['beranda', 'pengantar', 'diplomasi', 'bandung-lautan-api', 'komparasi', 'tokoh', 'galeri', 'kuis', 'referensi', 'profil-pembuat'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          document.querySelectorAll('.nav-link').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.4 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  /* =========================================================================
     12. MOBILE MENU HAMBURGER
     ========================================================================= */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-drawer a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  /* Keyboard shortcut untuk Search Modal & Lightbox */
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }

    const lb = document.getElementById('lightbox-modal');
    if (lb && lb.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }

    const searchModal = document.getElementById('search-modal');
    if (searchModal && searchModal.classList.contains('active')) {
      if (e.key === 'Escape') closeSearchModal();
    }
  });

  const lbImg = document.getElementById('lightbox-img');
  if (lbImg) {
    lbImg.addEventListener('click', () => {
      lbImg.classList.toggle('zoomed');
    });
  }

  /* =========================================================================
     13. EKSEKUSI RENDER AWAL & INISIALISASI ANIMASI
     ========================================================================= */
  renderTimelineEvent(0);
  renderFiguresGrid();
  filterGallery('all');
  loadQuizQuestion(0);

  // Inisialisasi efek animasi judul per kata & motion cards
  initWordByWordTitles();
  initCardMotionAnimations();

  // Pastikan ScrollTrigger menghitung ulang posisi setelah seluruh gambar & aset dimuat
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
});
