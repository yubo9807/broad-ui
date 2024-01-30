import { h } from "pl-vue";
import Markdown from "@/components/Markdown";
import use from '~/readme.md?raw';
import env from "~/config/env";

export default function() {
  const text = use.replace(/~\/core/g, env.PROJECT_NAME.toLocaleLowerCase()).replace(/#.+\n/, '');
  return <Markdown text={text} />
}
