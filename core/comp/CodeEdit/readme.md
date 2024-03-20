
## Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| model* | 显示文本 | `string \| RefImpl<string>` | - | - |
| isEdit | 是否可以进行编辑 | `boolean` | true | - |
| toHtml | 将结果转为 html | `(val: string) => string` | - | 请自行实现高亮 |
| isCopy | 是否显示复制按钮 | `boolean` | false | - |
| onCopy | 复制后的回调 | `(val: string) => void` | - | - |
| onKeyDown | 按键按下事件 | `(e: KeyboardEvent) => void` | - | 可以自定义一些快捷键操作 |
