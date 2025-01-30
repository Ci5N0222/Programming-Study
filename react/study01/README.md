# React Study 01 ( + TypeScript )

### Setup
```bash
// Create New Project
$ npm create vite@latest "my project name" --template react-ts

// Select
1. React
2. TypeScript

// Start
1. $ cd "my project name"
2. $ npm install
3. $ npm run dev
```

## Life Cycle( useEffect )
``` bash
// 1. 재렌더링마다 코드 실행
useEffect(() => { })

// 2. mount 시 1회 코드 실행
useEffect(() => { }, [])

// 3. unmount 시 1회 코드 실행( 4. useEffect 실행 전 실행 )
useEffect(() => { return () => { }})

// 5. 특정 state 변경시에만 실행
useEffect(() => { }, [ state ])
```