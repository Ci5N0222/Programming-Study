# Mini Shopping mall Project

## Library
#### 1. React-Bootstrap
`$ npm install react-bootstrap bootstrap`

#### 2. React-Router
```bash
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