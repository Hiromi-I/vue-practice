<template>
  <div>
    <TabHolder />
    <ModalSet />
  </div>
</template>

<script>
import TabHolder from "@/components/TabHolder.vue";
import ModalSet from "@/components/ModalSet.vue";

export default {
  name: "ModalSample",
  components: {
    TabHolder,
    ModalSet
  }
};
</script>
