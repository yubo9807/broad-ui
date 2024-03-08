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
  ]
  list.forEach(val => {
    val.dom = import(`./example/${val.path}/dom.ts`);
    val.domRaw = import(`./example/${val.path}/dom.ts?raw`);
    val.main = import(`./example/${val.path}/main.tsx`);
    val.mainRaw = import(`./example/${val.path}/main.tsx?raw`);
    val.readme = import(`./example/${val.path}/readme.md?raw`);
  })

  return <NewCase pagePath={props.path} data={list} phoneMountNode={() => document.getElementById('nav-comp')} />
}



