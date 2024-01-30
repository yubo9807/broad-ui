# Broad-UI

## 介绍

一个基于 Pl Vue 开发的 UI 组件库，不受任何框架的束缚，可进行原生操作。

##  性能

因为该组件库是基于 Pl Vue 开发的，与 Svelte 一样，我们省去了虚拟 DOM 的比较，直接更新 DOM。更多响应式更新等相关问题请前往 [Pl Vue](http://plvue.hpyyb.cn/docs/intro)。

## 组件

### 一般组件

```tsx
import { useComponent } from 'pl-vue';
import Component from 'broad-ui/comp/Component';

//                          组件     props
const node = useComponent(Component, {});
document.getElementById('container').appendChild(node);
```

### 使用组件内置方法

```tsx
import { useComponent } from 'broad-ui/utils';
import Component, { ComponentExpose } from 'broad-ui/comp/Component';
import { ref } from 'pl-vue';

const compRef = ref<ComponentExpose>();
const node = useComponent(Component, { ref: compRef });
document.getElementById('container').appendChild(node);
compRef.value.method();  // 调用组件提供方法
```

## 工具

导入即用 [工具函数](#/tools)