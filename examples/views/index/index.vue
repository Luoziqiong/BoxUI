<template>
  <div class="container">
    <p>按钮</p>
    <div class="box-1">
      <bx-button type="primary">按钮</bx-button>
      <bx-button type="success">按钮</bx-button>
      <bx-button type="error">按钮</bx-button>
      <bx-button type="warning">按钮</bx-button>
    </div>
    <div class="box-2">
      <bx-button size="small">小号按钮</bx-button>
      <bx-button size="medium">中号按钮</bx-button>
      <bx-button size="large">大号按钮</bx-button>
    </div>
    <div class="box-3">
      <bx-button type="primary">按钮</bx-button>
      <bx-button type="success">按钮</bx-button>
      <bx-button type="error">按钮</bx-button>
      <bx-button type="warning">按钮</bx-button>
    </div>
    <p>色彩渐变测试</p>
    <div style="display:flex;flex-wrap: wrap;">
      <div class="color-container" :key="color" v-for="color in colors">
        <p
          :class="{ [`color-${color}-${i}`]: true }"
          v-for="i in 10"
          :key="i"
        ></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "blue",
        "red",
        "orange",
        "pink",
        "magenta",
        "volcano",
        "yellow",
        "gold",
        "cyan",
        "green",
        "geekblue",
        "purple",
      ],
    };
  },
  created() {},
};
</script>
<style lang="less">
@import "../../../packages/theme/color/colors.less";
.make-palette(@color, @index: 1) when (@index <= 10) {
  .color-@{color}-@{index} {
    @background: "@{color}-@{index}";

    background: @@background;
    width: 200px;
    height: 40px;
    margin: 0;
    &::before {
      content: "@{@{background}}";
      color: if(@index > 5, #fff, #000);
    }
    &:hover {
      width: 210px;
      border-radius: 0 4px 4px 0;
      transition: width 0.5s;
    }
  }
  .make-palette(@color, (@index + 1)); // next iteration
}
div[class^="box"] {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.color-container {
  width: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
}
.make-palette(blue);
.make-palette(red);
.make-palette(orange);
.make-palette(pink);
.make-palette(magenta);
.make-palette(volcano);
.make-palette(yellow);
.make-palette(gold);
.make-palette(cyan);
.make-palette(green);
.make-palette(geekblue);
.make-palette(purple);
</style>
