
## Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| size | 主区域默认大小 | string | 30% | - |
| type | 方向 | string | 2 | 1 | ['horizontal', 'vertical'] |
| main | 主区域 | number | 1 | [1, 2] 方向为 horizontal 时，1 为左，2为右；方向为 vertical 时，1 为上，2为下 |
| className | - | string | - | |
| areaMain | 主区域 dom 控制 | (el: HTMLElement) => void | - | 该函数在 dom 还没有挂载时触发（areaVice 也一样） |
| areaVice | 副区域 dom 控制 | (el: HTMLElement) => void | - | |

## Methods

| 方法名 | 说明 | 参数 | 备注 |
| --- | --- | --- | --- |
| setPartial | 调整区域主区域大小 | (value: string) => void | - |
| getRootEl | 获取组件根元素节点 | () => HTMLElement | - |
