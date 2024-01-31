import { useComponent } from "~/core/utils";
import CodeEdit from "~/core/comp/CodeEdit";

export default () => {
  const node = useComponent(CodeEdit, {
    defaultValue: `package main`,
    toHtml(val) {
      return `<code>${val}</code>`;
    }
  })

  document.getElementById('container').appendChild(node);
}
