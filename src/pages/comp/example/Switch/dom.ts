import { useComponent } from "pl-vue"
import Switch from "~/core/comp/Switch"

export default () => {
  const node = useComponent(Switch);
  document.getElementById('container').appendChild(node);
}