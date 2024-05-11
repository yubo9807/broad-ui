import { h } from "pl-vue";
import { PagePropsType } from "pl-vue/lib/router";
import Case, { Item } from "@/components/Case";
import { deepClone } from "pl-vue/lib/utils";

const NewCase = deepClone(Case);

export default function(props: PagePropsType) {

  const list: Item[] = [
    { path: 'falls', name: '瀑布流布局', },
    { path: 'chartWave', name: '波浪效果', },
    { path: 'chartTimerBar', name: '时间轴控制', },
    { path: 'codeConversion', name: '自定义语言高亮', },
    { path: 'fullScreen', name: '全屏控制', },
    { path: 'taskScheduling', name: '任务调度控制', },
    { path: 'eventEmitter', name: '事件触发形式', },
    { path: 'funcOverload', name: '函数重载', },
    { path: 'bloomFilter', name: '布隆过滤器', },
    { path: 'streamSplit', name: '事件流切割', },
    // { path: 'inlay', name: '字符镶嵌', },
  ]
  list.forEach(val => {
    val.dom = import(`./example/${val.path}/dom.ts`);
    val.domRaw = import(`./example/${val.path}/dom.ts?raw`);
    val.main = import(`./example/${val.path}/main.tsx`);
    val.mainRaw = import(`./example/${val.path}/main.tsx?raw`);
    val.readme = import(`../../../core/tools/${val.path}.md?raw`);
    val.code = import(`../../../core/tools/${val.path}.ts?raw`);
  })

  return <NewCase pagePath={props.path} data={list} phoneMountNode={() => document.getElementById('nav-tools')} />
}



