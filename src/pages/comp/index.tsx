import { h } from "pl-vue";
import { PagePropsType } from "pl-vue/lib/router";
import Case, { Item } from "@/components/Case";

export default function(props: PagePropsType) {

  const list: Item[] = [
    { path: 'CodeEdit', name: '代码编辑', },
    { path: 'Partition', name: '区域分割拖拽', },
  ]
  list.forEach(val => {
    val.dom = import(`./example/${val.path}/dom.ts`);
    val.domRaw = import(`./example/${val.path}/dom.ts?raw`);
    val.readme = import(`./example/${val.path}/readme.md?raw`);
  })

  return <Case pagePath={props.path} data={list} />
}



