<template>
    <button
      v-show="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
    >
      ↑
    </button>
</template>
  
<script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      checkVisibility() {
        this.isVisible = window.scrollY > 300;
      },
    },
    created() {
      window.addEventListener('scroll', this.checkVisibility);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkVisibility);
    },
  };
</script>
  
<style scoped lang="scss">
@import "../assets/styles/main";

.scroll-to-top {
    position: fixed;
    z-index: 999;
    bottom: 20px;
    right: 20px;
    background-color: $primary;
    color: white;
    border: none;
    padding: 10px;
    width: 60px;
    height: 60px;
    font-size: 24px;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    opacity: 0.7;
    transition: opacity 0.3s;
}

.scroll-to-top:hover {
    opacity: 1;
}
</style>
  