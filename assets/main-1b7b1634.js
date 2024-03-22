const n=`import { h, onMounted, ref } from "pl-vue";
import { Fulls } from "~/core/tools";

export default function() {
  const arr = [200, 300, 270, 100, 400, 100, 200, 300, 100, 140];

  const wrapRef = ref<HTMLElement>();
  onMounted(() => {
    new Fulls({
      el: wrapRef.value,
      column: Math.max(Math.trunc(wrapRef.value.offsetWidth / 200), 2),
    })
  })

  return <div ref={wrapRef}>{
    arr.map((val, i) => <div style={\`height: \${val}px; background: #eee\`}>{i}</div>)
  }</div>
}
`;export{n as default};
