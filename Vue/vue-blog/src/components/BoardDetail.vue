<template>
    {{ $route.params.id }}
    <div>
        <h2>상세 페이지</h2>
        <p>제목 : </p>
        <span>내용 : </span>
    </div>
  </template>
  
  <script>
  export default {
      name: 'BoardDetail',
  }
  </script>
  
  <style>
  </style>