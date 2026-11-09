# 연락처 너머에서는 답이 왔다 | 인터랙티브 기사

이 저장소는 인터랙티브 기사 웹사이트의 배포용 파일입니다. GitHub 저장소의 최상위에 `index.html`이 있어야 Cloudflare Pages가 첫 화면을 정상적으로 찾을 수 있습니다.

## 파일 구성

```text
.
├── index.html                 # 메인 인터랙티브 기사
├── manifest.webmanifest       # 웹앱 설치 정보
├── sw.js                      # 서비스 워커 및 오프라인 캐시
├── offline.html               # 오프라인 안내 화면
├── robots.txt                 # 검색엔진 크롤러 안내
├── _headers                   # Cloudflare 응답 헤더 설정
└── assets/
    └── icons/
        ├── icon.svg
        ├── icon-192.png
        └── icon-512.png
```

## 팀원이 수정하는 방법

1. Git으로 저장소를 Clone합니다.
2. Clone한 저장소 폴더를 VS Code 또는 Codex에서 엽니다.
3. 기사 내용과 화면 구성은 `index.html`에서 수정합니다.
4. 수정한 뒤 로컬 웹서버 또는 배포 미리보기에서 PC와 모바일 화면을 확인합니다.
5. `git status`와 `git diff`로 변경 사항을 확인합니다.
6. 팀 작업 규칙에 따라 Commit하고 GitHub에 Push합니다.

## 중요한 주의사항

- `index.html` 파일은 저장소 최상위에 유지합니다.
- 파일 이름과 상대 경로를 임의로 바꾸지 않습니다.
- 기존 인터랙션을 수정하기 전 관련 JavaScript와 HTML 구조를 확인합니다.
- 이 버전은 업로드된 최신 HTML을 메인 페이지로 사용합니다. 기사에 필요한 콘텐츠와 스크립트는 HTML 내부에 포함되어 있습니다.
- 서비스 워커는 이전 버전이 캐시되는 상황을 줄이도록 네트워크 우선 방식으로 동작합니다. 배포 후 화면이 갱신되지 않으면 브라우저에서 강력 새로고침을 해 주세요.

## Cloudflare Pages 배포

기존 GitHub 연동 프로젝트를 사용한다면 저장소의 `main` 브랜치에 Push한 뒤 Cloudflare Pages의 Deployments에서 배포 성공 여부를 확인합니다.

새 프로젝트로 연결한다면:
- Framework preset: None
- Build command: 비워 두거나 `exit 0`
- Build output directory: `/` 또는 프로젝트 루트에 해당하는 `.`

Cloudflare Pages가 이 저장소의 `main` 브랜치를 배포하도록 연결되어 있어야 자동 배포됩니다.

## 로컬 미리보기

프로젝트 루트에서 다음 명령어를 실행합니다.

```bash
python3 -m http.server 8000
```

Windows에서 `python3`가 동작하지 않으면 `python -m http.server 8000`을 사용합니다. 브라우저에서 `http://localhost:8000`을 엽니다.
