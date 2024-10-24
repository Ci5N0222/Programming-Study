## Study01

### App.vue
- 메인 페이지
- HTML로 컴파일 → public/index.html

### Directory
- node_modules : 프로젝트에 쓰는 라이브러리들
- src : 소스코드 
- public : html 등 정적인 파일
- package.json : 라이브러리 버전, 프로젝트 설정 기록


### Data binding
- 사용법
    - {{ 변수명 }}
    - 태그 안에서 :(콜론)
        <p :style="스타일변수" :title="타이틀변수"></p>
- 데이터 바인딩을 사용하는 이유
    - HTML에 하드코딩 해놓으면 나중에 데이터 변경이 어려움
    - Vue의 "실시간 자동 렌더링" 기능을 사용
        - data를 변경하면 data와 관련된 HTML에도 실시간 반영
- 데이터가 변경되지 않는 부분까지 바인딩할 필요 없음
