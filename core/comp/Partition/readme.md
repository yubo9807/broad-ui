
## Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| size | 主区域默认大小 | `string` | 30% | - |
| type | 分割方向 | `'horizontal' \| 'vertical'` | horizontal | - |
| main | 主区域 | `1 \| 2` | 1 | type 为 horizontal 时，1 为左，2为右；type 为 vertical 时，1 为上，2为下 |
| className | - | `ClassNameType` | - | - |
| style | - | `StyleType` | - | - |
| childMain | 主区域 dom 控制 | `(el: HTMLElement) => void` | - | 该函数在 dom 还没有挂载时触发（childArea 也一样） |
| childArea | 副区域 dom 控制 | `(el: HTMLElement) => void` | - | |

## Methods

| 方法名 | 说明 | 参数 | 备注 |
| --- | --- | --- | --- |
| setPartial | 调整区域主区域大小 | (value: string) => void | - |
| getRootEl | 获取组件根元素节点 | () => HTMLElement | - |


## 说明

设置区域大小限制通过 css 来完成，PS: `min-width: 200px`