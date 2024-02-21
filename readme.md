# Broad-UI

<p style='font-size: 16px; text-indent: 2em;'>
一个基于 Pl Vue 开发的 UI 组件库，不受任何框架的束缚，可通过原生挂载。不需要考虑任何技术栈，开箱即用。
为解决项目开发中使用框架不统一，导致开发效率低、代码复用率低、代码维护性差等问题。
</p>

## 组件使用

```tsx
import { useComponent, ref } from 'pl-vue';
import Component from 'broad-ui/comp/Component';

const compRef = ref();
//                          组件      props
const node = useComponent(Component, { ref: compRef });
document.getElementById('container').appendChild(node);  // 挂载节点

compRef.value.method();  // 调用组件提供方法
```

> **性能问题**：因为该组件库是基于 Pl Vue 开发的，与 Svelte 一样，我们省去了虚拟 DOM 的比较，直接更新 DOM。更多响应式更新等相关问题请前往
<a href="http://plvue.hpyyb.cn/" target="_blank">Pl Vue</a>
