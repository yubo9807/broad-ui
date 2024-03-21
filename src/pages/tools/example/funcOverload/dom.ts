import { FuncOverload } from "~/core/tools"

export default () => {

  const f = new FuncOverload()
  f.addImpl('number', 'number', (a, b) => {
    return a + b
  })
  f.addImpl('string', 'string', (a, b) => {
    return 'str: ' + a + b
  })
  const sum = f.overload(1, 2);
  const str = f.overload('a', 'b')

  document.getElementById('container').innerHTML = `${sum}<br/>${str}`;
}