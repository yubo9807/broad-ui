import { Component, h, onBeforeUnmount, onMounted } from "pl-vue";
import { Router, Route, Link } from "pl-vue/lib/router";
import style from './style.module.scss';
import Example from "./example";
import '~/core/styles/custom-code-highlight.scss';
import { isPhone } from "@/utils/judge";
import { app } from "@/main";

export type Item = {
  path:     string
  name:     string
  dom?:     Promise<{ default: Function }>
  domRaw?:  Promise<{ default: string }>
  main?:    Promise<{ default: Component }>
  mainRaw?: Promise<{ default: string }>
  readme?:  Promise<{ default: string }>
  code?:    Promise<{ default: string }>
}
type Props = {
  pagePath:       string
  data:           Item[]
  phoneMountNode: () => Element
}
export default function(props: Props) {

  const sideNode = <ul className={style.side}>
    {props.data.map(val => <li>
      <Link to={props.pagePath + '/' + val.path}>{val.name}</Link>
    </li>)}
  </ul>;

  if (isPhone) {
    let node: HTMLElement;
    onMounted(() => {
      const mountNode = props.phoneMountNode();
      node = app.render(sideNode);
      mountNode.parentElement.insertBefore(node, mountNode.nextSibling);
    })
    onBeforeUnmount(() => {
      node.remove();
    })
  }

  return <div className={style.case}>
    {!isPhone && sideNode}
    <main className={style.main}>
      <Router prefix={props.pagePath}>
        <Route path='' redirect={props.pagePath + '/'+ props.data[0].path} />
        {...props.data.map(val => <Route path={'/' + val.path} component={() => Example(val)} />)}
      </Router>
    </main>
  </div>
}
