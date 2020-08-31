<template>
  <div>
    <button @click="openModal">開く</button>
    <ModalWindow @close="closeModal" v-if="isModalOpen">
      <p>Sample Modal Message.</p>
      <template slot="footer">
        <button @click="closeModal">閉じる</button>
      </template>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";

export default {
  components: { ModalWindow },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  }
}
</script>
