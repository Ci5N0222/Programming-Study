## Study01

### App.vue
- 메인 페이지
- HTML로 컴파일 → public/index.html

``` bash
<template> 태그
    * 화면에 보여질 태그 작성

<script> 태그
    * 화면에 사용할 데이터, 메소드 등을 관리
    * data()
        ** 데이터를 오브젝트 형식으로 보관 { 키 : 값 }
    * methods
        ** 함수 보관
```

### Directory
- node_modules : 프로젝트에 쓰는 라이브러리들
- src : 소스코드 
- public : html 등 정적인 파일
- package.json : 라이브러리 버전, 프로젝트 설정 기록

### 동적 UI 만드는 법
1. 디자인
2. UI의 현재 상태를 데이터로 저장
3. 데이터에 따라 UI가 어떻게 보일지 작성

### Data binding
``` bash
* 사용법
    ** {{ 변수명 }}
    ** 태그 안에서 :(콜론)

    ** <p>{{ 변수명 }}</p>
    ** <p :style="스타일변수" :title="타이틀변수"></p>
    ** <img :src="data.image" :alt="data.title">
```
- 데이터 바인딩을 사용하는 이유
    - HTML에 하드코딩 해놓으면 나중에 데이터 변경이 어려움
    - Vue의 "실시간 자동 렌더링" 기능을 사용
        - data를 변경하면 data와 관련된 HTML에도 실시간 반영
- 데이터가 변경되지 않는 부분까지 바인딩할 필요 없음

### Click Event
``` bash
* 사용법
    ** @click="실헹시킬 코드"
    ** 실행시킬 코드가 2개일 경우 ;( 세미콜론 )으로 나눠 진행

    ** <h4 @click="isModal = !isModal; modalData = i">{{ data[i].title }}</h4>
```

### 조건문
``` bash
* 사용법
    ** v-if="조건식"

    ** <div class="black-bg" v-if="isModal"></div>
    ** isModal 이 true일 경우 해당 div가 화면에 보임
```

### 반복문
``` bash
* 변수 작명 2개까지 가능
* 사용법
    ** v-for="배열의 인자 in 배열"
    ** 첫번째 인자 : array 내의 데이터
    ** 두번쨰 인자 : 1씩 증가하는 정수( index )

    ** <a v-for = "(menu, i) in menus" :key="i">{{ menu }}</a>
```

### Components
- View의 재사용성 ↑
- component.vue 이름은 2단어 이상으로 작성해야 함
- Discount.vue(X) → DiscountBanner.vue(O)
- 설정으로 한단어 표현하는 법
    - package.json에 "rules" 항목에 아래 코드 추가
    - "vue/multi-word-component-names": "off"
``` bash
* package.json
    "rules" : {
        "vue/multi-word-component-names" : "off"
    }
```

### Props
- 부모 컴포넌트에서 데이터를 자식 컴포넌트로 보내는 방법
- Props로 보낸 데이터는 수정할 수 없음
``` bash
* 사용법
    ** 부모 컴포넌트에서 사용할 컴포넌트에 ":변수명"으로 데이터 전달
    ** <CardItem :item="item" v-for="(item, i) in data" :key="i"/>

    ** Props 데이터를 전달받은 컴포넌트에서 사용하는 방법
    ** <script>
            export default {
                props : {
                    item: Object
                }
            }
        </script>

```

### Custom Event 문법
- 부모에게 받은 Props 데이터를 변경하는 방법
``` bash
    부모에게 메시지 보낼 때
    $emit('작명', 데이터)

    부모가 메시지 수신할 때
    @작명=""
```
