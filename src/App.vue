<template>
  <div id="app">
    <router-view />
    <router-link to="/">トップ</router-link>
    <router-link to="/modal-sample">モーダル</router-link>
    <router-link to="/loading-sample">ローディング</router-link>
    <router-link to="/text-animation">テキストアニメーション</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
