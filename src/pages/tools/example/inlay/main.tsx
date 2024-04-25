import { h } from "pl-vue"
import { Inlay } from "~/core/tools"

export default () => {

  const inlay = new Inlay();
  inlay.text`
    --color: red;
    color: var(--color);
  `

  return <div style={inlay.text as () => string}>hello</div>
}