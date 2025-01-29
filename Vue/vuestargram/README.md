# vuestargram


### slot
``` bash
* 상위 컴포넌트에서 하위컴포넌트로 데이터 바인딩
* props와는 다르게 데이터바인딩으로 밖에 사용하지 못함

* 하나의 slot 사용
    ** <상위컴포넌트> "내용" </상위컴포넌트>
    ** 하위 컴포넌트 <slot></slot> 태그에 "내용"이 바인딩 됨

* 여러개의 slot 사용
** <상위컴포넌트>
       <template v-slot:a> "내용1" </template>
       <template v-slot:b> "내용2" </template>
   </상위컴포넌트>
** <slot name="a"></slot>
   <slot name="b"></slot>
```

### mitt
``` bash
// install
$ npm install mitt

```