## Button 按钮

<script>
import BxButton from '../packages/button'
import '../packages/button/style.less'

export default {
  components: {
    BxButton
  }
}
</script>

### 基础用法

<div class="container">
  <bx-button type="primary">按钮</bx-button>
  <bx-button type="success">按钮</bx-button>
  <bx-button type="error">按钮</bx-button>
  <bx-button type="warning">按钮</bx-button>
</div>

```
<div>
  <bx-button type="primary">按钮</bx-button>
  <bx-button type="success">按钮</bx-button>
  <bx-button type="error">按钮</bx-button>
  <bx-button type="warning">按钮</bx-button>
</div>
```

### 不同尺寸

<div class="container">
  <bx-button type="primary" size="small">小号按钮</bx-button>
  <bx-button type="primary" size="medium">中号按钮</bx-button>
  <bx-button type="primary" size="large">大号按钮</bx-button>
</div>

```
<div>
  <bx-button type="primary" size="small">小号按钮</bx-button>
  <bx-button type="primary" size="medium">中号按钮</bx-button>
  <bx-button type="primary" size="large">大号按钮</bx-button>
</div>
```
