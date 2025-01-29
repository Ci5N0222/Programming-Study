import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            name : "kim",
            age: 20,
            postdata : [],
            more : {}
        }
    },

    // 데이터 수정 작성 영역
    mutations : {
        updateName(state) {
            state.name = 'park';
        },

        updateAge(state) {
            state.age++;
        },

        isLike(state, payload) {
            console.log("payload ---- ", payload)
            let likes = payload.likes;
            if(payload.liked) {
                likes--;
            } else {
                likes++;
            }
            return { ...payload, liked : !payload.liked, likes};
        },

        setMore(state, payload) {
            state.more = payload;
        }
    },

    actions : {
        getData(context) {
            axios.get("https://codingapple1.github.io/vue/more0.json").then(res => {
                context.commit('setMore', res.data);
            });
        }
    }
});

export default store;