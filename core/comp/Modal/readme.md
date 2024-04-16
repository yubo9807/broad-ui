## props

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| model* | 是否显示 | `boolean \| RefImpl<boolean>` | - | - |
| title | 标题 | `boolean` | - | - |
| className | - | `string \| string[]` | - | - |
| children | 内容 | `ChildMount` | - | 可直接写 JSX |
| childFooter | 底部按钮 | `ChildMount` | - | 可直接写 JSX |
| onOk | 确认按钮回调 | `() => void` | - | |
| onCancel | 取消按钮回调 | `() => void` | - | |

## ModalAffirm

```tsx
ModalAffirm({
  title:   '提示',
  content: '确定要删除吗？'
}).then(() => {
  console.log('确定回调')
}).catch(() => {
  console.log('取消回调')
})
```
