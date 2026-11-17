'use strict';
(() => {
  const projects = [
    {
      id: 'vehicle', title: '차량 관리 프로그램', period: '2026.05 — 2026.08 · 1인 단독 개발',
      summary: '차량 상태, 예약, 운행과 반납 기록을 한곳에서 관리하는 웹 서비스입니다.',
      purpose: '차량과 예약 정보를 관리하고 운행 이력을 확인할 수 있도록 기획부터 화면과 서버까지 혼자 구현했습니다. 완성 후 선임 개발자에게 코드 리뷰를 받았습니다.',
      features: ['차량 상태와 예약 정보 관리', '차량 운행 및 반납 정보 기록', '통계와 운행 기록 관리'],
      backend: 'Java 17, Spring Boot 3.4.5 기반으로 REST API와 도메인 데이터를 구성하고 Spring Data JPA / Hibernate로 MariaDB 데이터를 처리했습니다. Gradle과 Lombok을 사용했습니다.',
      frontend: 'Vue.js 3와 JavaScript로 화면을 구성하고 Axios로 백엔드와 연결했습니다. Vue Router로 화면 이동을 구성했으며 Vite로 개발 환경을 구성했습니다.',
      focus: '차량·예약·운행 상태가 화면과 데이터베이스에서 일관되게 이어지도록 기능 흐름을 나누어 구현했습니다. Docker와 Docker Compose를 개발 환경 구성에 사용했습니다.',
      tech: ['Java 17','Spring Boot 3.4.5','Vue.js 3','JavaScript','MariaDB','Spring Data JPA','Hibernate','Gradle','Vite','Axios','Vue Router','Lombok','Docker','Docker Compose'],
      screenshots: [
        { src: 'images/projects/vehicle-overview.png', alt: '차량 관리 프로그램 차량 목록 화면', caption: '차량 현황' },
        { src: 'images/projects/vehicle-reservations.png', alt: '차량 관리 프로그램 예약 현황 화면', caption: '예약 현황' },
        { src: 'images/projects/vehicle-statistics.png', alt: '차량 관리 프로그램 운행 통계 화면', caption: '운행 통계' }
      ],
      learning: '요구사항 정리부터 프론트엔드·백엔드 연결, 데이터 관리와 검토까지 서비스 전체를 혼자 완성하는 경험을 했습니다. AI를 참고하여 개발했습니다.'
    },
    {
      id: 'practice', title: '악기 연습 관리 프로그램', period: '2026.09 — 2026.10 · 1인 단독 개발',
      summary: '곡별 목표와 연습 시간을 기록하고, 기간별 통계를 확인하는 웹 서비스입니다.',
      purpose: '연습 과정을 기록하고 목표 달성 상황을 돌아볼 수 있도록 전체 기능을 혼자 기획하고 구현했습니다.',
      features: ['곡 등록 및 곡별 연습 목표·숙련도 관리', '타이머 기반 연습 시간 기록과 목표 달성량·달성률 확인', '곡별 통계와 주간·기간별 연습 통계 시각화'],
      backend: 'Java 17과 프로젝트 Gradle 설정에 명시된 Spring Boot를 사용했습니다. Spring JDBC / JdbcTemplate으로 MySQL 데이터를 조회·저장했습니다.',
      frontend: 'Vue.js 3, JavaScript, Vue Router로 화면을 구성하고 Axios로 서버와 통신했습니다. Chart.js / vue-chartjs로 연습 통계를 시각화했으며 Vite를 사용했습니다.',
      focus: '타이머로 쌓인 연습 기록을 곡과 기간 기준으로 묶어 목표 대비 진행량과 통계 화면에 연결했습니다. Docker와 Docker Compose를 사용했습니다.',
      tech: ['Java 17','Spring Boot','Vue.js 3','JavaScript','MySQL','Spring JDBC','JdbcTemplate','Axios','Vue Router','Chart.js','vue-chartjs','Gradle','Vite','Docker','Docker Compose'],
      screenshots: [
        { src: 'images/projects/practice-overview.png', alt: '악기 연습 관리 프로그램 홈 화면', caption: '연습 현황' },
        { src: 'images/projects/practice-session.png', alt: '악기 연습 관리 프로그램 타이머 화면', caption: '타이머 연습' },
        { src: 'images/projects/practice-statistics.png', alt: '악기 연습 관리 프로그램 통계 화면', caption: '연습 통계' }
      ],
      learning: '기록 데이터의 저장 구조와 집계 기준이 통계 화면에 어떻게 반영되는지 다루며 전체 웹 서비스 흐름을 익혔습니다. AI를 참고하여 개발했습니다.'
    },
    {
      id: 'meeting', title: '회의실 예약 프로그램', period: '2026.04 — 2026.05 · 2인 공동 개발',
      summary: '동료 한 명과 함께 진행했으며 예약 기능 로직과 프론트엔드 개발을 담당했습니다.',
      purpose: '2인 공동 프로젝트에서 예약 기능의 로직과 사용자 화면 구현을 맡았습니다.',
      features: ['회의실 예약 기능 로직 개발', '프론트엔드 개발'],
      backend: '담당 범위에서 확인 가능한 내용은 예약 기능 로직 개발입니다. 저장소와 기술 자료가 제공되지 않아 세부 구조 및 기술 스택은 기재하지 않았습니다.',
      frontend: '공동 프로젝트의 프론트엔드 개발을 담당했습니다. 확인되지 않은 화면·기술 세부사항은 추가하지 않았습니다.',
      focus: '동료 한 명과 역할을 나누어 개발했으며 예약 로직과 화면 구현을 담당했습니다.',
      tech: [],
      learning: '공동 개발에서 맡은 기능을 구현하고 다른 개발 영역과 연결하는 경험을 했습니다.'
    }
  ];
  const items = [...document.querySelectorAll('.coverflow-item')];
  const container = document.querySelector('.coverflow-container');
  const dotsContainer = document.getElementById('dots');
  const title = document.getElementById('current-title');
  const summary = document.getElementById('current-description');
  const period = document.getElementById('project-period');
  const details = document.getElementById('projectDetails');
  let currentIndex = 0;
  let touchStartX = null;

  if (!container || items.length !== projects.length) return;
  const dots = projects.map((project, index) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.className = 'dot'; dot.setAttribute('aria-label', `${project.title} 선택`);
    dot.addEventListener('click', () => select(index)); dotsContainer.append(dot); return dot;
  });
  const escapeHtml = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderDetails(project) {
    const list = values => values.map(value => `<li>${escapeHtml(value)}</li>`).join('');
    const tech = project.tech.length ? `<div class="tech-list">${project.tech.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>` : '<p>확인된 기술 스택 자료 없음</p>';
    const screenshots = project.screenshots?.length
      ? `<article class="detail-card full"><h4>프로젝트 화면</h4><p class="gallery-hint">화면을 선택하면 크게 볼 수 있습니다.</p><div class="screenshot-gallery">${project.screenshots.map((shot, index) => `<figure class="screenshot-card"><button class="screenshot-open" type="button" data-image-index="${index}" aria-label="${escapeHtml(shot.caption)} 화면 크게 보기"><img src="${escapeHtml(shot.src)}" alt="${escapeHtml(shot.alt)}" loading="lazy"><span class="screenshot-zoom" aria-hidden="true">↗</span></button><figcaption>${escapeHtml(shot.caption)}</figcaption></figure>`).join('')}</div></article>`
      : `<article class="detail-card full"><h4>담당 역할</h4><div class="contribution-roles"><div><span>01</span><strong>예약 기능 로직</strong><p>예약 동작에 필요한 기능 로직을 개발했습니다.</p></div><div><span>02</span><strong>프론트엔드</strong><p>사용자 화면 개발을 담당했습니다.</p></div></div><p class="material-note">2인 공동 개발 프로젝트입니다. 소스와 화면 자료가 없어 확인된 역할만 소개합니다.</p></article>`;
    details.innerHTML = `<article class="detail-card"><h4>프로젝트 소개 · 목적</h4><p>${escapeHtml(project.purpose)}</p></article><article class="detail-card"><h4>주요 기능</h4><ul>${list(project.features)}</ul></article><article class="detail-card"><h4>백엔드 구현</h4><p>${escapeHtml(project.backend)}</p></article><article class="detail-card"><h4>프론트엔드 구현</h4><p>${escapeHtml(project.frontend)}</p></article><article class="detail-card"><h4>구현 과정에서 다룬 부분</h4><p>${escapeHtml(project.focus)}</p></article><article class="detail-card"><h4>개발을 통해 얻은 경험</h4><p>${escapeHtml(project.learning)}</p></article><article class="detail-card full"><h4>사용 기술 · 개발 형태</h4>${tech}<p style="margin-top:12px">${escapeHtml(project.period)}</p></article>${screenshots}`;
  }
  function select(index) {
    currentIndex = (index + projects.length) % projects.length;
    items.forEach((item, i) => {
      let offset = i - currentIndex;
      if (offset > projects.length / 2) offset -= projects.length;
      if (offset < -projects.length / 2) offset += projects.length;
      const distance = Math.abs(offset);
      item.style.transform = `translateX(${offset * 235}px) translateZ(${-distance * 115}px) rotateY(${-Math.sign(offset) * Math.min(distance * 32,32)}deg) scale(${1-distance*.12})`;
      item.style.opacity = distance > 1 ? '.22' : String(1 - distance * .22);
      item.style.zIndex = String(10-distance);
      item.classList.toggle('active', i === currentIndex);
      item.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
      item.setAttribute('tabindex', i === currentIndex ? '0' : '-1');
    });
    dots.forEach((dot, i) => {dot.classList.toggle('active', i === currentIndex); dot.setAttribute('aria-pressed', i === currentIndex ? 'true' : 'false');});
    const project = projects[currentIndex]; title.textContent = project.title; summary.textContent = project.summary; period.textContent = project.period;
    renderDetails(project);
  }
  function move(step) { select(currentIndex + step); }
  document.querySelector('.nav-button.prev').addEventListener('click', () => move(-1));
  document.querySelector('.nav-button.next').addEventListener('click', () => move(1));
  items.forEach((item, index) => item.addEventListener('click', () => select(index)));
  container.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {event.preventDefault(); move(-1);}
    if (event.key === 'ArrowRight') {event.preventDefault(); move(1);}
    if (event.key === 'Home') {event.preventDefault(); select(0);}
    if (event.key === 'End') {event.preventDefault(); select(projects.length - 1);}
  });
  container.addEventListener('touchstart', event => {touchStartX = event.changedTouches[0].clientX;}, {passive:true});
  container.addEventListener('touchend', event => {
    if (touchStartX === null) return;
    const diff = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 45) move(diff < 0 ? 1 : -1);
    touchStartX = null;
  }, {passive:true});
  document.getElementById('detailsButton').addEventListener('click', () => {
    const open = details.classList.toggle('is-open');
    details.hidden = !open;
    document.getElementById('detailsButton').innerHTML = open ? '상세 내용 접기 <span aria-hidden="true">↑</span>' : '상세 내용 보기 <span aria-hidden="true">↗</span>';
    if (open) details.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
  });
  details.hidden = true;

  const imageDialog = document.getElementById('imageDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogCaption = document.getElementById('dialogCaption');
  details.addEventListener('click', event => {
    const button = event.target.closest('.screenshot-open');
    if (!button || !imageDialog) return;
    const shot = projects[currentIndex].screenshots?.[Number(button.dataset.imageIndex)];
    if (!shot) return;
    dialogImage.src = shot.src;
    dialogImage.alt = shot.alt;
    dialogCaption.textContent = shot.caption;
    imageDialog.showModal();
  });
  imageDialog?.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
  imageDialog?.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });

  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');
  function closeMenu() {menuToggle.classList.remove('active'); mainMenu.classList.remove('active'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','메뉴 열기');}
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.classList.toggle('active', open); mainMenu.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  mainMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {if (!mainMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();});
  const header = document.getElementById('header');
  const topButton = document.getElementById('scrollToTop');
  const links = [...document.querySelectorAll('.menu-item')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  function updateScrollState() {
    header.classList.toggle('scrolled', window.scrollY > 20);
    topButton.classList.toggle('visible', window.scrollY > 500);
    let active = sections[0];
    sections.forEach(section => {if (section.getBoundingClientRect().top < 150) active = section;});
    links.forEach(link => link.classList.toggle('active', link.hash === `#${active.id}`));
  }
  window.addEventListener('scroll', updateScrollState, {passive:true});
  topButton.addEventListener('click', () => window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  select(0); updateScrollState();
})();
