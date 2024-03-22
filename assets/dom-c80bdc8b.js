const n=`import { useComponent } from "pl-vue";
import CodeEdit from "~/core/comp/CodeEdit";

export default () => {
  const node = useComponent(CodeEdit, {
    model: \`package main\`,
    toHtml(val) {
      return \`<code>\${val}</code>\`;
    }
  })

  document.getElementById('container').appendChild(node);
}
`;export{n as default};
