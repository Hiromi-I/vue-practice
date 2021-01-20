<template>
  <div id="app">
    <router-view />
    <TabHolder />
    <ModalSet />
    <router-link to="/">トップ</router-link>
    <router-link to="/modal-sample">モーダル</router-link>
    <router-link to="/loading-sample">ローディング</router-link>
  </div>
</template>

<script>
import TabHolder from "./components/TabHolder.vue";
import ModalSet from "./components/ModalSet.vue";

export default {
  name: "App",
  components: {
    TabHolder,
    ModalSet
  }
};
</script>
