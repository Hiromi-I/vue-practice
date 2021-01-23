<template>
  <div>
    <SCSSTextAnimation />
    <BindingTextAnimation />
    <TransitionAnimation />
  </div>
</template>

<script>
import SCSSTextAnimation from "@/components/SCSSTextAnimation";
import BindingTextAnimation from "@/components/BindingTextAnimation";
import TransitionAnimation from "@/components/TransitionAnimation";

export default {
  components: {
    SCSSTextAnimation,
    BindingTextAnimation,
    TransitionAnimation,
  }
};
</script>
