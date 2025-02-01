# Mini Shopping mall Project

## Library
#### 1. React-Bootstrap
`$ npm install react-bootstrap bootstrap`

#### 2. React-Router
```bash
/** Install **/
$ npm install react-router-dom

// 1. main.tsx에 BrowserRouter Import
import { BrowserRouter } from 'react-router-dom'

// 2. App 태그를 을 BrowserRouter 태그로 감싸준다.
<BrowserRouter>
    <App />
</BrowserRouter>

// 3. 사용 법
 <Routes>
    <Route path="/" element={ <Home /> } />
 </Routes>
```

#### 3. axios
`$ npm install axios`

#### 4. Styled-Components
```bash
/** Install **/
$ npm install styled-components

// 1. 사용할 컴포넌트에 Import
import styled from "styled-components"

// 2. 사용법
type YellowBtnType = {
  bg :string
  color? :string
}

// 변수를 받을 수 있으며, 삼항연산자도 사용 가능
let YellowBtn = styled.button<YellowBtnType>`
  background: ${ props => props.bg };
  color: ${ props => props.color == undefined ? 'black' : 'red'};
  padding: 10px;
`

// 같은 버튼을 복제하여 확장할 수 있다.
let NewBtn = styled(YellowBtn)`
  border: 1px solid black;
  font-weight: bold;
`
`
```


#### 5. Redux-Toolkit
``` bash
/** Install **/
$ npm install @reduxjs/toolkit react-redux

// 1. store.ts 생성
import { configureStore } from "@reduxjs/toolkit";

export default configureStore(({
    reducer : {

    }
}));

// 2. main.tsx에 임포트
// <APP /> 을 Provider 컴포넌트로 감싸며 props로 생성한 store를 넘긴다.
import { Provider } from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
```

#### React-Query
```bash
/** Install **/
$ npm install react-query
```