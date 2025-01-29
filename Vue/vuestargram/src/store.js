import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name : "kim",
            age: 20
        }
    },

    // 데이터 수정 작성 영역
    mutations : {
        updateName(state) {
            state.name = 'park';
        },
        updateAge(state) {
            state.age++;
        }
    }
});

export default store;