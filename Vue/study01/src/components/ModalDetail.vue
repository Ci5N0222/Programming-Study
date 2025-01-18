<template>
    <Transition name="fade">
        <div class="black-bg" v-if="isModal">
            <div class="white-bg">
                <img :src="item.image" :alt="item.title">
                <h4>{{ item.title }}</h4>
                <p>{{ item.content }}</p>
                <p>{{ moneyComma(item.price) }}원</p>
                <button @click="$emit('closeModal', false)">닫기</button>
            </div>
        </div>
    </Transition>
</template>

<script>
    import { moneyComma } from '@/common';

    export default {
        name: "ModalDetail",
        props : {
            item : Object,
            isModal : Object
        },
        methods : {
            moneyComma
        }
    }
</script>

<style>

    .black-bg {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        padding: 20px;
        z-index: 1;
    }

    .white-bg {
        widows: 100%;
        background: white;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .white-bg > img {
        width: 100%;
        max-width: 500px;
    }

    .white-bg > button {
        width: 80px;
        height: 30px;
    }

    .fade-enter-from {
        transform: translateY(50px);
    }
    .fade-enter-active{
        transition: all 0.7s;
    }
    .fade-enter-to{
        transform: translateY(0px);
    }

</style>