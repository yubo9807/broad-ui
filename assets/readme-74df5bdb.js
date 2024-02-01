const n=`
## Props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| *text | 展示文本 | string | - | - |
| row | 行数 | number | 2 | - |
| unfold | 展开文本 | string | 展开 | - |
| fold | 收起文本 | string | 收起 | - |
| unfoldEl | 展开元素控制 | (el: HTMLElement) => void | - | 如果需要更换图标请直接操作 DOM |
| foldEl | 收起元素控制 | (el: HTMLElement) => void | - | - |

## Methods

| 方法名 | 说明 | 参数 | 备注 |
| --- | --- | --- | --- |
| setText | 设置文本内容 | (str: string) => void | - |
| setOpen | 设置展开/收起 | (open: boolean) => void | - |

## 说明

通过 CSS \`--line-height\`，\`font-size\` 变量改变文字效果。`;export{n as default};
