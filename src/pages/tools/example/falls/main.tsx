import { h, onMounted, ref } from "pl-vue";
import { falls } from "~/core/tools";

export default function() {
  const arr = [200, 300, 270, 100, 400, 100, 200, 300, 100, 140];
  const wrapRef = ref<HTMLElement>();
  onMounted(() => {
    falls(wrapRef.value, {
      column: Math.max(Math.trunc(wrapRef.value.offsetWidth / 200), 2),
      rowGap: 20,
      colGap: 16,
    })
  })

  return <div ref={wrapRef}>{
    arr.map((val, i) => <div
      style={{
        height: val + 'px',
        border: '1px solid',
        boxSizing: 'border-box',
      }}
    >{i}</div>)
  }</div>
}
