import { h } from "pl-vue"
import { FuncOverload } from "~/core/tools"

export default () => {
  const f = new FuncOverload();

  f.addImpl('number', 'number', (a, b) => {
    return a + b
  })
  const sum = f.overload(1, 2);

  f.addImpl('string', 'string', (a, b) => {
    return 'str: ' + a + b
  })
  const str = f.overload('a', 'b');

  return <div>{sum}<br/>{str}</div>
}