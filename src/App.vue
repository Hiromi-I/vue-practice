<template>
  <div id="app">
    <router-view />
    <TabHolder />
    <ModalSet />
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
