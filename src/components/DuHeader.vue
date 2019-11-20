<template>
  <div class="duHeader">
    <div class="leftBox" @click="back">
      <div v-if="haveBack"><i class="cubeic-back"></i><span>返回</span></div>
    </div>
    <h1 v-text="title" class="titleBox"></h1>
    <div class="rightBox">
      <slot name="duHeaderRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DuHeader",
  props: {
    haveBack: Boolean,
    title: String
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
      this.$emit("back");
    }
  }
};
</script>
<style scoped type="text/scss" lang="scss">
.duHeader {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: $du-header-h;
  background-color: $base-color;
  color: $white;
  padding: 0 10px;
  .leftBox {
    flex: 0.5;
    line-height: $du-header-h;
  }
  .titleBox {
    flex: 1;
    height: $du-header-h;
    line-height: $du-header-h;
    text-align: center;
    box-sizing: border-box;
    font-size: $font-size-big;
  }
  .rightBox {
    flex: 0.5;
    line-height: $du-header-h;
  }
}
</style>
