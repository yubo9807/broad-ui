import { h } from "pl-vue";
import { PagePropsType } from "pl-vue/lib/router";
import Case, { Item } from "@/components/Case";

export default function(props: PagePropsType) {

  const list: Item[] = [
    { path: 'chartWave', name: '波浪效果', },
    { path: 'falls', name: '瀑布流布局', },
    { path: 'imageCompress', name: '图片压缩', },
    { path: 'codeHighlighct', name: '自定义语言高亮', },
    { path: 'screen', name: '全屏控制', },
    { path: 'amountUppercase', name: '数字金额大写', },
  ]
  list.forEach(val => {
    val.dom = import(`./example/${val.path}/dom.ts`);
    val.domRaw = import(`./example/${val.path}/dom.ts?raw`);
    // val.main = import(`./example/${val.path}/main.tsx`);
    // val.mainRaw = import(`./example/${val.path}/main.tsx?raw`);
    val.readme = import(`./example/${val.path}/readme.md?raw`);
  })

  return <Case pagePath={props.path} data={list} />
}



