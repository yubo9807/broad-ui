import { h } from "pl-vue";
import { PagePropsType } from "pl-vue/lib/router";
import Case, { Item } from "@/components/Case";
import { deepClone } from "pl-vue/lib/utils";

const NewCase = deepClone(Case);

export default function(props: PagePropsType) {

  const list: Item[] = [
    { path: 'CodeEdit', name: '代码编辑', },
    { path: 'Partition', name: '区域分割拖拽', },
    { path: 'UnfoldText', name: '多行文本展开', },
    { path: 'BasicDialog', name: '系统弹窗', },
    { path: 'Switch', name: '开关', },
    { path: 'Message', name: '消息提示', },
    { path: 'Loading', name: 'Loading', },
  ]
  list.forEach(val => {
    val.dom = import(`./example/${val.path}/dom.ts`);
    val.domRaw = import(`./example/${val.path}/dom.ts?raw`);
    val.main = import(`./example/${val.path}/main.tsx`);
    val.mainRaw = import(`./example/${val.path}/main.tsx?raw`);
    val.readme = import(`../../../core/comp/${val.path}/readme.md?raw`);
    val.code = import(`../../../core/comp/${val.path}/index.tsx?raw`);
  })

  return <NewCase pagePath={props.path} data={list} phoneMountNode={() => document.getElementById('nav-comp')} />
}



