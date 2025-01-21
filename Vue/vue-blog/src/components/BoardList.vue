<template>
    <div class="board" v-for="(item, i) in board" :key="i">
        <h3><a>{{ item.title }}</a></h3>
        <div>{{ item.content }}</div>
        <div>{{ item.date }}</div>
    </div>
</template>

<script>
    import board from '../assets/board'

    export default {
        name : 'BoardList',
        data() {
            return {
                board : board
            }
        }
    }
</script>

<style>
    .board {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding : 20px 0;
        margin : 10px;
    }
</style>