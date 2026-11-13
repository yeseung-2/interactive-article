<div align="center">

# 연락처 너머에서는 답이 왔다

### 평범한 검색 화면에서 시작된 온라인 범죄 광고 추적

**핀사이트 · 데이터 저널리즘 × 인터랙티브 탐사보도**

![Type](https://img.shields.io/badge/Project-Interactive%20Journalism-ff735f?style=flat-square)
![Data](https://img.shields.io/badge/Data-1%2C365%2C774%20Posts-8ab4d5?style=flat-square)
![Web](https://img.shields.io/badge/Web-HTML%20%7C%20CSS%20%7C%20JS-252d38?style=flat-square)
![Mobile](https://img.shields.io/badge/Mobile-Responsive%20%7C%20PWA-287f75?style=flat-square)

<!-- 배포 URL을 확인한 후 아래 주석을 제거하고 주소를 입력하세요.
[**인터랙티브 기사 읽기 →**](https://YOUR-ARTICLE-URL)
-->

</div>

---

## 01. About the Project

> 시작은, 한 끼를 고르는 일이었다.

다이어트 식품을 검색하던 평범한 쇼핑 화면에서 발견한 낯선 광고. 취재팀은 그 광고의 연락처를 따라 온라인 범죄 광고가 어디에서 만들어지고, 어떻게 퍼지며, 실제 범죄와 연결되는지 추적했다.

**「연락처 너머에서는 답이 왔다」**는 관리가 소홀한 웹사이트 게시판과 검색 결과를 분석하고, 광고에 적힌 연락처를 직접 확인한 탐사보도를 인터랙티브 웹 기사로 구현한 프로젝트다. 마약 광고를 중심으로 취업사기 등 다양한 불법 광고의 확산과 일상적인 온라인 공간으로 이어지는 노출 경로를 살펴본다.

## 02. By the Numbers

| 취재 지표 | 결과 |
| :--- | ---: |
| 게시글 수집 대상 사이트 | **79곳** |
| 수집 게시글 | **1,365,774건** |
| 16개 유형으로 분류된 게시글 | **1,261,327건** |
| 마약 관련 심층 분석 게시글 | **46,752건** |
| 수집된 마약 광고성 검색결과 | **122건** |

> 마약 광고성 검색결과는 특정 마약 키워드로 수집한 표본이며, 쇼핑 플랫폼 전체의 오염률을 의미하지 않는다. 마약 관련 심층 분석 건수는 마약 유형 외에 다른 유형으로 분류된 마약 키워드 포함 게시글도 반영한다.

## 03. The Story

| Chapter | 이야기 |
| :--- | :--- |
| 01 · Opening | 쇼핑 후기 사이의 마약 광고 — 가상의 인물 지민을 따라 시작하는 스크롤 스토리 |
| 02 · Scale | 방치 사이트 79곳의 불법 광고 — 게시글 규모와 유형별 분포 |
| 03 · Language | 마약 광고의 은어와 지역명 — 광고에 반복되는 표현과 지역 분석 |
| 04 · Contact | 광고 속 연락처를 따라가다 — 실제 취재 대화를 통한 확인 |
| 05 · Route | 쇼핑몰 주소 옆에, 왜 이 연락처가? — 검색결과에 나타난 광고 문구와 노출 경로 |
| 06 · Ending | 광고의 유통 경로를 끊으려면 — 사후 삭제를 넘어서는 대응의 필요성 |

## 04. Data & Methodology

**수집 → 전처리 → 자동 분류 → 독립 검수 → 재분류 → 심층 분석**

1. **게시판 수집** — 2026년 6월 1~30일, 79개 사이트에서 게시글 1,365,774건을 수집했다. 수집 항목은 사이트명, 제목, 작성일, 조회수, URL이다.
2. **검색결과 수집** — 2026년 9월 28일~10월 6일, 10개 쇼핑 플랫폼을 대상으로 마약 키워드 검색결과를 조사해 7개 플랫폼에서 122건을 확보했다.
3. **전처리 및 중복 집계** — 검색 회피용 문자 표기를 정규화하고 초성 은어를 보존했다. 정제한 제목 기준 고유 제목 787,746건도 별도로 집계했다.
4. **분류 및 검수** — 16개 카테고리의 키워드 사전과 나이브 베이즈 모델로 분류하고, 팀원 4명이 자동 결과를 보지 않은 채 표본 1,832건을 직접 판독했다. 검수 결과를 반영해 사전을 보강하고 전체를 재분류했다.
5. **심층 분석** — 마약 종류, 지역명, 연락용 아이디를 추출해 게시판 간 연결 관계를 분석하고, 실제 연락 취재와 검색 노출 사례를 함께 살폈다.

### 검수 결과

| 지표 | 결과 |
| :--- | ---: |
| 무작위 700건의 1차 자동 분류와 사람 판정 일치 | 90.7% (635건) |
| 4인 공통 검수 100건의 판정 일치율 | 98.0% |

※ 위 수치는 기사에 명시된 검수 결과다. 전체 재분류 결과의 정확도를 별도로 검증한 수치로 해석하지 않는다.

## 05. Interactive Experience

- **Scrollytelling** — 스크롤 진행에 따라 쇼핑 장면과 실제 취재 대화가 전환된다.
- **Data Visualization** — 게시글 유형별 분포, 광고 사이트·연락처·마약 종류의 연결 관계, 은어와 지역별 분포를 탐색한다.
- **Evidence & Context** — 취재 화면, 대화 장면, 검색 노출 사례를 기사 서사와 연결하고 분석 방법을 펼쳐 읽을 수 있다.
- **Mobile-first Reading Improvements** — 화면 크기와 안전 영역 대응, 터치 스크롤 개선, iframe 높이 조정, 이미지 확대 기능을 적용했다.
- **PWA** — 홈 화면 추가를 위한 매니페스트·아이콘과 서비스 워커 캐싱을 구성했다.

## 06. Tech Stack & Architecture

| 영역 | 기술 / 구현 |
| :--- | :--- |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Interaction | Sticky layout, scroll progress, iframe, postMessage |
| Visualization | 인터랙티브 차트, 네트워크 그래프, 지역별 시각화 |
| Mobile | Responsive CSS, touch handling, viewport / safe-area 대응 |
| PWA | Web App Manifest, Service Worker, Cache Storage |

메인 기사와 시각화 화면을 별도 HTML 파일로 구성하고, 이미지도 별도 리소스로 분리해 초기 HTML 처리 부담을 줄였다. 일부 시각화는 외부 CDN 라이브러리를 사용한다.

```text
interactive-article/
├── index.html                 # 메인 기사 및 스크롤 제어
├── frames/
│   ├── intro.html             # 도입부 스크롤 스토리
│   ├── combined-chart.html    # 게시글 유형별 시각화
│   ├── network.html           # 연결 관계 네트워크
│   ├── region.html            # 지역별 시각화
│   └── telegram.html          # 취재 대화 인터랙션
├── assets/
│   ├── icons/                 # PWA 아이콘
│   └── media/                 # 기사 이미지
├── manifest.webmanifest       # PWA 설치 정보
├── sw.js                      # 서비스 워커
└── README.md
```

## 07. Run & Deploy

별도의 프런트엔드 빌드 과정 없이 정적 웹 서버에서 실행할 수 있다. Python이 설치되어 있다면 프로젝트 루트에서:

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속한다. Windows에서 `python` 명령이 인식되지 않으면 `py -m http.server 8000`을 사용한다.

배포 시 `index.html`, `frames/`, `assets/`, `manifest.webmanifest`, `sw.js`의 상대 경로를 유지한다. 서비스 워커는 HTTPS 환경(또는 로컬 테스트 환경)에서 사용 가능하며, 오프라인에서는 캐시된 리소스만 이용할 수 있다. 외부 CDN에 의존하는 시각화는 인터넷 연결이 필요할 수 있다.

## 08. Credits

**핀사이트 · 기획 및 제작**

구예승 · 유영훈 · 이선호 · 전보영

기사 속 지민은 가상의 인물이며, 도입부 쇼핑 장면은 취재 내용을 바탕으로 구성했다. 실제 취재 대화와 데이터 분석은 기사 본문의 설명을 따른다.

---

<div align="center">

**지운 게시물의 수보다, 끊어낸 경로를 물어야 한다.**

</div>
