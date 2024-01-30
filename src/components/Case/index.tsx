import { h } from "pl-vue";
import { Router, Route, Link } from "pl-vue/lib/router";
import NotFound from "@/components/NotFound";
import style from './style.module.scss';
import Example from "./example";
import '~/core/styles/custom-code-highlight.scss';

export type Item = {
  path: string
  name: string
  dom?: Promise<{ default: any }>
  domRaw?: Promise<{ default: any }>
  main?: Promise<{ default: any }>
  mainRaw?: Promise<{ default: any }>
  readme?: Promise<{ default: any }>
  
}
type Props = {
  pagePath: string
  data:     Item[]
}
export default function(props: Props) {

  return <div className={style.pageComp}>
    <ul className={style.side}>
      {props.data.map(val => <li>
        <Link to={props.pagePath + '/' + val.path}>{val.name}</Link>
      </li>)}
    </ul>
    <main className={style.main}>
      <Router prefix={props.pagePath}>
        <Route path='' component={NotFound} redirect={props.pagePath + '/'+ props.data[0].path} />
        {...props.data.map(val => <Route path={'/' + val.path} component={() => Example(val)} />)}
      </Router>
    </main>
  </div>
}



