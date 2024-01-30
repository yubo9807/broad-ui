
## Option

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| ratio | 压缩比例 | number | 0.8 | 0-1 |
| sizeLimit | 大小限制 | { width: number, height: number } | - | 不传递时按原尺寸输出 |

## 说明

有些图片没有办法按比例压缩，如 PNG（无损格式），故只能在尺寸上改变大小
