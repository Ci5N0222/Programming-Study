<template>
    <div>
        <h2>상세 페이지</h2>
        <p>제목 : {{ boardOne.title }}</p>
        <span>내용 : {{ boardOne.content }}</span>
    </div>
  </template>
  
  <script>
    import board from '../assets/board.js';

  export default {
      name: 'BoardDetail',
      data() {
        return {
            board : board,
            boardOne : {}
        }
      },
      created() {
        const idx = this.$route.params.id;
        const getBoard = board.filter(item => {
            return item.number == idx;
        });
        this.boardOne = getBoard[0];
      }
  }
  </script>
  
  <style>
  </style>