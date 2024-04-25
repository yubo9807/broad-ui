## Select Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| model* | 是否显示 | `OptionValue \| RefImpl<OptionValue>` | - | - |
| onChange | model 发生变化回调 | `(val: OptionValue) => void` | - | - |
| className | - | `ClassNameType` | - | - |
| style | - | `StyleType` | - | - |
| children | 内容 | `ChildMount` | - | 可直接写 JSX |

## Option Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| value* | 键 | `string \| number \| boolean` | - | - |
| label* | 显示内容 | `string` | - | - |
