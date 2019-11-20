<template>
  <div class="page">
    <du-header title="首页" haveBack v-on:back="back"> </du-header>
    <div class="page-wrapper">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <cube-button @click="showDialog">Button</cube-button>
      <div class="div1">
        <p>asdasdf是打发斯蒂芬</p>
      </div>
      <div class="box1">首页</div>
    </div>
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
    },
    back() {
      alert(0);
    }
  }
};
</script>
<style scoped type="text/scss" lang="scss">
.div1 {
  height: 100px;
  background-color: red;
  p {
    font-size: 12px;
    color: white;
  }
}
.box1 {
  width: 375px;
  height: 100px;
  font-size: 16px;
  background-color: yellow;
}
</style>
