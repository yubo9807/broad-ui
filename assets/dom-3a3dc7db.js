const n=`import { FuncOverload } from "~/core/tools"

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

  document.getElementById('container').innerHTML = \`\${sum}<br/>\${str}\`;
}`;export{n as default};
