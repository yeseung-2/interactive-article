# 연락처 너머에서는 답이 왔다

인터랙티브 기사 웹사이트 프로젝트입니다. GitHub와 Cloudflare Pages를 연결해 배포하는 구성을 기준으로 합니다.

## 파일 구성
- `index.html`: 기사 본문, 디자인, 인터랙션이 들어 있는 메인 파일
- `manifest.webmanifest`: 모바일 설치(PWA) 설정
- `sw.js`: 방문한 파일을 캐시해 오프라인 재방문을 돕는 서비스 워커
- `offline.html`: 인터넷이 끊겼을 때 보여 주는 안내 페이지
- `robots.txt`: 검색엔진 안내 파일
- `_headers`: Cloudflare Pages 보안 및 캐시 헤더
- `assets/icons/`: 사이트 아이콘

## GitHub 업로드
1. ZIP 압축을 풉니다.
2. 압축을 푼 폴더 안의 파일과 폴더를 확인합니다.
3. 그 안의 항목을 GitHub 저장소의 가장 바깥쪽(루트)에 업로드합니다.
4. 기존 `index.html`이 있다면 새 파일로 교체합니다.
5. 변경 사항을 `main` 브랜치에 커밋합니다.
6. Cloudflare Pages가 GitHub와 연결되어 있으면 자동 배포됩니다.

**주의:** 압축을 푼 폴더 자체를 한 단계 더 감싸서 올리지 마세요. `index.html`이 저장소 최상위에 있어야 합니다.

## 로컬 확인
`index.html`을 브라우저로 열어 기본 화면을 확인할 수 있습니다. 서비스 워커는 `file://` 주소에서는 동작하지 않으므로, PWA까지 확인하려면 로컬 웹 서버나 Cloudflare Pages 미리보기 주소를 사용하세요.

## 수정 위치
- 기사와 화면: `index.html`
- 아이콘: `assets/icons/`
- 오프라인 동작: `sw.js`, `offline.html`
- 검색엔진 설정: `robots.txt`, `index.html`의 메타 태그
