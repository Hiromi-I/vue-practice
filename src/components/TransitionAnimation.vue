<template>
  <div>
    <transition-group tag="div" class="title">
      <span v-for="el in text" :key="el.id" class="item" v-text="el.text" />
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      original: [
        "機能ごとに解説している Vue.js 入門書です。これからはじめる方にも、すでに Vue.js をお使いの方にも、楽しんでいただける内容になっています。",
        "Vue.js は直感的に使える機能が多く、雰囲気で使ってしまいがちです。どんなメリット＆デメリットがあるかも解説しているため、しっかりと学習できます。",
        "各チャプターやセクションは、基本的に独立した解説になっています。そのため、知りたい機能をピックアップして学習できます。"
      ],
      messages: [],
      text: ""
    };
  },
  methods: {
    ticker() {
      setTimeout(() => {
        this.index = this.index < this.messages.length - 1 ? this.index + 1 : 0;
        this.text = this.messages[this.index];
        this.ticker();
      }, 5000);
    },
    convText(text) {
      const alms = {};
      const result = text.split("").map(el => {
        alms[el] = alms[el] ? ++alms[el] : 1;
        return { id: `${el}_${alms[el]}`, text: el };
      });
      return Object.freeze(result);
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el));
    this.text = this.messages[0];
    this.ticker();
  }
};
</script>

<style scoped>
.title {
  font-size: 2rem;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
