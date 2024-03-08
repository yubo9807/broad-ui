const t=`import { h } from "pl-vue";
import CodeEdit from "~/core/comp/CodeEdit";

export default() => {
  const code = \`package main\`;

  function toHtml(val: string) {
    return \`<code>\${val}</code>\`
  }

  return <CodeEdit defaultValue={code} toHtml={toHtml} />
}
`;export{t as default};
