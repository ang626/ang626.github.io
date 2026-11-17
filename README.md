# 이태환 | 백엔드 개발자 포트폴리오

GitHub Pages에서 제공하는 정적 개인 포트폴리오입니다. Java와 Spring Boot를 사용한 개인 프로젝트와 공동 프로젝트의 구현 범위, 역할, 실제 사용 기술을 소개합니다.

## 주요 구성

- 홈: 개발 분야와 주요 기술, 프로젝트 섹션으로 이동하는 링크
- About Me: 개발 방향과 프로젝트에서 사용한 기술을 구분해 소개
- Projects: 3D Coverflow 방식으로 프로젝트를 선택하고 구현 상세를 펼쳐 확인
- Experience: 프로젝트 기간, 개발 인원, 맡은 역할
- Contact: 이메일과 GitHub 링크

## 사용 기술

- 웹 페이지: HTML5, CSS3, Vanilla JavaScript
- 포트폴리오 인터랙션: CSS 3D transforms, DOM 이벤트, 반응형 레이아웃
- 배포: GitHub Pages 정적 호스팅
- 개인 프로젝트 기술: 각 프로젝트 상세 화면에 실제 사용 기준으로 구분해 표기

이 저장소에는 포트폴리오 사이트만 포함됩니다. 차량 관리 및 악기 연습 프로그램의 소스 코드는 복사하지 않았습니다. 현재 작업 사본에는 프로젝트 원본 저장소 및 이력서 자료가 없어, 학력·교육·수상과 회의실 예약 프로젝트의 기술 세부사항은 기재하지 않았습니다.

## 로컬에서 확인하기

정적 사이트라 빌드나 백엔드 서버가 필요하지 않습니다.

1. 저장소 파일을 내려받습니다.
2. `index.html`을 브라우저에서 엽니다.
3. 상대 경로와 GitHub Pages 환경을 로컬 HTTP 서버로 확인하고 싶다면 Python이 설치된 환경에서 아래 명령을 실행합니다.

```bash
python -m http.server 8000
```

그 다음 `http://localhost:8000`으로 접속합니다. 포트폴리오 자체는 정적 페이지이므로 로컬 서버는 선택 사항입니다.

## GitHub Pages 배포

1. `index.html`, CSS/JavaScript 파일, `images/projects/` 폴더를 저장소 배포 브랜치의 루트에 둡니다.
2. GitHub 저장소의 **Settings → Pages**에서 배포 브랜치와 `/ (root)`를 선택합니다.
3. 게시된 사이트에서 페이지 이동, 카드 조작, 이메일 및 GitHub 링크를 확인합니다.

별도 빌드 단계가 없습니다. 저장소가 프로젝트 하위 경로에 게시되더라도 모든 로컬 파일 참조는 상대 경로를 사용합니다. 비밀키, 환경설정 파일, 프로젝트 데이터는 공개 저장소에 올리지 마세요.

## 프로젝트 구조

```text
.
├── index.html
├── templatemo-3d-coverflow.css
├── templatemo-3d-coverflow-scripts.js
├── README.md
└── images/
    └── projects/
        ├── vehicle-*.png     # 차량 관리 화면 3장
        └── practice-*.png    # 악기 연습 화면 3장
```

## 수정 및 관리

- 이름, 소개, 연락처, 경력 문구: `index.html`
- 프로젝트 카드 및 상세 내용: `templatemo-3d-coverflow-scripts.js`의 `projects` 배열
- 화면 디자인과 반응형 규칙: `templatemo-3d-coverflow.css`
- 프로젝트 스크린샷은 `images/projects/`에 두고, 연결 및 대체 텍스트는 `templatemo-3d-coverflow-scripts.js`의 프로젝트 데이터에 등록합니다. 현재 차량 화면의 번호판·사용자 표시 일부는 축소 흐림 처리한 공개용 이미지입니다.
- 프로젝트 기술/기능을 변경할 때는 실제 구현 또는 확인된 자료를 바탕으로 갱신합니다.
- 차량 화면에서 흐림 처리 전 원본 이미지는 사이트 폴더 바깥의 `%LOCALAPPDATA%\Temp\ang626-portfolio-source-screenshots`에 백업했습니다. 배포용 폴더와 ZIP에는 처리된 이미지 사본만 포함됩니다.

## 확인 정보와 보완 자료

- 이력서, 차량 관리 및 악기 연습 프로그램 소스는 현재 포트폴리오 작업 폴더에 제공되지 않았습니다. 프로젝트 설명은 요청에서 확인된 정보로 구성했습니다.
- 연락처 이메일과 GitHub 사용자 경로는 기존 페이지 이메일 및 현재 프로젝트 경로(`ang626`)를 사용했습니다. 공개 전 실제 프로필 링크가 맞는지 확인해 주세요.
- 프로젝트 이미지 파일은 제공되지 않아 임의의 샘플 이미지를 프로젝트 화면으로 표시하지 않습니다.

## 디자인 기반

기존 TemplateMo 595 3D Coverflow 템플릿의 카드 커버플로우 아이디어를 바탕으로 포트폴리오에 맞게 화면과 조작을 재구성했습니다. 원본 제공 페이지: https://templatemo.com/tm-595-3d-coverflow

