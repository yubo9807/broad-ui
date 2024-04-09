
## Methods

| 方法名 | 说明 | 类型 | 备注 |
| --- | --- | --- | --- |
| info | 提示消息 | `(text: string) => void` | - |
| success | 成功消息 | `(text: string) => void` | - |
| warning | 警告消息 | `(text: string) => void` | - |
| error | 错误消息 | `(text: string) => void` | - |
| closeAll | 关闭消息 | `() => void` | - |

## 多参调用

```tsx
Message({
  type:    'info',
  text:    '这是一条提示消息',
  duration: null,
})
```
