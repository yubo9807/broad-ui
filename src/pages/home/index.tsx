import { h } from "pl-vue";
import Markdown from "@/components/Markdown";
import use from '~/readme.md?raw';
import env from "~/config/env";
import style from "./index.module.scss";

export default function() {
  const text = use.replace(/~\/core/g, env.PROJECT_NAME.toLocaleLowerCase()).replace(/#.+\n/, '');
  return <div>
    <div className={style.banner}>
      <div className={style.box}>
        <h1>Broad-UI</h1>
      </div>
    </div>
    <Markdown text={text} />
  </div>
}
