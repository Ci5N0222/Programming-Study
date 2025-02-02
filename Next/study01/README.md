
#### .module.css
- 특정 페이지에만 적용되는 css 파일


#### Routing
1. src/app 폴더에 url로 사용할 이름의 폴더 생성
2. page.tsx 생성


#### Client Component
``` bash
// 컴포넌트 최상단에 'use client' 작성

'use client'
export default functon Component() { ... }

```

#### Server Component
``` bash
// html에 자바스크립트 기능 넣기 불가능( useState, useEffect, onClick 등등 )
<button onClick={ ... }> btn </button>
```