<template>
  <div class="example-loading example">
    <p>
      <button @click="loadContent" :disabled="!list.length">
        コンテンツをリロード
      </button>
    </p>

    <div class="flexbox-wrapper" :style="{ height: height + 'px' }">
      <ul class="flexbox-body" ref="body">
        <li v-for="item in list" :key="item.id">
          {{ item.name }} {{ item.price }}
        </li>
      </ul>
      <transition>
        <Loading v-if="!list.length" />
      </transition>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/LoadContent.vue";

export default {
  components: { Loading },
  data() {
    return {
      height: 0,
      list: []
    };
  },
  // ウォッチャ
  watch: {
    list() {
      // nextTick
      this.$nextTick(() => {
        // $refs
        this.height = this.$refs.body.getBoundingClientRect().height;
      });
    }
  },
  methods: {
    loadContent() {
      this.list = []
      setTimeout(() => {
        this.list = [
          { id: 1, name: "りんご", price: 100 },
          { id: 2, name: "ばなな", price: 200 },
          { id: 3, いちご: "りんご", price: 300 },
        ];
      }, 1500);
    }
  },
  created() {
    this.loadContent();
  }
}
</script>

<style scoped>
.flexbox-wrapper {
  position: relative;
  border: 2px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  transition: height 0.4s;
  min-height: 3em;
}
.flexbox-body {
  margin: 0 0 0 24px;
  padding: 16px;
}
/* トランジション用スタイル */
.v-enter-active, .v-leave-active {
  transition: opacity 0.4s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
