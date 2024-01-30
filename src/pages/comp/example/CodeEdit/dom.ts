import { simplifyUseComponent } from "~/core/utils";
import CodeEdit, { CodeEditProps } from "~/core/comp/CodeEdit";

export default () => {
  const [node] = simplifyUseComponent<CodeEditProps, {}>(CodeEdit, {
    defaultValue: `package main`,
    toHtml(val) {
      return `<code>${val}</code>`;
    }
  })

  document.getElementById('container').appendChild(node);
}
