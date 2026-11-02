# 인터랙티브 기사 — Cloudflare Pages 배포 프로젝트

## 원본을 보존한 변경 원칙

- 원본 HTML의 인라인 CSS/JavaScript와 `srcdoc` iframe 3개를 그대로 유지했습니다.
- 기존 HTML을 `index.html`로 배치하고, PWA 메타데이터/manifest 연결/서비스워커 등록만 추가했습니다.
- `analytics.js`는 기사 스크롤 25/50/75/90%와 의미 있는 컨트롤 클릭을 Cloudflare Zaraz로 보냅니다. 화면 텍스트, 입력값, 개인식별정보는 수집하지 않습니다.
- `sw.js`는 설치 시 16.6MB 본문을 선캐시하지 않습니다. 온라인으로 기사를 성공적으로 연 뒤에만 해당 문서를 캐시에 저장해 재방문 오프라인 접근을 지원합니다.

## 프로젝트 구조

```text
.
├── index.html                  # 원본 기사 + 최소 연결 코드
├── manifest.webmanifest        # PWA 설치 메타데이터
├── sw.js                       # 오프라인 캐시 서비스워커
├── offline.html                # 최초 오프라인 방문 안내
├── robots.txt                  # 검색 크롤러 허용
├── _headers                    # 보안/캐시 응답 헤더
├── assets/
│   ├── icons/                  # SVG, 192px, 512px 앱 아이콘
│   └── js/analytics.js         # Zaraz 커스텀 이벤트
└── README.md
```

## Cloudflare Pages 배포

1. 이 폴더의 파일을 GitHub 새 저장소(예: `interactive-article`) 루트에 올립니다.
2. Cloudflare 대시보드 → Workers & Pages → Create application → Pages → Connect to Git.
3. GitHub 저장소를 선택하고 다음처럼 설정합니다.
   - Production branch: `main`
   - Framework preset: `None` / `No framework`
   - Build command: `exit 0` (정적 파일만 배포하므로 빌드 작업 없음)
   - Build output directory: `/` 또는 `.` (화면에서 루트 디렉터리를 요구하는 형식에 맞춤)
   - Root directory: 저장소 루트
4. Save and Deploy를 누릅니다. 배포 후 `https://프로젝트명.pages.dev`에서 확인합니다.
5. Git 연동은 커밋/푸시할 때 자동 배포되고, 브랜치/PR 미리보기 주소도 제공합니다.

**중요:** Cloudflare Pages 프로젝트 생성 시 Git 연동을 선택하세요. Direct Upload로 시작하면 이후 Git 연동 방식으로 전환할 수 없습니다.

## 분석 설정

### 1) 페이지뷰/성능 지표

Cloudflare 대시보드 → Workers & Pages → 해당 Pages 프로젝트 → Metrics → Web Analytics → Enable. Pages가 다음 배포에서 beacon을 자동 삽입합니다.

### 2) 기사 인터랙션 이벤트

Cloudflare 대시보드에서 Zaraz를 활성화한 뒤, `article_scroll_depth`와 `article_interaction` 이벤트를 수신하는 Trigger를 만들고, 사용할 분석 도구(GA4 등)의 Event action에 연결합니다. 이벤트 코드는 Zaraz가 켜져 있지 않으면 아무 데이터도 전송하지 않습니다.

참고: iframe 내부에서 일어나는 클릭은 부모 문서의 이벤트 리스너에 전달되지 않습니다. 첫 버전에서는 부모 페이지의 버튼/링크/요약 요소와 스크롤 깊이부터 측정합니다. iframe 안의 스토리·지도·차트 상호작용까지 분석하려면 각 iframe `srcdoc` 내부에 별도 이벤트 코드를 넣고 회귀 테스트해야 합니다.

## SEO 후속 작업

- 현재 문서의 제목과 description은 기존 값을 유지하고 Open Graph title/description/type을 추가했습니다.
- 실제 배포 주소와 대표 이미지가 정해지면 `og:url`, `og:image`, canonical URL, `sitemap.xml`을 절대 URL로 확정하세요. 주소를 모르는 상태에서 가짜 도메인을 넣지 않았습니다.
- 검색 결과에 노출되기 전 배포 URL에서 제목/설명/대표 이미지 미리보기를 검증하세요.

## PWA 검증

- 반드시 HTTPS 배포 주소에서 확인합니다.
- Chrome DevTools → Application → Manifest에서 이름/아이콘/시작 URL 확인.
- Application → Service Workers에서 활성 상태 확인.
- 온라인으로 기사 1회 열기 → 새로고침 → 개발자도구 Network에서 Offline 전환 → 재접속해 캐시 동작 확인.
- iframe 내부 콘텐츠/스크롤 연동이 온라인·오프라인 양쪽에서 유지되는지 확인합니다.

## 성능 최적화 2차 단계 (회귀 테스트 후)

원본 문서가 약 16.6MB이며 이미지가 data URI로 HTML/CSS 안에 포함돼 있습니다. 따라서 이번 보존형 1차 배포에서는 이미지를 추출하거나 iframe을 분리하지 않았습니다. 다음 단계에서 이미지 data URI를 WebP/AVIF 파일로 추출하고, CSS 배경/iframe srcdoc 참조를 바꾼 뒤 모바일/데스크톱에서 모든 인터랙션을 회귀 테스트하세요. 이 변경이 초기 로딩 크기 개선의 가장 큰 후보입니다.

## 배포 전 체크리스트

- [ ] 데스크톱/모바일에서 전체 기사 스크롤
- [ ] 본문 버튼, 탭, 차트/확대 기능
- [ ] iframe 3개 로딩 및 부모 스크롤/메시지 연동
- [ ] 브라우저 콘솔 오류 없음
- [ ] manifest 아이콘 192/512 정상 표시
- [ ] service worker 설치/오프라인 재방문
- [ ] Web Analytics 페이지뷰 표시
- [ ] Zaraz 이벤트 테스트 모드에서 이벤트 수신
- [ ] Lighthouse 모바일/데스크톱 측정 및 결과 기록

## 참고

- Cloudflare Pages 정적 HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Web Analytics: https://developers.cloudflare.com/pages/how-to/web-analytics/
- Cloudflare Zaraz track: https://developers.cloudflare.com/zaraz/web-api/track/
