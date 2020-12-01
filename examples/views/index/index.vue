<template>
  <div class="container">
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
  </div>
</template>
<script>
export default {
  created() {
    console.log(process.argv[0])
  }
}
</script>
<style lang="less">
.box-1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>