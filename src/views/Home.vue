<template>
  <div class="page">
    <du-header></du-header>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <cube-button @click="showDialog">Button</cube-button>
    <p class="pCss">asdasdf是打发斯蒂芬</p>
    <div class="box1">首页</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DuHeader from "@/components/DuHeader.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    DuHeader
  },
  data() {
    return {
      p1: "aaa"
    };
  },
  methods: {
    showDialog() {
      this.$createDialog({
        type: "alert",
        title: "Alert",
        content: "dialog content"
      }).show();
    }
  }
};
</script>
<style scope type="text/scss">
.pCss {
  height: 100px;
  background-color: red;
}
.box1 {
  width: 375px;
  height: 100px;
  font-size: 16px;
  background-color: yellow;
}
</style>
